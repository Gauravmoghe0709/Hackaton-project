import {Routes,Route,Navigate, Router } from "react-router-dom"
import Homepage from "../Pages/Homepage"
import Aboutpage from "../Pages/Aboutpage"
import Loginpage from "../Pages/Loginpage"
import Allproduct from "../Pages/Allproduct"
import Looks from "../Pages/Looks"
import Buynow from "../Pages/Buynow"


const MainRoute = () => {
  
 
  return (
    <Routes>
            <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
            <Route path="/home" element={<Homepage></Homepage>}></Route>
            <Route path="/login" element={<Loginpage></Loginpage>}></Route>
            <Route path="/about" element={<Aboutpage></Aboutpage>}></Route>
            <Route path="/product" element={<Allproduct></Allproduct>}></Route>
            <Route path="/Looks" element={<Looks></Looks>}></Route>
            <Route path="/Buynow" element={<Buynow></Buynow>}></Route>
            
        </Routes>   
  )
}

export default MainRoute

