import { useRouter } from "next/router";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Sidebar({ handleLogout }) {
  const router = useRouter();
  const [attendanceOpen, setAttendanceOpen] = useState(false);
  const [payrollOpen, setPayrollOpen] = useState(false); // NEW

  const toggleAttendanceMenu = () => {
    setAttendanceOpen(!attendanceOpen);
  };

  const togglePayrollMenu = () => {
    setPayrollOpen(!payrollOpen);
  };

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Add Employee", path: "/registerEmployee" },
    { name: "View Employees Details", path: "/employeeList" },
    { name: "Recruitment Management", path: "/Recruitment/recruitment" },
    { name: "Reporting and Analytics", path: "/ViewDetails" },
    { name: "Compliance management", path: "/ViewDetails" },
  ];

  const attendanceSubItems = [
    { name: "Attendance", path: "/hr/attendance" },
    { name: "Leave Management", path: "/hr/view-leave-requests" },
    { name: "Attendance Analytics", path: "/attendance/analytics" },
  ];

  const payrollSubItems = [
    { name: "View Payrolls", path: "/hr/payroll/payroll-view" },
    { name: "Generate Payroll", path: "/hr/payroll/generate" },
  ];

  return (
    <div className="min-h-screen w-72 bg-gray-900 text-white p-6 shadow-lg">
      <h2 className="text-3xl font-bold mb-8">HRMS Panel</h2>
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => router.push(item.path)}
              className="w-full text-left px-4 py-3 bg-gray-800 rounded-lg hover:bg-indigo-600 transition"
            >
              {item.name}
            </button>
          </li>
        ))}

        {/* Attendance Dropdown */}
        <li>
          <button
            onClick={toggleAttendanceMenu}
            className="w-full text-left flex justify-between items-center px-4 py-3 bg-gray-800 rounded-lg hover:bg-indigo-600 transition"
          >
            <span>Attendance & Leave Management</span>
            {attendanceOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {attendanceOpen && (
            <ul className="pl-6 pt-2 space-y-2">
              {attendanceSubItems.map((subItem) => (
                <li key={subItem.name}>
                  <button
                    onClick={() => router.push(subItem.path)}
                    className="w-full text-left text-sm px-3 py-2 bg-gray-700 rounded-lg hover:bg-indigo-500 transition"
                  >
                    {subItem.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Payroll Dropdown */}
        <li>
          <button
            onClick={togglePayrollMenu}
            className="w-full text-left flex justify-between items-center px-4 py-3 bg-gray-800 rounded-lg hover:bg-indigo-600 transition"
          >
            <span>Payroll Management</span>
            {payrollOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {payrollOpen && (
            <ul className="pl-6 pt-2 space-y-2">
              {payrollSubItems.map((subItem) => (
                <li key={subItem.name}>
                  <button
                    onClick={() => router.push(subItem.path)}
                    className="w-full text-left text-sm px-3 py-2 bg-gray-700 rounded-lg hover:bg-indigo-500 transition"
                  >
                    {subItem.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Logout */}
        <li>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 bg-red-600 hover:bg-red-700 transition rounded-lg mt-6"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
