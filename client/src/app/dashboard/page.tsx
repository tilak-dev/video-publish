import DashboardTable from "@/components/dashboardTable";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaTrashAlt,
  FaEdit,
  FaUser,
  FaEye,
  FaHeart,
  FaPlus,
} from "react-icons/fa";

const Dashboard = () => {
  // Sample data for videos
  const videos = [
    {
      id: 1,
      title: "JavaScript Fundamentals: Variables and Data Types",
      status: "Published",
      views: 221234,
      likes: 921,
      dislikes: 49,
      date: "22/09/2023",
      owner: "React Patterns",
    },
    {
      id: 2,
      title: "React Hooks Explained: useState and useEffect",
      status: "Unpublished",
      views: 4053,
      likes: 2520,
      dislikes: 279,
      date: "21/09/2023",
      owner: "React Patterns",
    },
    // Additional videos...
  ];

  return (
    <div className="bg-gray-900 h-screen p-8 pb-20 text-white  overflow-y-auto">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Welcome Back, React Patterns</h1>
          <p className="text-gray-400">
            Seamless Video Management, Elevated Results.
          </p>
        </div>
        <button className="bg-purple-600 text-white py-2 px-4 rounded-full flex items-center hover:bg-purple-700">
          <FaPlus className="mr-2" /> Upload Video
        </button>
      </header>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 rounded-lg p-6 flex gap-x-4  items-center">
          <div className="">
            <FaEye className="text-purple-500 text-4xl " />
          </div>
          <div>
            <p className="text-lg font-semibold">Total Views</p>
            <p className="text-2xl font-bold">221,234</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 gap-x-4  flex items-center">
          <span>
            <FaUser className="text-purple-500 text-4xl" />
          </span>

          <div>
            <p className="text-lg font-semibold">Total Subscribers</p>
            <p className="text-2xl font-bold">4,053</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 gap-x-4 flex items-center">
          <span>
            <FaHeart className="text-purple-500 text-4xl" />
          </span>

          <div>
            <p className="text-lg font-semibold">Total Likes</p>
            <p className="text-2xl font-bold">63,021</p>
          </div>
        </div>

      </div>

      {/* Video List Table */}
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
