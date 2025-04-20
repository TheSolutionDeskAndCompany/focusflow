import { ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface BarChartProps {
  data: any[];
  bars: {
    dataKey: string;
    name: string;
    color: string;
  }[];
  xAxisDataKey: string;
  yAxisDomain?: [number, number];
  height?: number;
  tooltipFormatter?: (value: number, name: string, props: any) => [string, string];
}

export default function BarChart({
  data,
  bars,
  xAxisDataKey,
  yAxisDomain = [0, 'auto'],
  height = 300,
  tooltipFormatter,
}: BarChartProps) {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        <RechartsBarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisDataKey} />
          <YAxis domain={yAxisDomain} />
          <Tooltip formatter={tooltipFormatter} />
          <Legend />
          
          {bars.map((bar, index) => (
            <Bar
              key={index}
              dataKey={bar.dataKey}
              name={bar.name}
              fill={bar.color}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
