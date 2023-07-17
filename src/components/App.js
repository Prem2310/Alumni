// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import LogIn from "./login";
// import { Profile } from './components/Profile';
import Home from './Home';
import Register from './Register';
import Profile  from "../Profile";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [token,setToken]=useState(false)
  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }
  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      let data=JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  },[])
  return (

    <div className="App">
      <Router>
      
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    <Routes>
      <Route path="/register" element={<Register />}/>
    </Routes>
 
    <Routes >
      <Route path="/login" element={<LogIn setToken={setToken} />}/>
    </Routes>
     
    <Routes >
      {token?<Route path="/profile" element={<Profile />}/>:""}
    </Routes>
    
    </Router>
      
      
    </div>
  );
}

export default App;
