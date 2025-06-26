import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaUserTie } from "react-icons/fa";
import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineMail,
  HiOutlineUserAdd,
} from "react-icons/hi";
import jwtDecode from "jwt-decode";

const Header = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getToken = () => {
      const tokenCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="));
      return tokenCookie ? tokenCookie.split("=")[1] : null;
    };

    const token = getToken();
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (err) {
        console.error("Invalid token:", err);
        setUser(null);
      }
    }
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout");
    setUser(null);
    router.push("/login");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-700 to-purple-600 w-full shadow-lg z-50">
      <header className="px-10 py-5 text-white flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-3">
          <FaUserTie size={40} />
          <h1 className="text-2xl font-bold tracking-wider">HRMS PORTAL</h1>
        </div>

        <nav className="flex space-x-8 mt-4 md:mt-0 text-lg font-medium">
          <Link href="/" className="flex items-center space-x-2 hover:text-yellow-300">
            <HiOutlineHome />
            <span>HOME</span>
          </Link>
          <Link href="/AboutUs" className="flex items-center space-x-2 hover:text-yellow-300">
            <HiOutlineInformationCircle />
            <span>ABOUT US</span>
          </Link>
          <Link href="/Contact" className="flex items-center space-x-2 hover:text-yellow-300">
            <HiOutlineMail />
            <span>CONTACT</span>
          </Link>

          {user ? (
            <>
              <span className="flex items-center space-x-2 text-yellow-200 font-semibold">
                👋 {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 hover:text-red-300"
              >
                <HiOutlineUserAdd />
                <span>LOGOUT</span>
              </button>
            </>
          ) : (
            <>
              <Link href="/signup" className="flex items-center space-x-2 hover:text-yellow-300">
                <HiOutlineUserAdd />
                <span>SIGNUP</span>
              </Link>
              <Link href="/login" className="flex items-center space-x-2 hover:text-yellow-300">
                <HiOutlineUserAdd />
                <span>LOGIN</span>
              </Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
