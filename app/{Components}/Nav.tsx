"use client";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [login, setLogin] = useState<boolean>(false);
  return (
    <header className="bg-gray-500 text-white-200 w-full">
      <nav className="flex justify-between items-center w-full sm:px-6 sm:py-4 text-xs sm:text-sm lg:text-md p-1 max-[400px]:flex-col ">
        <Link href="/">
          <div className="flex mb-1 sm:mb-0 max-[280px]:flex-col ">
            <div className="text-yellow-400 text-2xl">Sleeky</div>
            <div className="text-blue-200">Programmers</div>
          </div>
        </Link>
        <div className="flex gap-2 sm:gap-3 md:gap-10 text-white ">
          <Link
            href="/"
            className="hover:px-3 rounded-md hover:bg-grey-200 hover:border-2 focus:border-b px-2"
          >
            Home
          </Link>
          <Link
            href="/Employees"
            className="hover:px-3 rounded-md hover:bg-grey-200 hover:border-2 focus:border-b px-2 active:border-b active:text-yellow-500"
          >
            Employees
          </Link>
          <Link
            href="/Login"
            className="hover:px-3 rounded-md hover:bg-grey-200 hover:border-2 focus:border-b px-2 active:border-b active:text-yellow-500"
          >
            {login ? "Sign out" : "Login"}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
