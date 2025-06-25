import { useState } from "react";
import { useRouter } from "next/router";
import { FiMail, FiLock } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function EmployeeLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/auth/employee/details", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error);
      return;
    }

    router.push("/employee/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col pl-12">
      {/* Two Columns */}
      <div className="flex flex-grow">
        {/* Left Side - Image */}
                <div className="w-full relative h-screen">
                        <Image 
                            src="/emp.jpg"
                            alt="Homepage Background"
                            fill
                            className="z-0"
                        />
                        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-white text-center p-10">
          <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-md">
            {message && (
              <p className="text-red-500 text-center mb-4">{message}</p>
            )}

            <h1 className="pb-8 text-center text-indigo-600 text-3xl font-medium mb-6">
              EMPLOYEE LOGIN
            </h1>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email */}
              <div className="flex items-center border-b-2 border-indigo-500 py-2">
                <FiMail className="text-gray-500 mr-3" />
                <input
                  className="w-full bg-transparent text-purple-950 focus:outline-none text-center"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div className="flex items-center border-b-2 border-indigo-500 py-2">
                <FiLock className="text-gray-500 mr-3" />
                <input
                  className="w-full bg-transparent text-purple-950 focus:outline-none text-center"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full text-white py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition duration-300"
                >
                  Login
                </button>
              </div>

              {/* Optional: Back to main login */}
              <div className="pt-3 w-full text-center space-y-2">
                <Link
                  href="/"
                  className="inline-block text-gray-700"
                >
                  Back to <span className="text-indigo-600">Home</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
