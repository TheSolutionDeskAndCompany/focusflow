import { ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface LineChartProps {
  data: any[];
  lines: {
    dataKey: string;
    name: string;
    color: string;
    yAxisId?: string;
  }[];
  xAxisDataKey: string;
  leftYAxisDomain?: [number, number];
  rightYAxisDomain?: [number, number];
  height?: number;
}

export default function LineChart({
  data,
  lines,
  xAxisDataKey,
  leftYAxisDomain = [0, 'auto'],
  rightYAxisDomain,
  height = 300,
}: LineChartProps) {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        <RechartsLineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisDataKey} />
          <YAxis domain={leftYAxisDomain} />
          {rightYAxisDomain && (
            <YAxis yAxisId="right" orientation="right" domain={rightYAxisDomain} />
          )}
          <Tooltip />
          <Legend />
          
          {lines.map((line, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={line.dataKey}
              name={line.name}
              stroke={line.color}
              yAxisId={line.yAxisId || "left"}
              activeDot={{ r: 8 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
