"use client"

import { useState } from "react";
import Link from "next/link";
import { FaLock, FaEnvelope } from "react-icons/fa";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
                <p className="text-center text-gray-600 mb-8">Log in to your account</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <FaEnvelope />
                            </span>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-10 pr-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent transition"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <FaLock />
                            </span>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10 pr-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent transition"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition duration-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    >
                        Login
                    </button>

                    {/* Additional Links */}
                    <div className="flex justify-between text-sm text-gray-600 mt-4">
                        <Link href="/forgot-password" className="hover:text-indigo-500">Forgot Password?</Link>
                        <Link href="/signup" className="hover:text-indigo-500">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;


