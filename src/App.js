import React from 'react';
// import Sidenav from "./components/Sidenav";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import BarGraph from './pages/BarGraph';
import Home from './pages/Home';
import LineGraph from './pages/LineGraph';


function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" exact element ={<Home/>}></Route>
    <Route path="/bgraph" exact element ={<BarGraph/>}></Route>
    <Route path="/lGraph" exact element ={<LineGraph/>}></Route>
  </Routes>
  </BrowserRouter>

  </>;
}

export default App;
