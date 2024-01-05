// import React, { useState }  from 'react';
// import Box from '@mui/material/Box';
// import "../App.css";
// import Chart from "react-apexcharts";
// import Navbar from '../components/NavBar';
// import Sidenav from '../components/Sidenav';

// function BarGraph() {
//     const [state, setState] = useState({
//         options: {
//           colors: ["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF","#FF9F40"],
//           chart: {
//             id: "basic-bar",
//           },
//         //   xaxis: {
//         //     categories: ['Easy','Medium',"Difficult"],
//         //   },
//         },
//         series: [
//           {
//             name: "Linux-easy",
//             data: [60, 70, 95, 50, 49, 40, 70, 91],
//           },
//           {
//             name: "Python-easy",
//             data: [30, 80, 89, 70, 20, 60, 35, 81],
//           },
//           {
//             name: "Linux-Medium",
//             data: [30, 40, 85, 50, 49, 60, 70, 91],
//           },
//           {
//             name: "Python-Medium",
//             data: [40, 60, 49, 70, 20, 35, 80, 81],
//           },
//           {
//             name: "Linux-Difficult",
//             data: [30, 40, 45, 50, 50, 80, 70, 91],
//           },
//           {
//             name: "Python-Difficult",
//             data: [30, 60, 65, 35, 49, 90, 50, 81],
//           },
//         ],
//       });
//     return (
//         <>
//           <Box sx={{ display: 'flex' }}>
//           <Sidenav />
//           <Navbar />
//           <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

// <div className="App">
//   <h1>
//     Bar Chart <i className="fas fa-user"></i>
//   </h1>
//   <div className="chart-container">

//     <div className="chart-title">Performance Comparison</div>
//     <div className="chart">
//       <Chart
//         options={state.options}
//         series={state.series}
//         type="bar"
//         width="100%"
//       />
//     </div>
//   </div>
// </div>
     
//           </Box>
//           </Box>    
//         </>
//     );
// }
// export default BarGraph;


import React, { useState } from 'react';
import Chart from "react-apexcharts";
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/NavBar';
import "../App.css";

function LineGraph() {
  const initialData = {
    options: {
      colors: ["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF","#FF9F40"],
      chart: {
        id: "basic-bar",
      },
    },
    series: [
      {
        name: "Linux-easy",
        data: [60, 70, 95, 50, 49, 40, 70, 91],
      },
      {
        name: "Python-easy",
        data: [30, 80, 89, 70, 20, 60, 35, 81],
      },
      {
        name: "Linux-Medium",
        data: [30, 40, 85, 50, 49, 60, 70, 91],
      },
      {
        name: "Python-Medium",
        data: [40, 60, 49, 70, 20, 35, 80, 81],
      },
      {
        name: "Linux-Difficult",
        data: [30, 40, 45, 50, 50, 80, 70, 91],
      },
      {
        name: "Python-Difficult",
        data: [30, 60, 65, 35, 49, 90, 50, 81],
      },
    ],
  };

  const [state, setState] = useState({ ...initialData });


  const handleDropdownChange = (event) => {
    const selectedSeries = event.target.value;
    const updatedSeries = initialData.series.find((series) => series.name === selectedSeries);

    if (selectedSeries === "") {
      setState({ ...initialData });
    } else if (updatedSeries) {
      const updatedColors = initialData.options.colors.map((color, index) => {
        return index === initialData.series.findIndex((series) => series.name === selectedSeries) ? color : "#36A2EB"; // Use #DDD for non-selected series
      });

      setState({
        options: {
          ...initialData.options,
          colors: updatedColors,
        },
        series: [updatedSeries],
      });
    }
  };


  const seriesNames = initialData.series.map((series) => series.name);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="App">
            <h1>
              Bar Chart <i className="fas fa-user"></i>
            </h1>
            <select onChange={handleDropdownChange}>
              <option value="">Select Series</option>
              {seriesNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <div className="chart-container">
              <div className="chart-title">Performance Comparison</div>
              <div className="chart">
                <Chart
                  options={state.options}
                  series={state.series}
                  type="bar"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default LineGraph;