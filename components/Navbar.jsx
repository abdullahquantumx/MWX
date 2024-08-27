// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/ML4E.png"
                  width={64}
                  height={64}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          {/* Navbar Links */}
          <div className="hidden md:flex items-center space-x-4 text-2xl">
            <Link href="/project" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium">
              Project
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium">
              About Us
            </Link>
            <Link href="/resources" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
