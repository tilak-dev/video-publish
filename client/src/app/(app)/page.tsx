"use client";

import VideoCard from "@/components/HomeCard";
import { useVideos } from "@/context/FetchVideo";

const VideoGrid = () => {
  const { videos } = useVideos();

  return (
    <div className="h-full w-full bg-gradient-to-b from-gray-50 to-gray-100 py-8 overflow-y-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Trending Videos</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
          {videos.map((video) => (
            <VideoCard
              key={video._id}
              thumbnail={video.thumbnail}
              title={video.title}
              owner={video.owner}
              views={video.views}
              createdAt={video.createdAt}
              uploadedAt={video.uploadedAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
