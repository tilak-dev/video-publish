"use client";
import React, { useEffect, useState } from "react";
import {
  FaThumbsUp,
  FaTrashAlt,
  FaEdit,
} from "react-icons/fa";
import { Switch } from "@/components/ui/switch";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useVideos } from "@/context/FetchVideo";
import dayjs from "dayjs";

export default function DashboardTable() {
  const {videos} = useVideos() 
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
            <TableRow key={video._id} className="hover:bg-gray-700">
              <TableCell className="py-4 px-6">
                <Switch />
              </TableCell>
              <TableCell className="py-4 px-6">
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                    video.isPublic === true 
                      ? "bg-green-500 text-green-100"
                      : "bg-orange-500 text-orange-100"
                  }`}
                >
                  {
                    video.isPublic === true
                     ? "Published"
                      : "Unpublished"
                  }
                </span>
              </TableCell>
              <TableCell className="py-4 px-6">
                {video.thumbnail ? (
                  <>
                    <img
                    src={video.thumbnail}
                    alt={video.title} 
                    className="rounded-lg w-20 h-12 object-cover bg-gray-600 flex justify-center items-center"
                    />
                  </>
                ) : (
                  <>
                    <div className="rounded-lg w-20 h-12 object-cover bg-gray-600 flex justify-center items-center">
                      {" "}
                      N/A
                    </div>
                  </>
                )}
              </TableCell>
              <TableCell className="py-4 px-6">
                <div className="text-sm font-semibold text-white truncate">
                  {video.title.substring(0, 69)} {
                    video.title.length >= 69
                     ? "..."
                      : ""
                  }
                </div>
                <div className="text-sm text-gray-400">{video.owner?.fullName}</div>
              </TableCell>
              <TableCell className="py-4 px-6">
                <span className="text-green-400 font-semibold">
                  {video.likes} <FaThumbsUp className="inline-block ml-1" />
                </span>
              </TableCell>
              <TableCell className="py-4 px-6 text-gray-400">
                {dayjs(video.createdAt).format("YYYY-MM-DD")}
              </TableCell>
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
