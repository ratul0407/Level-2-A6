"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

const UsersByRolePie = ({
  data,
}: {
  data: { role: string; value: number }[];
}) => {
  console.log(data, "from pie");
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Users by Role</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="role"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
export default UsersByRolePie;
