import './App.css';
import ElasticSlider from './ElasticSlider';
import React, { useState } from "react";
import SideSlider from './SideSlider';



function App() {
  const [Card, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div className="App">            
      <h1>Elastic Carousel</h1>
      <ElasticSlider />
      <br />
      <SideSlider />
    </div>
  );
}

export default App;
