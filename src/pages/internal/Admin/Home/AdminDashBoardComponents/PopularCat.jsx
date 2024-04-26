import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// import {  } from "../../../data/chart";
import { useFetch } from "../../../../../hooks/useFetch";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// } from "chart.js";

// ChartJS.register(

//   Tooltip,
//   Legend,
//   ArcElement
// );

const PopularCat = () => {
  const { books, videos } = useFetch("/api/v1/course");



  const myChart = [
    {
      label: "video",
      value: videos.length,
    },
    {
      label: "book",
      value: books.length,
    },
  ];

  return (
    <main
      className="shadow-lg shadow-[#032BF214] border-[rgba(0,0,0,0.1)]  p-5 rounded-md border-2 "
      style={{ height: "100%", width: "100%" }}
    >
      <h1 className="font-semibold text-darkBlue">Popular Category</h1>
      <section>
        {/* <Doughnut
          data={{
            labels: myChart.map((data) => data.label),
            datasets: [
              {
                label: "Courses",
                data: myChart.map((data) => data.value),
                backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
                hoverOffset: 4,
              },
            ],
          }}
        /> */}


<Doughnut
  data={{
    labels: myChart.map((data) => data.label),
    datasets: [
      {
        label: "Courses",
        data: myChart.map((data) => data.value),
        backgroundColor: ["rgba(3, 43, 242, 1)", "rgba(207, 230, 255, 1)"],
        hoverOffset: 2,
      },
    ],
  }}
  options={{
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false, // Allow resizing without maintaining aspect ratio
    plugins: {
      legend: {
        position: "bottom", // Move the legend position to reduce chart size
      },
    },
  }}
  height={300} // Set the desired height
  width={400} // Set the desired width
/>
      </section>


    </main>
  );
};

export default PopularCat;
