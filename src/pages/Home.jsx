// import React, { useState }  from 'react';
// import Sidenav from '../components/Sidenav';
// import Box from '@mui/material/Box';
// import "../App.css";
// import Chart from "react-apexcharts";
// import Navbar from '../components/NavBar';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';



// function Area() {
    
//       const [state, setState] = useState({
//         options: {
//           colors: ["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF","#FF9F40"],
//           chart: {
//             id: "basic-bar",
//           },
//         //   xaxis: {
//         //     categories:,
//         //   },
//         },
//         series: [
//           {
//             name: "Linux-easy",
//             data: [60, 70, 95, 50, 49, 40, 70, 91],
//           },
//           {
//             name: "Python-easy",
//             data: [30, 80, 89, 70,66, 60, 35, 81],
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
//     Area Chart <i className="fas fa-user"></i>
//   </h1>
//   <div className="chart-container">
//     <div className="chart-title">Performance Comparison</div>
//     <div className="chart">
//       <Chart
//         options={state.options}
//         series={state.series}
//         type="area"
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
// export default Area;


// import React, { useState } from 'react';
// import Sidenav from '../components/Sidenav';
// import Box from '@mui/material/Box';
// import "../App.css";
// import Chart from "react-apexcharts";
// import Navbar from '../components/NavBar';

// function PieChart() {
//   const [state, setState] = useState({
//     options: {
//       colors: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
//       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     },
//     series: [44, 55, 41, 17, 15, 25],
//   });

//   return (
//        <>
//         <Box height={30} />
//           <Box sx={{ display: 'flex' }}>
//           <Sidenav />
//           <Navbar />
//           {/* <Gridnav /> */}  
//      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//       <Box height={60} />
//       <Grid container spacing={3}>
//                         <Grid xs={4}>
//                         <Card sx={{ height: 70 + " vh" }}>
//                     <CardContent>
//                     <Box sx={{ display: 'flex' }}>
//                         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//                         <div className="App">
//                             <div className="chart-container">
//                             {/* <div className="chart-title">Distribution</div> */}
//                             <div className="chart">
//                                 <Chart
//                                 options={state.options}
//                                 series={state.series}
//                                 type="pie"
//                                 width="40%"
//                                 />
//                             </div>
//                             </div>
//                         </div>
//                         </Box>
//                     </Box>
//                     </CardContent>
                    
//                     </Card>
//                         </Grid>


//         <Grid xs={4}>
//         <Card sx={{ height: 70 + " vh" }}>
//       <CardContent>
//       <Box sx={{ display: 'flex' }}>
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <div className="App">
//             <div className="chart-container">
//               {/* <div className="chart-title">Distribution</div> */}
//               <div className="chart">
//                 <Chart
//                   options={state.options}
//                   series={state.series}
//                   type="pie"
//                   width="40%"
//                 />
//               </div>
//             </div>
//           </div>
//         </Box>
//       </Box>
        
//       </CardContent>
    
//     </Card>
//         </Grid>

//                         <Grid xs={4}>
//                         <Card sx={{ height: 70 + " vh" }}>
//                     <CardContent>
//                     <Box sx={{ display: 'flex' }}>
//                         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//                         <div className="App">
//                             <div className="chart-container">
//                             {/* <div className="chart-title">Distribution</div> */}
//                             <div className="chart">
//                                 <Chart
//                                 options={state.options}
//                                 series={state.series}
//                                 type="pie"
//                                 width="40%"
//                                 />
//                             </div>
//                             </div>
//                         </div>
//                         </Box>
//                     </Box>
//                     </CardContent>
//                     </Card>
//                     </Grid>
//         </Grid>
          
//           </Box>
//           </Box>    

//     // ------------------------------------------------
//     <>
//       <Box sx={{ display: 'flex' }}>
//         <Sidenav />

//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <div className="App">
//             <h1>
//               Pie Chart <i className="fas fa-user"></i>
//             </h1>
//             <div className="chart-container">
//               <div className="chart-title">Distribution</div>
//               <div className="chart">
//                 <Chart
//                   options={state.options}
//                   series={state.series}
//                   type="pie"
//                   width="80%"
//                 />
//               </div>
//             </div>
//           </div>
//         </Box>
//       </Box>
//     </>
//     </>
//   );
// }

// export default PieChart;

//-----------------------------------------------------------

// function TriplePieCharts() {
//   const chartData = [
//     {
//       id: 1,
      
//       options: {
//         colors: ["#FF6384", "#36A2EB", "#FFCE56"],
//         labels: ["C", "Python", "Linux"],
//       },
//       series: [44, 55, 41],
//     },
//     {
//       id: 2,
//       options: {
//         colors: ["#4BC0C0", "#9966FF", "#FF9F40"],
//         labels: ["C", "Python", "Linux"],
//       },
//       series: [17, 15, 25],
//     },
//     {
//       id: 3,
//       options: {
//         colors: ["#FF6384", "#36A2EB", "#FFCE56"],
//         labels: ["C", "Python", "Linux"],
//       },
//       series: [30, 40, 50],
//     },
//   ];

//   const [selectedChart, setSelectedChart] = useState(chartData[0]);

//   const handleChartChange = (event) => {
//     const chartId = parseInt(event.target.value);
//     const selected = chartData.find((chart) => chart.id === chartId);
//     setSelectedChart(selected);
//   };

//   return (
//     <>
//       <Box sx={{ display: 'flex' }}>
//         <Sidenav />
//         <Navbar />
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <div className="App">
//             <h1>
//               Pie Chart - Easy <i className="fas fa-chart-pie"></i>
//             </h1>
//             <select onChange={handleChartChange}>
//               {chartData.map((data) => (
//                 <option key={data.id} value={data.id}>
//                   Chart {data.id}
//                 </option>
//               ))}
//             </select>
//             <div className="chart-container">
//               <div className="chart" style={{ width: '100%' }}>
//                 <Chart
//                   options={selectedChart.options}
//                   series={selectedChart.series}
//                   type="pie"
//                   width="60%"
//                 />
//               </div>
//             </div>
//           </div>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default TriplePieCharts;

import React, { useState, useEffect } from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import "../App.css";
// import "../Triplecharts.css";
import Chart from "react-apexcharts";
import Navbar from '../components/NavBar';
import { data as databaseData } from '../components/Database'; // Adjust the path based on your actual file structure

const TriplePieCharts = () => {
  const domains = [...new Set(databaseData.map(item => item.name))];
  const difficulties = [...new Set(databaseData.map(item => item.difficulty))];

  const chartData = {};

  domains.forEach(domain => {
    chartData[domain] = {};
    difficulties.forEach(difficulty => {
      chartData[domain][difficulty] = databaseData.filter(item => item.name === domain && item.difficulty === difficulty)[0];
    });
  });

  const [selectedDomain, setSelectedDomain] = useState(domains[0]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulties[0]);
  const selectedChart = chartData[selectedDomain][selectedDifficulty];

  const handleDomainChange = (event) => {
    const domain = event.target.value;
    setSelectedDomain(domain);
  };

  const handleDifficultyChange = (event) => {
    const difficulty = event.target.value;
    setSelectedDifficulty(difficulty);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="App">
            <h1>
              Triple Pie Chart for {selectedDomain} - {selectedDifficulty} <i className="fas fa-chart-pie"></i>
            </h1>
            <div className="dropdowns">
              <div className="dropdown">
                <label htmlFor="domain">Select Domain:</label>
                <select id="domain" onChange={handleDomainChange} value={selectedDomain}>
                  {domains.map(domain => (
                    <option key={domain} value={domain}>
                      {domain}
                    </option>
                  ))}
                </select>
              </div>
              <div className="dropdown">
                <label htmlFor="difficulty">Select Difficulty:</label>
                <select id="difficulty" onChange={handleDifficultyChange} value={selectedDifficulty}>
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="chart-container">
              <div className="chart" style={{ width: '100%' }}>
                <Chart
                  options={{ colors: ["#36A2EB", "#FFCE56"] }}
                  series={[selectedChart.questions_correct, selectedChart.questions_wrong]}
                  type="pie"
                  width="55%"
                />
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default TriplePieCharts;

