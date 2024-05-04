import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/Main";
import FilterProduct from "./Components/FilterProduct/FilterProduct";
import SingleProduct from "./Components/FilterProduct/SingleProduct";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";


function App() {
  const user = useSelector((state)=>state.user.user);
  const {authUser} = user;
  console.log("User",user," authUser",authUser);
  
  return (
    <div className="App">
      <div>
      <Navbar/>
      </div>
      <div>
        <Routes>
        <Route path="/" element={authUser ?<Main/>:<Login/>} />
        <Route path="/filter-product/:type" element={<FilterProduct/>} />
        <Route path="/filter-product/:type/:id" element={<SingleProduct/>} />             
      </Routes> 
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
