import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SuggestVideos() {
  return (
    <div className="w-80 bg-gray-900 border-l border-gray-700 overflow-y-auto p-4">
      <h2 className="text-lg font-semibold mb-4">Up Next</h2>
      {/* Suggested Video Card */}
      {Array.from({ length: 10 }).map((_, index) => (
        <Link key={index} href={"/"} className="w-full">
          <div className="flex space-x-3 p-2 hover:border-indigo-200 border-[1px] border-transparent transition-all duration-150 ease-in rounded-lg cursor-pointer">
            <Image
              src="/thumbnail.png"
              width={60}
              height={60}
              className="rounded-lg h-20 w-60"
              alt="Suggested Video Thumbnail "
            />
            <div className="flex flex-col justify-between">
              <p className="text-xs font-semibold">
                JavaScript Fundamentals: Variables and Data Types
              </p>
              <p className="text-xs text-white/30">
                10.3k Views • 44 minutes ago
              </p>
              <p className="text-xs text-gray-400">Code Master</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
