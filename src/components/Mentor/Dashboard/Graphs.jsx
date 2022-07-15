import React from "react";
import { Bar, Line, Doughnut, PolarArea, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";

function Graphs() {
  const mockdata = {
    labels: ["avg", "above avg", "good", "exc"],
    datasets: [
      {
        label: "mock rating",
        backgroundColor: ["red", "purple", "green", "blue"],
        data: [100, 140, 134, 121],
      },
    ],
  };

  const Gender = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Gender",
        backgroundColor: ["#086288", "#ED9232"],
        data: [75, 25],
        cutout: 150,
        borderColor: ["#086288", "#ED9232"],
        hoverBorderWidth: 20,
        borderRadius: 1,
      },
    ],
  };
  return (
    <div className="container-fluid">
        <div className="row d-flex col-12">
            <div style={{fontSize:"50px"}} className="col col-4 "><Doughnut data={Gender} /></div>
            <div className="col col-4"><Bar data={mockdata} /></div>
            <div className="col col-4"><Line data={mockdata} /></div>
        </div>
        <div className="row d-flex col-12">
            <div className=" col col-4"><Doughnut data={mockdata} /></div>
            <div className=" col col-4"><PolarArea data={mockdata} /></div>
            <div className=" col col-4"><Radar data={Gender} /></div>
        </div>
    </div>
  );
}
export default Graphs;
