import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// import {  } from "../../../data/chart";
import { useFetch } from "../../../hooks/useFetch";
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
  const {
    content,
    books,
    videos,
  } = useFetch("/api/v1/resources");

  const video = videos.filter((v) => v.category === "video");
  const book = books.filter((v) => v.category === "pdf");

  const myChart = [
    {
      label: "video",
      value: video.length,
    },
    {
      label: "book",
      value: book.length,
    },
  ];

  return (
    <main>
      <h1 className="font-semibold text-darkBlue">Popular Category</h1>
      <section>
        <Doughnut
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
        />
      </section>
    </main>
  );
};

export default PopularCat;
