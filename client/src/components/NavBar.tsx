import React from 'react'

const Navbar = () => {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white h-16">
            {/* Logo */}
            <div className="flex items-center">
                <span>0</span>
                <span className="ml-2 text-xl font-bold text-red-500">MyTube</span>
            </div>

            {/* Search Bar */}
            <div className="flex items-center flex-grow max-w-lg mx-auto">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 text-gray-900 rounded-full shadow focus:outline-none"
                />
                <button className="relative -ml-8 text-gray-600">
                <span>0</span>
                </button>
            </div>

            {/* User Profile & Notifications */}
            <div className="flex items-center space-x-4">
            <span>0</span>
            <span>0</span>
            <span>0</span>
            </div>
        </header>
    );
};

export default Navbar;

