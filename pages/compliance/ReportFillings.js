import { useState } from 'react';
import SideBar from '@/Components/SideBar';

export default function ReportsAndFilings() {
  const [forms, setForms] = useState([
    {
      id: 'FORM001',
      name: 'Income Tax Return',
      department: 'Tax',
      deadline: '2025-04-30',
      //status: 'Pending',
      link: 'https://www.incometaxindia.gov.in/',
    },
    {
      id: 'FORM002',
      name: 'Provident Fund Submission',
      department: 'Finance',
      deadline: '2025-05-15',
      link: 'https://www.epfindia.gov.in/',
    },
    {
      id: 'FORM003',
      name: 'ESI Filing',
      department: 'HR',
      deadline: '2025-06-01',
      link: 'https://www.esic.nic.in/',
    },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <SideBar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-indigo-700">Reports & Filings</h1>

        {/* Search and Filter Section */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search Reports"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              defaultValue="All Departments"
            >
              <option value="All Departments">All Departments</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Tax">Tax</option>

            </select>
            <input
              type="number"
              placeholder="Year"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200">
              Filter
            </button>
          </div>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200">
            Export Reports
          </button>
        </div>

        {/* Forms/Reports Table */}
        <div className="overflow-x-auto bg-white shadow rounded-xl">
          <table className="min-w-full divide-y divide-gray-200 text-center">
            <thead className="bg-gray-100 text-sm text-gray-700">
              <tr>
                <th className="px-6 py-3 font-semibold text-left">Form Name</th>
                <th className="px-6 py-3 font-semibold text-left">Department</th>
                <th className="px-6 py-3 font-semibold text-left">Deadline</th>
                <th className="px-6 py-3 font-semibold text-left">Download</th>
                <th className="px-6 py-3 font-semibold text-left">Govt. Link</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {forms.map((form) => (
                <tr key={form.id}>
                  <td className="px-6 py-4 text-sm">{form.name}</td>
                  <td className="px-6 py-4 text-sm">{form.department}</td>
                  <td className="px-6 py-4 text-sm">{form.deadline}</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-indigo-600 hover:underline">Download</button>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <a href={form.link} target="_blank" className="text-indigo-600 hover:underline">
                      Visit Govt Portal
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}    
