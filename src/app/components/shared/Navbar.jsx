"use client"; // Make sure this is at the very top of your file since you use usePathname()

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  const pathname = usePathname();

  // 1. Define your navigation links in an array
  const links = [
    { label: "Books", href: "/books" },
    { label: "Results", href: "/results" },
    { label: "Docs", href: "/docs" },
  ];

  const nav = (
    <ul className="flex gap-4">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              isActive
                ? " font-bold border-b-3  border-amber-300 "
                : "text-white hover:text-primary"
            }
          >
            <li>{link.label}</li>
          </Link>
        );
      })}
    </ul>
  );

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
      className="navbar bg-secondary text-white shadow-sm"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white"
          >
            {nav}
          </ul>
        </div>
        <Logo />
      </div>

      <div className="navbar-center hidden lg:flex text-white">
        <div className="px-1">{nav}</div>
      </div>

      <div className="navbar-end flex gap-4">
        <div className="flex items-center gap-2 bg-amber-300 px-3 py-1 rounded-4xl">
          <div className="bg-green-500 rounded-full w-2 h-2"></div>
          <h2>{session?.user?.name}</h2>
        </div>
        <div>
          {session?.user ? (
            <button
              onClick={() => signOut()} // Replace with your actual signOut() function
              className="btn bg-red-600 hover:bg-red-700 rounded-4xl text-white"
            >
              Logout
            </button>
          ) : (
            <Link
              href={"/login"}
              className="btn bg-primary rounded-4xl text-black hover:scale-105"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
