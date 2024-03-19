'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideMenu() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block bg-green-300 w-64">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center m-3">
          <Image
            src="/logo.jpg"
            alt="Main Logo"
            width={100}
            height={100}
            priority
          />
          <span>Fish Market Logo</span>
        </div>
        <ul className="list-none m-3">
          <li className="p-3 hover:bg-blue-500 hover:text-white transition duration-200 cursor-pointer">
            <Link className={`${pathname === '/' ? 'text-white' : ''}`} 
            href="/">Pre-Market</Link>
          </li>
          <li className="p-3 hover:bg-blue-500 hover:text-white transition duration-200 cursor-pointer">
            <Link className={`${pathname === '/otc-market' ? 'text-white' : ''}`} 
            href="/otc-market">OTC Market</Link>
          </li>
          <li className="p-3 hover:bg-blue-500 hover:text-white transition duration-200 cursor-pointer">
            <Link className={`${pathname === '/points-market' ? 'text-white' : ''}`} 
            href="/points-market">Points Market</Link>
          </li>
          <li className="p-3 hover:bg-blue-500 hover:text-white transition duration-200 cursor-pointer">
          <Link className={`${pathname === '/staking' ? 'text-white' : ''}`} 
            href="/staking">Staking</Link>
          </li>
          <li className="p-3 hover:bg-blue-500 hover:text-white transition duration-200 cursor-pointer">
          <Link className={`${pathname === '/dashboard' ? 'text-white' : ''}`} 
            href="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <div className="m-3 bottom-0 absolute">Copyright text</div>
      </div>
    </aside>
  );
}
