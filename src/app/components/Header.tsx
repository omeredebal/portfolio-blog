'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Anasayfa', path: '/' },
  { name: 'Hakkımda', path: '/about' },
  { name: 'Projeler', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'İletişim', path: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-gray-900 bg-opacity-80 backdrop-blur-md text-white shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-lg font-bold">Ömer Edebalı</div>
        <nav>
          <ul className="flex space-x-6 text-sm">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`hover:text-blue-400 transition ${
                    pathname === item.path ? 'text-blue-400 font-semibold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
