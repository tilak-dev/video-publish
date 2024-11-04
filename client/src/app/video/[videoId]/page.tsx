"use client";
import HomeAsideLayout from "@/components/HomeAsideLayout";
import OwnerDetails from "@/components/video/ownerDetails";
import SuggestVideos from "@/components/video/SuggestVideos";
import { FiThumbsUp, FiMessageSquare, FiShare2 } from "react-icons/fi";

const VideoDetailPage = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-900 text-white px-8 py-10 gap-x-10 overflow-y-auto" >
      {/* Sidebar */}
      {/* <div className="w-1/6">
        <HomeAsideLayout/>
      </div> */}

      {/* Main Content */}
      <div className="h-full flex flex-1 flex-col">
        {/* Video Player */}
        <div className="bg-black rounded-xl ">
          <video className="w-full h-[60vh] " controls src="/video.mp4" />
        </div>

        {/* Video Details */}
        <div className="p-6 space-y-3 border-b border-gray-700">
          <h1 className="text-2xl font-semibold">Advanced React Patterns</h1>
          <div className="flex items-center space-x-4 text-gray-400">
            <span>30,164 views • 18 hours ago</span>
            <span className="flex items-center space-x-2">
              <FiThumbsUp /> <span>3050</span>
            </span>
            <span className="flex items-center space-x-2">
              <FiMessageSquare /> <span>20</span>
            </span>
          </div>

          <div className="flex items-center justify-between">
            {/* Channel Information */}
            <OwnerDetails />
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-400 hover:text-white">
                <FiShare2 /> <span>Share</span>
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md">
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Comment Section */}
        <div className="h-full">
          <p className="font-semibold mb-3">573 Comments</p>
          <input
            type="text"
            placeholder="Add a Comment"
            className="w-full p-2 bg-gray-800 rounded-lg text-gray-200 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Suggested Videos */}
      <div className="">
      <SuggestVideos />  
      </div>
      
    </div>
  );
};

export default VideoDetailPage;
