// pages/performance/goals.js
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SideBar from '@/Components/SideBar';

export default function GoalSetting() {
  const [goals, setGoals] = useState([
    { empName: "John Doe", goal: "Improve communication skills", progress: 60 },
    { empName: "Jane Smith", goal: "Complete UI redesign", progress: 90 },
  ]);

  return (
    <div className="flex">
      <SideBar />
      <div className="w-full p-6 space-y-6 bg-white min-h-screen">
        <h1 className="text-2xl font-semibold text-indigo-700">Goal Setting & Tracking</h1>

        <div className="space-y-4">
          {goals.map((g, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="space-y-2 py-4">
                <p className="font-semibold">{g.empName}</p>
                <p>{g.goal}</p>
                <Progress value={g.progress} />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 border-t pt-4">
          <h2 className="text-xl font-semibold text-purple-700">Add New Goal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Input placeholder="Employee Name" />
            <Input placeholder="Goal Title" />
            <Textarea placeholder="Goal Description" className="col-span-2" />
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white col-span-2">Add Goal</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
