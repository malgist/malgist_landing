import { X, Send, MessageCircle, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 text-black flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Twitter"
            >
              <X size={20} />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 text-black flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Telegram"
            >
              <Send size={20} />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 text-black flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Discord"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 text-black flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="YouTube"
            >
              <Video size={20} />
            </a>
          </div>

          {/* Links Sections */}
          <div className="flex gap-16 md:gap-24">
            {/* Legal Column */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-gray-900 mb-1">Legal</h3>
              <a
                href="/privacy"
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-gray-900 mb-1">Company</h3>
              <a
                href="/faq"
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
              >
                FAQ
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
              >
                Contact
              </a>
              <a
                href="/blog"
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
              >
                Blog
              </a>
              <a
                href="/media-kit"
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
              >
                Media Kit
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}