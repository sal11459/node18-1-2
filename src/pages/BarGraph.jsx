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


// import React, { useState } from 'react';
// import Chart from "react-apexcharts";
// import Box from '@mui/material/Box';
// import Sidenav from '../components/Sidenav';
// import Navbar from '../components/NavBar';
// import "../App.css";
// import "../home.css";

// function LineGraph() {
//   const initialData = {
//     options: {
//       colors: ["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF","#FF9F40"],
//       chart: {
//         id: "basic-bar",
//       },
//     },
//     series: [
//       {
//         name: "Linux-easy",
//         data: [60, 70, 95, 50, 49, 40, 70, 91],
//       },
//       {
//         name: "Python-easy",
//         data: [30, 80, 89, 70, 20, 60, 35, 81],
//       },
//       {
//         name: "Linux-Medium",
//         data: [30, 40, 85, 50, 49, 60, 70, 91],
//       },
//       {
//         name: "Python-Medium",
//         data: [40, 60, 49, 70, 20, 35, 80, 81],
//       },
//       {
//         name: "Linux-Difficult",
//         data: [30, 40, 45, 50, 50, 80, 70, 91],
//       },
//       {
//         name: "Python-Difficult",
//         data: [30, 60, 65, 35, 49, 90, 50, 81],
//       },
//     ],
//   };

import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/NavBar';
import "../App.css";
import "../home.css";

// Import your data array
import { data } from '../components/Database'; // Adjust the path accordingly

function BarGraph() {
  const domainNames = [...new Set(data.map(item => item.name))];
  const difficultyLevels = ['easy', 'Medium', 'Difficult'];

  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const filteredData = data.filter(item => 
    (!selectedDomain || item.name === selectedDomain) &&
    (!selectedDifficulty || item.difficulty === selectedDifficulty)
  );
  const initialData = {
    options: {
      colors: selectedDomain && selectedDifficulty
        ? ["#FF6384"] // Use a single color when a specific domain and difficulty are selected
        : ["#FF6384", "#36A2EB", "#FFCE56"], // Use different colors for different difficulty levels or domains
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: selectedDomain
          ? filteredData.map(item => item.difficulty)
          : domainNames,
      },
    },
    series: selectedDomain && selectedDifficulty
      ? [{
          name: `${selectedDomain}-${selectedDifficulty}`,
          data: (filteredData[0]?.data || []).map(score => (score !== undefined ? score : 0)),
        }]
      : difficultyLevels.map(difficulty => ({
          name: selectedDomain
            ? `${selectedDomain}-${difficulty}`
            : difficulty,
          data: selectedDomain
            ? (filteredData.find(item => item.name === selectedDomain && item.difficulty === difficulty)?.data || []).map(score => (score !== undefined ? score : 0))
            : domainNames.map(domain => {
                const domainData = filteredData.find(
                  item => item.name === domain && item.difficulty === difficulty
                );
                return domainData
                  ? Math.max(...(domainData.data || []).map(score => (score !== undefined ? score : 0))) || 0
                  : 0;
              }),
        })),
  };
  
  // Rest of your code...
  
  
  // Rest of your code...
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const handleDomainChange = (event) => {
    const selectedDomain = event.target.value;
    setSelectedDomain(selectedDomain);
    setSelectedDifficulty('');
  };

  const handleDifficultyChange = (event) => {
    const selectedDifficulty = event.target.value;
    setSelectedDifficulty(selectedDifficulty);
  };

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
            <div className="dropdown-container">
              <label htmlFor="domainDropdown">Select Domain:</label>
              <select id="domainDropdown" onChange={handleDomainChange} value={selectedDomain}>
                <option value="">All Domains</option>
                {domainNames.map((domain, index) => (
                  <option key={index} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>
              {selectedDomain && (
                <>
                  <label htmlFor="difficultyDropdown">Select Difficulty:</label>
                  <select id="difficultyDropdown" onChange={handleDifficultyChange} value={selectedDifficulty}>
                    <option value="">All Difficulties</option>
                    {difficultyLevels.map((difficulty, index) => (
                      <option key={index} value={difficulty}>
                        {difficulty}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>
            <div className="chart-container">
              <div className="chart-title">Performance Comparison</div>
              <div className="chart">
                <Chart
                  options={initialData.options}
                  series={initialData.series}
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

export default BarGraph;
