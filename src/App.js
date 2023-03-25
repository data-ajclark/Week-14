//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from './Components/Main.js'
import './CSS/App.css';
import React from 'react';
// import ReviewList from "./Components/ReviewList";
// import MovieList from "./Components/MovieForm.js";


function App() {
  return (
    <div style={{
    backgroundColor: `#dcf0fa`,
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center'}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />    
        </Routes>
      </BrowserRouter>           
    </div>
  );
}

export default App;
