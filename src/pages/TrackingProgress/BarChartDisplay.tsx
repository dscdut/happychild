import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

function BarChartDisplay({ data, dataKey }: { data: any; dataKey: string }) {
  return (
    <BarChart
      width={600}
      height={400}
      data={data}
      layout="vertical"
      barCategoryGap="20%"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
      <YAxis width={200} dataKey="name" type="category" />
      <Tooltip />
      <Bar dataKey={dataKey} fill="#8884d8" barSize={40} />
    </BarChart>
  );
}

export default BarChartDisplay;
