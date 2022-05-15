import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { getSentiment } from "../utils/helper";

const Sentiment = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const sentiment = await getSentiment();
      console.log("sentiment, ", sentiment);
      setData(sentiment);
      setIsLoading(false);
    }
    fetchData();
  },[])

  if(isLoading) {
    return (
        <div>
            <p>Loading...</p>
        </div>
    );
    }
return (
<BarChart
    width={600}
    height={400}
    data={data}
    margin={{
    top: 20,
    right: 30,
    left: 20,
    bottom: 5
    }}
>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="city" />
    <YAxis yAxisId="left" orientation="left" stroke="#81CA9C" />
    <Tooltip />
    <Legend />
    <Bar yAxisId="left" dataKey="sentiment" fill="#81CA9C" />
</BarChart>
);
}

export default Sentiment;