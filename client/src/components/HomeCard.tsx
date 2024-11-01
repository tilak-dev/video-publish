import { VideoCardType } from '@/types/type';
import Image from 'next/image';

const VideoCard = ({
  _id,
  thumbnail,
  owner,
  views,
  createdAt,
  title,
  uploadedAt,
}: VideoCardType) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full p-3">
      {/* Video Thumbnail */}
      <div className="relative w-full h-auto rounded-lg overflow-hidden">
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      {/* Video Details */}
      <div className="flex items-center mt-3 space-x-3">
        {/* Channel Avatar */}
        {owner.avatar ? (
          <img
            src={owner.avatar}
            alt="Channel Avatar"
            width={40}
            height={40}
            className="rounded-full border-2 border-gray-200 shadow-sm"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-xs">N/A</span>
          </div>
        )}

        {/* Title and Channel Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
          <p className="text-sm text-gray-600">{owner.name}</p>
          <p className="text-xs text-gray-500">{views} views • 1 day ago</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
