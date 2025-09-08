import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 justify-items-center w-full bottom-0">
      <div className=" grid grid-cols-1 md:grid-cols-3 justify-items-center pt-6 pb-6 text-xs gap-8">
        {/* About section */}
        <div className="">
          <h2 className="text-black text-sm">CraftApp</h2>
          <p className="text-black text-sm">
            Empowering your creativity with
            <br /> cutting-edge AI technology
          </p>

          {/* Social links */}
          <div className=" flex gap-4 mt-3 ">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-green-800"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-green-800"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-green-800"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-green-800"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-l-2 border-green-800 pl-4">
          <h2 className="text-green-800 font-bold text-sm  ">Quick Links</h2>
          <ul className="space-y-2 text-gray-800">
            <li>
              <a
                href="/dashboard"
                className="hover:text-green-500 transition-colors"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/dashboard/about"
                className="hover:text-green-500 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/dashboard/postpage"
                className="hover:text-green-500 transition-colors"
              >
                Posts
              </a>
            </li>
            <li>
              <a
                href="/dashboard/settings"
                className="hover:text-green-500 transition-colors"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>

        {/* Contact section */}
        <div className=" space-y-2">
          <h2 className="text-green-800 text-sm  font-bold">Contact Us</h2>
          <p className="text-gray-800 text-sm">Email: Mohammad@gmail.com</p>
          <p className="text-gray-800 text-sm">Phone: +93 79 095 72 55</p>
          <p className="text-gray-800 text-sm">Address: Kabul, Afghanistan</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="pt-4 pb-4 border-t w-full border-gray-200 text-center text-gray-800 text-sm">
        {new Date().getFullYear()} CraftApp.
      </div>
    </footer>
  );
}
