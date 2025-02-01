import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2">
        {/* Top area: Blocks */}
          <div className="text-sm text-gray-600 text-center">
              &copy; Clarify-ai.org - All rights reserved. 2025
          </div>
      </div>
    </footer>
  );
}
