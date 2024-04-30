import "./App.css";
import FilterData from "./Components/FilterData/FilterData";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";

//Refer vedio:
//https://www.youtube.com/watch?v=mxeiqUAYDI0&list=PL391NzrHDDl-7FVxlxyvKZPO42-JMzF8K&index=3

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <FilterData/>
    </div>
  );
}

export default App;
