"use client";
import DashboardTable from "@/components/dashboardTable";
import { DashboardStats } from "@/types/type";
import api from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import { FaUser, FaEye, FaHeart, FaPlus } from "react-icons/fa";

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading,setLoading] = useState<boolean>(false)
  //fetch data 
  const fetchStats = async () => {
    try {
      setLoading(true)
      const response = await api.get("/dashboard/stats");
      if (!response.data) {
        console.error("Error fetching dashboard stats:");
        return;
      }
      setStats(response.data.data);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      return
    } finally{
      setLoading(false)
    }
  };

  //use Effect 
  useEffect(() => {
    fetchStats();
  }, []);
  return (
    <div className="bg-gray-900 h-full p-8 pb-24 text-white  overflow-y-auto">
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
            <p className="text-2xl font-bold">{stats?.totalViews}</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 gap-x-4  flex items-center">
          <span>
            <FaUser className="text-purple-500 text-4xl" />
          </span>

          <div>
            <p className="text-lg font-semibold">Total Subscribers</p>
            <p className="text-2xl font-bold">{stats?.totalSubscribers}</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 gap-x-4 flex items-center">
          <span>
            <FaHeart className="text-purple-500 text-4xl" />
          </span>

          <div>
            <p className="text-lg font-semibold">Total Likes</p>
            <p className="text-2xl font-bold">{stats?.totalLikes}</p>
          </div>
        </div>
      </div>

      {/* Video List Table */}
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
