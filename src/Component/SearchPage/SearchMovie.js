import React, { useState } from "react";
import MovieResult from "./MovieResult";
function SearchMovie(){
    const [searchInput,setSearchInput]=useState("");
    const [movieList,setMovieList]=useState([]);
    const [ alertMessage, setAlertMessage ] = useState( { type: "", message: ""} );
    const style={
        myInput:{
            borderRadius:"80px",
            padding:"20px",
            marginTop:"20px"
        },
        myForm:{
            width:"90%",
            justifyContent:"center",
            marginTop:"3%"
        },
        myBtn:{
            borderRadius:"80px",
            marginLeft:"20px",
            padding:"8px",
            width:"150px",
            border:"none",
            backgroundColor:"rgb(233,21,92)",
            marginTop:"20px"
        }
        
    }
    function handleInputChange(e){
        let newInput = e.target.value;
        setSearchInput(newInput);
    }
     async function loadMovieList(e){
        if( searchInput === "" ) {
            setAlertMessage( { type: 'danger', message: 'Please provide your Email!' } );
            return;
        }
        else{
        e.preventDefault();
        const Api = '5b4dbf95cc35d2e911560cca64385e60';
        const newMovieList = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Api}&language=en-US&query=${searchInput}&page=1&include_adult=false`).then( result=>result.json() );       
        setMovieList(newMovieList.results) 
        }
    }
    return(
    <div class="mainDiv">
    <div class="jumbotron jumbotron-fluid hero">
    <div class="container searchBox">
    <h1 class="display-4"><strong>Enter the movie of your choice</strong></h1>
    <h3 class="lead">Discover millions of movies and TV show. Explore now!</h3>
    <div style={style.myForm} class="input-group mb-3 text-center">
      <input onChange={handleInputChange} value={searchInput} style={style.myInput} type="text" class="form-control" placeholder="Search movie, TV shows..." aria-label="Username" aria-describedby="basic-addon1" />
      <div>
          <button onClick={loadMovieList} style={style.myBtn} class="float-right" type="submit">Search</button>
          </div>
</div>
  </div>
</div>
<MovieResult movieList = {movieList} />
    </div>
    )
}
export default SearchMovie;