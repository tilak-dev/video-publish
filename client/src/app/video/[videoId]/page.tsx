"use client";
import HomeAsideLayout from "@/components/HomeAsideLayout";
import Comment from "@/components/video/Comment";
import OwnerDetails from "@/components/video/ownerDetails";
import SuggestVideos from "@/components/video/SuggestVideos";
import { useParams } from "next/navigation";
import { FiThumbsUp, FiMessageSquare, FiShare2 } from "react-icons/fi";

const VideoDetailPage = () => {
  const {videoId} = useParams()
  console.log("bhai video id ",videoId)
  return (
    <div className="md:flex h-[calc(100vh-4rem)] bg-gray-900 text-white pl-8 py-10 gap-x-10 overflow-y-auto grid grid-cols-1">
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
          <div className="flex flex-col text-gray-400">
            <span>30,164 views • 18 hours ago</span>
            <div className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              possimus, tempore ex commodi delectus perspiciatis fuga repellat
              architecto voluptatum sequi odit cum reprehenderit recusandae
              officia inventore earum aperiam exercitationem hic.
            </div>
          </div>
          <div className="flex items-center justify-between">
            {/* Channel Information */}
            <OwnerDetails />
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-2">
                <FiThumbsUp /> <span>3050</span>
              </span>
              <span className="flex items-center space-x-2">
                <FiMessageSquare /> <span>20</span>
              </span>
            </div>
          </div>
        </div>

        {/* Comment Section */}.
        <div className="">
        <Comment />   
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
