import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/Main";
import FilterProduct from "./Components/FilterProduct/FilterProduct";
import SingleProduct from "./Components/FilterProduct/SingleProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/filter-product/:type" element={<FilterProduct/>} />
        <Route path="/filter-product/:type/:id" element={<SingleProduct/>} />             
      </Routes> 
    </div>
  );
}

export default App;
