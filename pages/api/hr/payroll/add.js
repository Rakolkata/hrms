import db from '@/lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    empid,
    month,
    year,
    basic_salary,
    hra,
    da,
    allowances,
    deductions
  } = req.body;

  if (!empid || !month || !year || !basic_salary) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const net_pay = 
    parseFloat(basic_salary) +
    parseFloat(hra || 0) +
    parseFloat(da || 0) +
    parseFloat(allowances || 0) -
    parseFloat(deductions || 0);

  try {
    const [result] = await db.execute(
      `INSERT INTO payroll 
        (empid, month, year, basic_salary, hra, da, allowances, deductions, net_pay) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [empid, month, year, basic_salary, hra, da, allowances, deductions, net_pay]
    );

    res.status(200).json({ message: 'Payroll added successfully' });
  } catch (error) {
    console.error('Error adding payroll:', error);
    res.status(500).json({ message: 'Database error' });
  }
}
