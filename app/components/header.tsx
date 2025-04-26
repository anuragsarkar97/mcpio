'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={
        'fixed top-0 z-50 w-full h-16 bg-white/75 backdrop-blur-sm border-gray-200 border-b-0'
      }
    >
      <div className={'mx-auto w-full h-full max-w-screen-xl px-6'}>
        <div className={'flex items-center justify-between h-full'}>
          <div className={'flex items-center space-x-8'}>
            <Link className={'flex items-center space-x-2'} href="/">
              <span className={'text-2xl'}>🌈</span>
              <span className={'font-medium text-black'}>MCP Registry</span>
            </Link>
          </div>
          <div className={'flex items-center'}>
            <nav className={'hidden lg:flex items-center space-x-2'}>
              <Link
                href="/servers"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/servers')
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                Servers
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about')
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                About us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
