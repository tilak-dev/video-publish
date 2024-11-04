import Image from 'next/image'
import React from 'react'

export default function OwnerDetails() {
  return (
    <div className="flex items-center space-x-3">
    <Image
      src="/thumbnail.png"
      width={50}
      height={50}
      className="rounded-full"
      alt="Channel Avatar"
    />
    <div>
      <h2 className="text-lg font-semibold">React Patterns</h2>
      <p className="text-gray-400">757K Subscribers</p>
    </div>
    <button className="ml-4 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold">
      Subscribe
    </button>
  </div>
  )
}
