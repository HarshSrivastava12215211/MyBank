import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Transaction from "./pages/Transaction"
import LoanCards from "./pages/LoanCards"
import Dashboard from "./pages/Dashboard"
import Admin from "./pages/Admin"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register"



function App()
{
  return (
    <BrowserRouter> 
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
        <Route path = "/transaction" element = {<Transaction/>}/>
        <Route path = "/loancards" element = {<LoanCards/>}/>
        <Route path = "/admin" element = {<Admin/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path="/register" element={<Register />} />

      </Routes>
   </BrowserRouter>



    
  )
}

export default App