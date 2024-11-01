import { VideoCardType } from "@/types/type";
import dayjs from "dayjs";
import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
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
      <div className="flex justify-center w-full h-auto rounded-lg overflow-hidden">
        <Link href={`/video/${_id}`}>
          <img
            src={thumbnail}
            alt="Video Thumbnail"
            className="transition-transform duration-300 transform hover:scale-105 cursor-pointer"
          />
        </Link>
      </div>

      {/* Video Details */}
      <div className="flex items-center mt-3 space-x-3">
        {/* Channel Avatar */}
        {owner?.avatar ? (
          <img
            src={owner.avatar}
            alt="Channel Avatar"
            className="rounded-full w-10 h-10 border-2 border-gray-200 shadow-sm"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-xs">N/A</span>
          </div>
        )}

        {/* Title and Channel Info */}
        <div className="flex-1">
          <Link href={`/video/${_id}`}>
            {" "}
            <h3 className="text-sm font-semibold text-gray-900 text-wrap truncate">
              {title?.length <= 60 ? title : title.substring(0, 69)}
              {title?.length >= 60 ? "..." : ""}
            </h3>
          </Link>

          <p className="text-sm text-gray-600">{owner?.fullName}</p>
          <p className="text-xs text-gray-500">
            {views} views • {dayjs(createdAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
