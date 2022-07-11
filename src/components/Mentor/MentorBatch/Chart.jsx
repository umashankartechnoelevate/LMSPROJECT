import React from "react";
import { LineChart, Line } from "recharts";

function Chart() {
  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
  return (
    <div>
      <LineChart width={600} height={400} data={data} >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default Chart;
