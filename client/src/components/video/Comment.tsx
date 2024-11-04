import React from 'react'

export default function Comment() {
  return (
    <div className="h-full flex flex-col gap-y-4">
    <p className="font-semibold mb-3">573 Comments</p>
    <div className="">
      <input
        type="text"
        placeholder="Add a Comment"
        className="w-full p-2 bg-gray-800 rounded-lg text-gray-200 placeholder-gray-500"
      />
      <button className="-ml-16">Post</button>
    </div>
     <strong>All Comments </strong>
  <div className=" text-sm"></div>
  </div>
  )
}
