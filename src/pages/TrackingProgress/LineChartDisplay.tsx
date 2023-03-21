import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

function LineChartDisplay({ lineData, lineKeys, lineColors }: any) {
  return (
    <LineChart
      width={700}
      height={400}
      data={lineData}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <XAxis dataKey="date" />
      <YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
      <Legend />
      {lineKeys.map((key: string, index: number) => (
        <Line
          key={key}
          type="monotone"
          dataKey={key}
          stroke={lineColors[index % lineColors.length]}
        />
      ))}
    </LineChart>
  );
}

export default LineChartDisplay;
