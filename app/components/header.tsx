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
              <img src="/icon.svg" alt="MCP Registry" className="w-6 h-6" />
              <span className={'font-medium text-black'}>MCP Registry</span>
            </Link>
          </div>
          <div className={'flex items-center'}>
            <nav className={'hidden lg:flex items-center space-x-2'}>
              <Link
                href="/servers"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/servers')
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Servers
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about')
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
