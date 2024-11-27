import React from "react"
import film from "./images/film.png"
import popcorn from "./images/popcorn.png"
import fun from "./images/fun.png"
function HomePage(){
    return(
        <div class="homeDiv">
           <div class="homeContainer">
               <h1 class="title">MovieZest</h1>
               <p class="words"><img class="icon" src={film} />Film<img class="icon" src={fun} />Fun<img class="icon" src={popcorn} />Popcorn</p>
               <div class="btnDiv"><a class="searchBtn" href="/searchmovie" type="button">Find your movie</a>
               </div>
            </div> 
        </div>
    )
}
export default HomePage;