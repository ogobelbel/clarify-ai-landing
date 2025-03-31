import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2">
        {/* Top area: Blocks */}
          <div className="text-sm text-gray-600 text-center">
              &copy; Clarify-ai.org - All rights reserved. 2025
              <span className="mx-2">|</span>
              <Link 
                href="/privacy-policy" 
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                Privacy Policy
              </Link>
          </div>
      </div>
    </footer>
  );
}
