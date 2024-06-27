// components/Navbar.tsx
"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 bg-neutral-50/70 dark:bg-neutral-800/70 backdrop-blur-md p-4 z-10">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <Link href={"/"} className="text-xl font-bold cursor-pointer text-neutral-800 dark:text-neutral-50">
          Krut.js Example
        </Link>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          {session?.user?.image && (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="User profile" src={session.user.image} />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-lg menu menu-sm dropdown-content bg-neutral-50/30 dark:bg-neutral-800/30 backdrop-blur-md rounded-box w-52">
                <li>
                  <a className="text-neutral-800 dark:text-neutral-50 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50">{session.user.name}</a>
                </li>
                <li>
                  <a onClick={() => signOut()} className="text-neutral-800 dark:text-neutral-50 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
