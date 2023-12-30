import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



import Navbar from "./Components/Navbar";

import Fetch from "./Components/Fetch";

import Login from "./Components/Login";

function App() {
     return(<>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Login/>}/>
       
       <Route path="/fetch/:id" element={<Fetch/>}/>
      </Routes>
      </BrowserRouter>
      </>);
  
}

export default App;
