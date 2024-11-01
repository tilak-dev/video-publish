import VideoCard from "@/components/HomeCard";
import { useVideos } from "@/context/FetchVideo";

const VideoGrid = () => {
  const { videos } = useVideos();
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-y-auto  overflow-x-hidden ">
        {videos.map((video, index) => (
          <VideoCard
            key={video._id}
            thumbnail={video.thumbnail}
            title={video.title}
            owner_name={video.owner_name}
            views={video.views}
            createdAt={video.createdAt}
            uploadedAt={video.uploadedAt}
            owner_image={video.owner_image}
          />
        ))}
      </div>
      ,
    </div>
  );
};

export default VideoGrid;
