import Link from 'next/link';
import React from 'react';
import Admin from './Admin';

export const Sidebar = () => {
  return (
    <aside className="bg-gray-800 w-64 h-screen fixed top-0 left-0 z-50 p-5">
      <Admin />
      <nav className="mt-10 ml-5">
        <ul className="text-white">
          <li className="py-2">
            <Link href="/" className="block hover:bg-gray-800">
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link href="#" className="block hover:bg-gray-800">
              About
            </Link>
          </li>
          <li className="py-2">
            <Link href="#" className="block hover:bg-gray-800">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
