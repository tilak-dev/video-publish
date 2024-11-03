"use client";
import api from "@/utils/axiosInstance";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import { CurrentUser } from "@/types/type";
import { useRouter } from "next/navigation";

interface AuthContextType {
  accessToken: string | null;
  refreshToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  currentUser: CurrentUser | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  //login
  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/users/login", {
        email,
        password,
      });
      const { accessToken, refreshToken } = response.data;
      const user = response.data.data;
      if (!response) {
        throw new Error("Failed to login user");
      }
      console.log("bhai dekh user deatils", response.data);
      Cookies.set("accessToken", accessToken);
      Cookies.set("refreshToken", refreshToken);
      setCurrentUser(user);
      router.replace("/home");
    } catch (error) {
      console.log("Login Failed", error);
      return;
    }
  };
  //logout
  const logout = async () => {
    try {
      const res = await api.post("/users/logout");
      if (res.status == 200) {

        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        setAccessToken(null);
        setRefreshToken(null);
        setCurrentUser(null);
        
        // window.location.href = "/";
        router.replace("/");
      } else {
        throw new Error("Logout failed: Invalid status code");
      }
    } catch (error) {
      console.log("Logout failed", error);
      return;
    }
  };
  

  useEffect(() => {
    const token = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");
     if (token && refreshToken) {
      setAccessToken(token);
      setRefreshToken(refreshToken);
    }
  }, [login, logout]);

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
