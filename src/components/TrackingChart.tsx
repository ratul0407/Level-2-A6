import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";

interface TrackingEvent {
  status: string;
  updatedBy: string;
  at: string;
}

export default function TrackingChart({
  trackingEvents,
}: {
  trackingEvents: TrackingEvent[];
}) {
  const statusOrder = trackingEvents.reduce((acc, event, index) => {
    if (!acc[event.status]) {
      acc[event.status] = index + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const data = trackingEvents.map((event) => ({
    time: format(new Date(event.at), "MMM d, HH:mm"),
    status: event.status,
    statusValue: statusOrder[event.status],
    updatedBy: event.updatedBy,
  }));

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Parcel Tracking Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="time" />
            <YAxis
              width={160}
              tickFormatter={(val) =>
                Object.keys(statusOrder).find(
                  (key) => statusOrder[key] === val
                ) || val
              }
            />
            <Tooltip
              formatter={(value: any, name: string, props: any) => {
                if (name === "statusValue") {
                  return [props.payload.status, "Status"];
                }
                return [value, name];
              }}
              labelFormatter={(label) => `At: ${label}`}
            />
            <Line
              type="monotone"
              dataKey="statusValue"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
