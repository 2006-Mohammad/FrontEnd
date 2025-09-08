import { useEffect, useState } from "react";

function PostPage() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const API_BASE = "http://localhost:4000"; // backend URL

  // Fetch posts
  const fetchPosts = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/posts`, {
        credentials: "include",
      });
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Failed to fetch posts", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Create post
  const createPost = async (e) => {
    e.preventDefault();
    if (!caption && !image) return;
    setLoading(true);

    const fd = new FormData();
    if (caption) fd.append("caption", caption);
    if (image) fd.append("image", image);

    try {
      await fetch(`${API_BASE}/api/posts`, {
        method: "POST",
        body: fd,
        credentials: "include",
      });
      setCaption("");
      setImage(null);
      await fetchPosts();
    } catch (err) {
      console.error("Failed to create post", err);
    } finally {
      setLoading(false);
    }
  };

  // Add comment
  const addComment = async (postId, text) => {
    if (!text) return;

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please sign in to comment");
      return;
    }

    try {
      await fetch(`${API_BASE}/api/posts/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          text,
          author: user.name, // logged-in user
        }),
      });
      await fetchPosts();
    } catch (err) {
      console.error("Failed to add comment", err);
    }
  };

  return (
    <div className="sm:max-w-3xl mx-auto p-2">
      <h1 className="text-2xl sm:text-red-600 font-bold mb-4 text-center">
        CrafApp Post
      </h1>

      {/* Post Form */}
      <form onSubmit={createPost} className="card mb-6 space-y-3">
        <textarea
          className="w-full border rounded-xl p-3 outline-none focus:ring"
          placeholder="What's on your mind?"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded-xl bg-green-800 text-white font-medium"
        >
          {loading ? "Posting…" : "Post"}
        </button>
      </form>

      {/* Posts List */}
      <div className="space-y-6">
        {posts.map((p) => (
          <PostCard key={p._id || p.id} post={p} onComment={addComment} />
        ))}
      </div>
    </div>
  );

  // PostCard component
  function PostCard({ post, onComment }) {
    const [commentText, setCommentText] = useState("");

    const submit = async (e) => {
      e.preventDefault();
      await onComment(post._id || post.id, commentText);
      setCommentText("");
    };

    return (
      <div className="card">
        {post.image_path && (
          <img
            src={
              post.image_path.startsWith("http")
                ? post.image_path
                : `${API_BASE}${post.image_path}`
            }
            alt=""
            className="w-full rounded-xl mb-3"
          />
        )}

        {post.caption && <p className="mb-3">{post.caption}</p>}
        <p className="text-sm text-gray-500 mb-2">
          Posted at {new Date(post.created_at).toLocaleTimeString()}
        </p>

        {/* Comments */}
        <div className="space-y-2 mb-3">
          {post.comments?.length > 0 ? (
            post.comments.map((c) => (
              <div key={c._id || c.id} className="border rounded-xl p-2">
                <p className="text-sm">
                  <span className="font-semibold">{c.author}:</span> {c.text}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(c.created_at).toLocaleString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No comments yet.</p>
          )}
        </div>

        {/* Comment Form */}
        <form onSubmit={submit} className="flex gap-2">
          <input
            className="flex-1 border rounded-xl p-2"
            placeholder="Write a comment…"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button className="px-4 rounded-xl bg-green-800 text-white">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default PostPage;
