"use client"
import { VideoCardType } from "@/types/type";
import api from "@/utils/axiosInstance";
import React, {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useState,
} from "react";

//interface
interface videoDataContextType {
  videos: VideoCardType[];
  loading: boolean;
  setVideos: Dispatch<React.SetStateAction<VideoCardType[]>>;
  setLoading: (loading: boolean) => void;
}

const videoDataContext = createContext<videoDataContextType | undefined>(
  undefined
);

export const VideoDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [videos, setVideos] = useState<VideoCardType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchedVideo = async () => {
    try {
      setLoading(true);
      const response = await api("/video");
      if (!response.data) {
        console.error("An error occurred while fetching videos")
      }
      console.log("data",response.data.data)
      setVideos(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error n fetching videos",error)
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchedVideo();
  }, [setVideos]);

  return (
    <videoDataContext.Provider
      value={{ videos, setLoading, setVideos, loading }}
    >
      {children}
    </videoDataContext.Provider>
  );
};

// hooks

export const useVideos = () => {
  const context = useContext(videoDataContext);
  if (!context) {
    throw new Error("useVideos must be used within a VideoDataProvider");
  }
  return context;
};
