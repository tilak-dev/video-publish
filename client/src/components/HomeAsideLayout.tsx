import { FaHome } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { BiSolidBookContent } from "react-icons/bi";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { FaUsersLine } from "react-icons/fa6";
import Link from "next/link";

const HomeAsideLayout = () => {
  const menuItems = [
    { name: "Home", icon: <FaHome />, slug: "/" },
    { name: "Liked Videos", icon: <AiFillLike />, slug: "/dashboard" },
    { name: "History", icon: <FaHistory />, slug: "/history" },
    { name: "My Content", icon: <BiSolidBookContent />, slug: "/dashboard" },
    {
      name: "Collections",
      icon: <BsFillCollectionPlayFill />,
      slug: "/dashboard",
    },
    { name: "Subscribers", icon: <FaUsersLine />, slug: "/dashboard" },
  ];

  return (
    <aside className="w-full bg-gray-900 text-white h-full  p-4 space-y-6">
      {/* Navigation Options */}
      <div className="space-y-4">
        {menuItems.map((item) => (
          <Link href={item.slug}
            key={item.name}
            className="flex items-center transition-all duration-300 space-x-2 p-2 rounded-lg hover:bg-gray-700 hover:text-teal-500 cursor-pointer"
          >
            <span>{item.icon}</span>
            <span className="text-lg">{item.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default HomeAsideLayout;
