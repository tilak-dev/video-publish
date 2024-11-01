import { FaThumbsUp, FaThumbsDown, FaTrashAlt, FaEdit, FaUser, FaEye, FaHeart, FaPlus } from 'react-icons/fa';

const Dashboard = () => {
  // Sample data for videos
  const videos = [
    { id: 1, title: "JavaScript Fundamentals: Variables and Data Types", status: "Published", views: 221234, likes: 921, dislikes: 49, date: "22/09/2023", owner: "React Patterns" },
    { id: 2, title: "React Hooks Explained: useState and useEffect", status: "Unpublished", views: 4053, likes: 2520, dislikes: 279, date: "21/09/2023", owner: "React Patterns" },
    // Additional videos...
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Welcome Back, React Patterns</h1>
          <p className="text-gray-400">Seamless Video Management, Elevated Results.</p>
        </div>
        <button className="bg-purple-600 text-white py-2 px-4 rounded-full flex items-center hover:bg-purple-700">
          <FaPlus className="mr-2" /> Upload Video
        </button>
      </header>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 rounded-lg p-6 flex items-center">
          <FaEye className="text-purple-500 text-4xl mr-4" />
          <div>
            <p className="text-lg font-semibold">Total Views</p>
            <p className="text-2xl font-bold">221,234</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 flex items-center">
          <FaUser className="text-purple-500 text-4xl mr-4" />
          <div>
            <p className="text-lg font-semibold">Total Subscribers</p>
            <p className="text-2xl font-bold">4,053</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 flex items-center">
          <FaHeart className="text-purple-500 text-4xl mr-4" />
          <div>
            <p className="text-lg font-semibold">Total Likes</p>
            <p className="text-2xl font-bold">63,021</p>
          </div>
        </div>
      </div>

      {/* Video List Table */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-300">Status</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-300">Thumbnail</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-300">Title</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-300">Rating</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-300">Date Uploaded</th>
              <th className="py-3 px-6 text-center text-sm font-semibold text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video, index) => (
              <tr key={video.id} className="hover:bg-gray-700">
                <td className="py-4 px-6">
                  <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${video.status === "Published" ? "bg-green-500 text-green-100" : "bg-orange-500 text-orange-100"}`}>
                    {video.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <img src="https://via.placeholder.com/80" alt="Thumbnail" className="rounded-lg w-20 h-12 object-cover" />
                </td>
                <td className="py-4 px-6">
                  <div className="text-lg font-semibold text-white truncate">{video.title}</div>
                  <div className="text-sm text-gray-400">{video.owner}</div>
                </td>
                <td className="py-4 px-6">
                  <span className="text-green-400 font-semibold">{video.likes} <FaThumbsUp className="inline-block ml-1" /></span>
                  <span className="text-red-400 font-semibold ml-4">{video.dislikes} <FaThumbsDown className="inline-block ml-1" /></span>
                </td>
                <td className="py-4 px-6 text-gray-400">{video.date}</td>
                <td className="py-4 px-6 text-center flex justify-center space-x-4">
                  <button className="text-gray-400 hover:text-blue-500">
                    <FaEdit />
                  </button>
                  <button className="text-gray-400 hover:text-red-500">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
