"use client";
import NavBar from "@/components/NavBar";
import HomeAsideLayout from "@/components/HomeAsideLayout";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="flex h-[calc(100vh-4rem)]">
        <div className="w-1/5">
          <HomeAsideLayout />
        </div>
        <div className="w-4/5">{children}</div>
      </div>
  );
}
