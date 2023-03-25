import React from "react";
import "../CSS/App.css"
import MovieForm from "./MovieForm";
import Topbar from "./Navbar.js";
import 'bootstrap/dist/css/bootstrap.min.css'

function Main() {
  return (
    <div>
      <div className="container">
        <Topbar />
        <MovieForm />    
      </div>
    </div>

  )
 }

 export default Main; 
