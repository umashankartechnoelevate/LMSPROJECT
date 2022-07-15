import React from 'react'
import { Line} from "react-chartjs-2"
import Chart from 'chart.js/auto';
import './LineChart.css';

function MentorDashboard() {
       const mockdata={
    labels:["Mock1","Mock2","Mock3","Mock4","Mock5"],
    datasets:[{
      label:"Mock Rating",
      backgroundColor:['orange'],
      // labels:["Average","Good","Average","Very Good","Excellent"],
      data:[10 , 20, 30, 10, 50]
      // data:["Average","Good","Very Good","Excellent"]
    }]
  }
  return (
    <div id='DashboardChart'>
    <Line data={mockdata} width={550} height={300} options={{maintainAspectRatio:false}} />
  </div>
  )
}

export default MentorDashboard