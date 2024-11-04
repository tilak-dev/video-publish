import Image from 'next/image'
import React from 'react'

export default function SuggestVideos() {
  return ( <div className="w-80 bg-gray-900 border-l border-gray-700 overflow-y-auto p-4">
    <h2 className="text-lg font-semibold mb-4">Up Next</h2>
    {/* Suggested Video Card */}
    {Array.from({ length: 10 }).map((_, index) => (
      <div key={index} className="flex mb-4 space-x-3">
        <Image
          src="/thumbnail.png"
          width={120}
          height={70}
          className="rounded-lg"
          alt="Suggested Video Thumbnail"
        />
        <div className="flex flex-col justify-between">
          <p className="text-sm font-semibold">
            JavaScript Fundamentals: Variables and Data Types
          </p>
          <p className="text-xs text-gray-400">
            10.3k Views • 44 minutes ago
          </p>
          <p className="text-xs text-gray-400">Code Master</p>
        </div>
      </div>
    ))}
  </div>
  )
}
