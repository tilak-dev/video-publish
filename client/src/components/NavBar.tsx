"use client"
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    setUser(localStorage.getItem("user"))
  }, [window.localStorage.getItem("user")])
  const {logout } = useAuth()
  const OnLogout =() => {
    logout()
  }
  return (
    <header className="flex items-center justify-between px-8 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white h-16">
      {/* Logo */}
      <div className="flex items-center">
        <Link href={"/"}>
          <span className="ml-2 text-xl font-bold text-red-500">MyTube</span>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex items-center flex-grow max-w-lg mx-auto  text-gray-900 rounded-full shadow bg-white">
        <input
          type="text"
          placeholder="Search"
          className=" px-5 py-2 text-gray-900 bg-transparent w-5/6  focus:outline-none"
          required
        />
        <button className="flex justify-center items-center text-gray-600 w-1/6 cursor-pointer">
          <span className="text-gray-800 hover:text-blue-600">
            <IoSearch size={18} />
          </span>
        </button>
      </div>

      {/* User Profile & Notifications */}
      <div className="flex items-center space-x-4">
        {user ?
        <>
         <Link
          href="/"
          className="text-gray-800 py-1.5 rounded-full px-5 border-[1px] border-indigo-600 bg-indigo-500 hover:bg-indigo-800 transition duration-300 ease-in-out hover:text-white"
        >
         Home
        </Link>
        {/* Signup */}
        <button
          onClick={OnLogout}
          className="text-white py-1.5 rounded-full px-5 border-[1px] border-red-600 bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out"
        >
          Logout
        </button>
        </> :
          <>
           <Link
          href="/login"
          className="text-gray-800 py-1.5 rounded-full px-5 border-[1px] border-indigo-600 bg-indigo-500 hover:bg-indigo-800 transition duration-300 ease-in-out hover:text-white"
        >
          Login
        </Link>
        {/* Signup */}
        <Link
          href="/signup"
          className="text-gray-800 py-1.5 rounded-full px-5 border-[1px] border-green-600 bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out hover:text-white"
        >
          Sign up
        </Link>
          </>}
        {/* Login */}
       
      </div>
    </header>
  );
};

export default Navbar;
