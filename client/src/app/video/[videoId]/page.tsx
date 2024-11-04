"use client";
import HomeAsideLayout from "@/components/HomeAsideLayout";
import Comment from "@/components/video/Comment";
import OwnerDetails from "@/components/video/ownerDetails";
import SuggestVideos from "@/components/video/SuggestVideos";
import { VideoCardType } from "@/types/type";
import api from "@/utils/axiosInstance";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiThumbsUp, FiMessageSquare } from "react-icons/fi";

const VideoDetailPage = () => {
  const [video, setVideo] = useState<VideoCardType | null>(null);
  const { videoId } = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchVideo = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/video/${videoId}`);
      if (!response.data) {
        console.error("Error fetching video details");
      }
      console.log("data ", response.data.data);
      setVideo(response.data.data);
    } catch (error) {
      console.log("Error fetching video details", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchVideo();
  }, [videoId]);
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
          <video className="w-full h-[60vh] " controls src={video?.videoFile} />
        </div>
        {/* Video Details */}
        <div className="p-6 space-y-3 border-b border-gray-700">
          <h1 className="text-2xl font-semibold">{video?.title}</h1>
          <div className="flex flex-col text-gray-400">
            <span>{video?.views} views • 18 hours ago</span>
            <div className="text-sm">
            {video?.description}
            </div>
          </div>
          <div className="flex items-center justify-between">
            {/* Channel Information */}
            <OwnerDetails />
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-2">
                <FiThumbsUp /> <span>{video?.likes}</span>
              </span>
              <span className="flex items-center space-x-2">
                <FiMessageSquare /> <span>{video?.views}</span>
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
