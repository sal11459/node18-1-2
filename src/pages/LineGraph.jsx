// import React, { useState }  from 'react';
// import Sidenav from '../components/Sidenav';
// import Box from '@mui/material/Box';
// import "../App.css";
// import Chart from "react-apexcharts";
// import Navbar from '../components/NavBar';

// function LineGraph() {
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
//     Line Chart <i className="fas fa-user"></i>
//   </h1>
//   <div className="chart-container">
//     <div className="chart-title">Performance Comparison</div>
//     <div className="chart">
//       <Chart
//         options={state.options}
//         series={state.series}
//         type="line"
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
// export default LineGraph;

import React, { useState } from 'react';
import Chart from "react-apexcharts";
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/NavBar';
import "../App.css";
import "../home.css";
import { data } from '../components/Database';

function LineGraph() {
  const initialData = {
    options: {
      colors: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
      chart: {
        id: "basic-bar",
      },
    },
    series: data.map(item => ({
      name: `${item.name}-${item.difficulty}`,
      data: item.data,
    })),
  };

  const [state, setState] = useState({ ...initialData });
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const handleDomainChange = (event) => {
    const selectedDomain = event.target.value;
    setSelectedDomain(selectedDomain);

    const filteredSeries = initialData.series.filter((series) =>
      series.name.includes(selectedDomain)
    );

    setState({
      options: {
        ...initialData.options,
      },
      series: filteredSeries,
    });

    setSelectedDifficulty(""); // Reset selected difficulty when domain changes
  };

  const handleDifficultyChange = (event) => {
    const selectedDifficulty = event.target.value;
    setSelectedDifficulty(selectedDifficulty);

    let filteredSeries;

    if (selectedDifficulty === "easy" || selectedDifficulty === "Medium" || selectedDifficulty === "Difficult") {
      // Display all levels for the selected difficulty
      filteredSeries = initialData.series.filter((series) =>
        series.name.includes(selectedDomain) && series.name.includes(selectedDifficulty)
      );
    } else {
      // Display only the selected difficulty level
      filteredSeries = initialData.series.filter((series) =>
        series.name.includes(selectedDomain)
      );
    }

    setState({
      options: {
        ...initialData.options,
      },
      series: filteredSeries,
    });
  };

  const domainNames = [...new Set(data.map(item => item.name))];
  const difficultyLevels = ["easy", "Medium", "Difficult"];

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="App">
            <h1>
              Line Chart <i className="fas fa-user"></i>
            </h1>
            <label>Select Domain:</label>
            <select onChange={handleDomainChange} value={selectedDomain}>
              <option value="">Select Domain</option>
              {domainNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>

            {selectedDomain && (
              <div>
                <label>Select Difficulty:</label>
                <select onChange={handleDifficultyChange} value={selectedDifficulty}>
                  <option value="">Select Difficulty</option>
                  {difficultyLevels.map((level, index) => (
                    <option key={index} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="chart-container">
              <div className="chart-title">Performance Comparison</div>
              <div className="chart">
                <Chart
                  options={state.options}
                  series={state.series}
                  type="line"
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



