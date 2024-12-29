// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="text-white bg-black body-font">
      <div className="container mx-auto py-2 flex items-center justify-center">
        <Link href={'/'} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl md:text-3xl">IKRAMs BLOGS</span>
        </Link>
      </div>
    </header>
  );
}
