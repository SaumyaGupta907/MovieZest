import  React from "react";
import { Link, useLocation } from "react-router-dom";
function Navbar(){
  const location = useLocation();
    return(
        <div>
            <nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="/">M<img src="https://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Film-icon.png" style={{width: "40px"}}/>vieZest</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/searchmovie">Search</a>
      </li>
      <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/GenrePage" style={{color: 'black', paddingLeft: '20px'}} className={location.pathname === "/GenrePage" ? "nav-link active" : "nav-link"}>
                  Genre
                  </Link>
                  </div>
                  </li>
      <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
      </li>
      </ul></div></nav>
        </div>   
    )
}

export default Navbar;