import api from "@/utils/axiosInstance";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface AuthContextType {
  accessToken: string;
  refreshToken: string;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

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
      const response = await api.get("/users/login");
      const { accessToken, refreshToken } = response.data;
      Cookies.set("accessToken", accessToken);
      Cookies.set("refreshToken", refreshToken);
    } catch (error) {
      console.log("Login Failed", error);
      return;
    }
  };
  //logout
  const logout = async() => {
    try {
      const res = await api.get("/users/logout");
      if(res){
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

  return <AuthContext.Provider value={{accessToken,refreshToken, login,logout}}>
    {children}
  </AuthContext.Provider>;
};
