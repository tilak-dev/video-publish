import VideoCard from "@/components/HomeCard";


const videos = [
    {
        thumbnail: '/thumbnail.png',
        title: 'Learn Next.js with Tailwind CSS',
        channel: 'Code Academy',
        views: '200K',
        uploadedAt: '1 day ago',
    },
    {
        thumbnail: '/thumbnail.png',
        title: 'Advanced JavaScript Techniques',
        channel: 'Tech Guru',
        views: '1M',
        uploadedAt: '1 week ago',
    },
    {
        thumbnail: '/thumbnail.png',
        title: 'Advanced JavaScript Techniques',
        channel: 'Tech Guru',
        views: '1M',
        uploadedAt: '1 week ago',
    },
    {
        thumbnail: '/thumbnail.png',
        title: 'Advanced JavaScript Techniques',
        channel: 'Tech Guru',
        views: '1M',
        uploadedAt: '1 week ago',
    },
    {
        thumbnail: '/thumbnail.png',
        title: 'Advanced JavaScript Techniques',
        channel: 'Tech Guru',
        views: '1M',
        uploadedAt: '1 week ago',
    },
    {
        thumbnail: '/thumbnail.png',
        title: 'Advanced JavaScript Techniques',
        channel: 'Tech Guru',
        views: '1M',
        uploadedAt: '1 week ago',
    },
    // Add more video objects as needed
];

const VideoGrid = () => {
    return (
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-y-auto ">
            {videos.map((video, index) => (
                <VideoCard
                    key={index}
                    thumbnail={video.thumbnail}
                    title={video.title}
                    channel={video.channel}
                    views={video.views}
                    uploadedAt={video.uploadedAt}
                />
            ))}
        </div>
        </div>
    );
};

export default VideoGrid;
