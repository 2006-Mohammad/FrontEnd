// import { useState, useEffect, useRef } from "react";
// import { MdSend } from "react-icons/md";
// import { BsChatDots } from "react-icons/bs";

// export default function ChatPage({ username = "Mohammad jan" }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const messagesEndRef = useRef(null);

//   // Fetch messages from backend
//   const fetchMessages = async () => {
//     try {
//       const res = await fetch("http://localhost:4000/api/messages");
//       const data = await res.json();
//       setMessages(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchMessages();

//     // Poll every 3 seconds for new messages
//     const interval = setInterval(fetchMessages, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Scroll to bottom whenever messages update
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Send a new message
//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     try {
//       await fetch("http://localhost:4000/api/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           text: input,
//           senderName: username,
//         }),
//       });
//       setInput("");
//       fetchMessages(); // refresh messages after sending
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed bottom-20 right-5 w-[400px] h-[550px] flex flex-col shadow-lg z-[1000] bg-white rounded-lg">
//           {/* Header */}
//           <div className="relative bg-green-600 text-white p-2 flex items-center gap-2 rounded-t-lg">
//             <img src="/../../images/logo.svg" alt="craftapp" className="w-10" />
//             <span className="font-bold">CraftApp Chat</span>
//           </div>

//           {/* Messages Body */}
//           <div className="text-sm overflow-y-auto flex-1 p-3">
//             {messages.length === 0 ? (
//               <p className="text-gray-500">هیچ پیامی وجود ندارد.</p>
//             ) : (
//               messages.map((msg, idx) => (
//                 <div key={idx} className="mb-1">
//                   <strong>{msg.senderName}:</strong> {msg.text}
//                 </div>
//               ))
//             )}
//             <div ref={messagesEndRef}></div>
//           </div>

//           {/* Input Footer */}
//           <div className="flex items-center gap-2 p-2 border-t">
//             <input
//               type="text"
//               placeholder="Write your message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-green-600 hover:bg-green-700 text-white p-2 rounded"
//             >
//               <MdSend size={20} />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Floating Chat Icon */}
//       <button
//         className="fixed bottom-5 right-5 w-[50px] h-[50px] flex items-center justify-center rounded-full shadow-lg bg-green-600 hover:bg-green-700 text-white z-[1000]"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <BsChatDots size={24} />
//       </button>
//     </>
//   );
// }
