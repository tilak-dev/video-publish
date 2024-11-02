"use client";
import api from "@/utils/axiosInstance";
import React, { createContext, Dispatch, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface CurrentUser {
  _id?: string;
  username?: string;
  email?: string;
  fullName?: string;
  avatar?: string;
  coverImage?: string;
  watchHistory?: [];
}
interface AuthContextType {
  accessToken: string | null;
  refreshToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  currentUser:CurrentUser | null ;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    const token = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");
    if (token && refreshToken) {
      setAccessToken(token);
      setRefreshToken(refreshToken);
    }
  }, []);

  //login
  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/users/login", {
        email,
        password,
      });
      const { accessToken, refreshToken } = response.data;
      const currentUser = response.data.data
      if (!response) {
        throw new Error("Failed to login user");
      }
      Cookies.set("accessToken", accessToken);
      Cookies.set("refreshToken", refreshToken);
      if(currentUser && currentUser){
        setCurrentUser(currentUser);
      }
    } catch (error) {
      console.log("Login Failed", error);
      return;
    }
  };
  //logout
  const logout = async () => {
    try {
      const res = await api.get("/users/logout");
      if (res.status === 200) {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        setAccessToken(null);
        setRefreshToken(null);
      }
    } catch (error) {
      console.log("logout failed", error);
      return;
    }
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, refreshToken, login, logout, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
