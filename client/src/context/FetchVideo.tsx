import { VideoCardType } from "@/types/type";
import React, { createContext, Dispatch, useContext, useEffect, useState } from "react";

//interface
interface videoDataContextType {
  videos: VideoCardType[];
  loading: boolean;
  setVideos: Dispatch<React.SetStateAction<VideoCardType[]>>;
  setLoading: (loading: boolean) => void;
}


const videoDataContext = createContext<videoDataContextType | undefined>(undefined);

export const VideoDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [videos, setVideos] = useState<VideoCardType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(()=>{
    try {
      
    } catch (error) {
      console.error("bhai ye error h ",error);
      setLoading(false);
    }
  },[videos,setVideos])

  return (
    <videoDataContext.Provider value={{videos,setLoading,setVideos,loading}}>
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
