import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Sidebar from "/Components/SideBar";

export default function PayrollForm() {
  const router = useRouter();
  const { empid } = router.query;
  const [employee, setEmployee] = useState(null);
  const [formData, setFormData] = useState({
    basic_salary: '',
    hra_percent: 40,
    da_percent: 10,
    allowances_percent: 20,
    deductions_percent: 5,
    bonus: 2000,
    month: '', // New field for month
    year: '',  // New field for year
  });

  useEffect(() => {
    if (!empid) return;
    fetch(`/api/hr/employees/${empid}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data.employee))
      .catch((err) => console.error('Error fetching employee:', err));
  }, [empid]);

  const calculateAmount = (percent) => {
    return ((formData.basic_salary || 0) * percent) / 100;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: parseFloat(e.target.value) || e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hra = calculateAmount(formData.hra_percent);
    const da = calculateAmount(formData.da_percent);
    const allowances = calculateAmount(formData.allowances_percent);
    const deductions = calculateAmount(formData.deductions_percent);
    const net_pay =
      parseFloat(formData.basic_salary || 0) + hra + da + allowances + formData.bonus - deductions;

    const res = await fetch('/api/hr/payroll/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        empid,
        basic_salary: formData.basic_salary,
        hra,
        da,
        allowances,
        deductions,
        bonus: formData.bonus,
        net_pay,
        month: formData.month, // Include month
        year: formData.year,   // Include year
      }),
    });

    if (res.ok) {
      alert('Payroll generated!');
      router.push('/hr/dashboard');
    } else {
      alert('Error generating payroll');
    }
  };

  if (!empid) return <div className="p-6">Waiting for employee ID...</div>;
  if (!employee) return <div className="p-6">Loading employee data...</div>;

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar handleLogout={() => {}} />

      <div className="max-w-3xl mx-auto bg-white shadow p-8 rounded-xl mt-10 text-indigo-800">
        <h2 className="text-2xl font-bold mb-4">Generate Payroll</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input value={employee.empid} readOnly className="bg-gray-100 p-2 rounded" />
            <input value={employee.name} readOnly className="bg-gray-100 p-2 rounded" />
            <input value={employee.email} readOnly className="bg-gray-100 p-2 rounded" />
            <input value={employee.contact_number} readOnly className="bg-gray-100 p-2 rounded" />
          </div>

          <div>
            <label className="block">Basic Salary (₹)</label>
            <input
              type="number"
              name="basic_salary"
              value={formData.basic_salary}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {['hra', 'da', 'allowances', 'deductions'].map((key) => (
            <div key={key} className="grid grid-cols-3 gap-4 items-center">
              <label className="capitalize">{key} (%)</label>
              <input
                type="number"
                name={`${key}_percent`}
                value={formData[`${key}_percent`]}
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                value={calculateAmount(formData[`${key}_percent`]).toFixed(2)}
                readOnly
                className="p-2 bg-gray-100 rounded"
              />
            </div>
          ))}

          <div>
            <label>Bonus (₹)</label>
            <input
              type="number"
              name="bonus"
              value={formData.bonus}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Month and Year fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block">Month</label>
              <input
                type="text"
                name="month"
                value={formData.month}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block">Year</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          {/* Net Pay Calculation */}
          <div>
            <label>Net Pay (₹)</label>
            <input
              value={(
                parseFloat(formData.basic_salary || 0) +
                calculateAmount(formData.hra_percent) +
                calculateAmount(formData.da_percent) +
                calculateAmount(formData.allowances_percent) +
                parseFloat(formData.bonus || 0) -
                calculateAmount(formData.deductions_percent)
              ).toFixed(2)}
              readOnly
              className="w-full p-2 bg-gray-100 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Generate Payroll
          </button>
        </form>
      </div>
    </div>
  );
}
