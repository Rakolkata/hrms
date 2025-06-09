// pages/performance/reports.js
import SideBar from '@/Components/SideBar';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', performance: 70 },
  { name: 'Feb', performance: 80 },
  { name: 'Mar', performance: 65 },
  { name: 'Apr', performance: 90 },
  { name: 'May', performance: 70 },
  { name: 'Jun', performance: 80 },
  { name: 'Jul', performance: 65 },
  { name: 'Aug', performance: 90 },
  { name: 'Sep', performance: 70 },
  { name: 'Oct', performance: 80 },
  { name: 'Nov', performance: 65 },
  { name: 'Dec', performance: 90 },
];

export default function Reports() {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full p-6 bg-white min-h-screen space-y-6">
        <h1 className="text-2xl font-bold text-indigo-700">Performance Reports</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card><CardContent className="p-4"><strong>Top Performer:</strong> Jane Smith</CardContent></Card>
          <Card><CardContent className="p-4"><strong>Avg Rating:</strong> 4.5</CardContent></Card>
          <Card><CardContent className="p-4"><strong>Employees Reviewed:</strong> 15</CardContent></Card>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-md mt-6">
          <h2 className="text-lg font-semibold mb-4 text-purple-700">Monthly Performance Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="performance" fill="#7c3aed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
