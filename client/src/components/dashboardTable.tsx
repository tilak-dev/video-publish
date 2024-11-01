import React from "react";
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
import { Switch } from "@/components/ui/switch"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@radix-ui/react-label";

export default function DashboardTable() {
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
    <div className="bg-gray-800 rounded-lg">
      <Table className="w-full table-auto ">
        <TableHeader>
          <TableRow className="bg-gray-700">
            <TableHead className="py-3 px-6 text-left text-sm font-semibold text-gray-300">
              Status
            </TableHead>
            <TableHead className="py-3 px-6 text-left text-sm font-semibold text-gray-300">
              Video
            </TableHead>
            <TableHead className="py-3 px-6 text-left text-sm font-semibold text-gray-300">
              Thumbnail
            </TableHead>
            <TableHead className="py-3 px-6 text-left text-sm font-semibold text-gray-300">
              Title
            </TableHead>
            <TableHead className="py-3 px-6 text-left text-sm font-semibold text-gray-300">
              Rating
            </TableHead>
            <TableHead className="py-3 px-6 text-left text-sm font-semibold text-gray-300">
              Date Uploaded
            </TableHead>
            <TableHead className="py-3 px-6 text-left text-sm font-semibold text-gray-300">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {videos.map((video) => (
            <TableRow key={video.id} className="hover:bg-gray-700">
              <TableCell className="py-4 px-6" >
              <Switch  />
              </TableCell>
              <TableCell className="py-4 px-6">
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                    video.status === "Published"
                      ? "bg-green-500 text-green-100"
                      : "bg-orange-500 text-orange-100"
                  }`}
                >
                  {video.status}
                </span>
              </TableCell>
              <TableCell className="py-4 px-6">
                {!video.dislikes ?
                <>
                <img src="" alt="" />
                </>:<>
                <div className="rounded-lg w-20 h-12 object-cover bg-gray-600 flex justify-center items-center"> N/A</div>
                </>}
              </TableCell>
              <TableCell className="py-4 px-6">
                <div className="text-lg font-semibold text-white truncate">
                  {video.title}
                </div>
                <div className="text-sm text-gray-400">{video.owner}</div>
              </TableCell>
              <TableCell className="py-4 px-6">
                <span className="text-green-400 font-semibold">
                  {video.likes} <FaThumbsUp className="inline-block ml-1" />
                </span>
              </TableCell>
              <TableCell className="py-4 px-6 text-gray-400">{video.date}</TableCell>
              <TableCell className="py-4 px-6 flex justify-center items-center space-x-4">
                <button className="text-gray-400 hover:text-blue-500">
                  <FaEdit />
                </button>
                <button className="text-gray-400 hover:text-red-500">
                  <FaTrashAlt />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
