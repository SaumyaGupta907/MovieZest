import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";



function MovieDetails(){
    const {id}= useParams(); 
    const [movieDetails, setMovieDetails] = useState([]);
    const movieStyle={ 
        listGroupItem:{
            backgroundColor:"transparent",
            borderRadius:"0",
            color:"#fff"
        },
        castImage:{
            width:"20vh",
            height:"20vh",
            objectFit:"cover",
            borderRadius:"10px 10px 0 0"
        },
        imgStyle:{
            height:"50vh",
            objectFit:"cover"
        }
       }
    async function loadMovieDetails(){
        const apiMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5b4dbf95cc35d2e911560cca64385e60&language=en-US&append_to_response=credits`).then( result=>result.json() );
        setMovieDetails(apiMovie);
    }
    useEffect(function(){
        loadMovieDetails();
    })
    return( 
        <div class="container">
        <div class="row">
            <div class="col-md-4 text-center">
                {movieDetails.poster_path && movieDetails.poster_path !=="null" ? <img style={{width: "100%"}} src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt="movie img" /> :<img style={{width: '100%'}} src='https://critics.io/img/movies/poster-placeholder.png' alt="" />}
            </div> 
            <div class='col-md-8 text-left'>
                <h1 style={{color:"white",fontSize:"40px", padding:"20px" }}>{movieDetails.title}</h1>
                <h4 style={{color:"white", fontStyle:"italic"}}>"{movieDetails.tagline}"</h4>
                <button class="btn myBtnPink mr-3 mt-3"><i class="fas fa-heart"></i> Favourites</button>
                        <button class="btn myBtnPink mr-3 mt-3" ><i class="fas fa-plus"></i>  Watch List</button>
                        <button type="button" className="btn myBtnPink mt-3"><i class="fas fa-comments"></i> View Reviews</button>
                        <button class="btn myBtnPink ml-3 mt-3"  className="btn myBtnPink ml-3 mt-3" style={{position: 'relative'}}><i class="fas fa-plus"></i>Add Tags</button>
            <div>
                <ul class="list-group">
                  <li class="list-group-item" style={movieStyle.listGroupItem}><i class="fas fa-1x fa-star" style={{color:"yellow"}}></i><b>{movieDetails.vote_average}</b>/10</li>
                  <li class="list-group-item" style={movieStyle.listGroupItem}><i class="fas fa-clock"></i> Runtime: {movieDetails.runtime} min</li>
                </ul>
            </div>
            <div class="container" style={{color:"white"}}>
                <h5>Overview</h5>
                <p>{movieDetails.overview}</p>
            </div>
            <div class="container" style={{color:"white"}}>
                <h5>Genre</h5>
                {movieDetails && movieDetails.genres ? <p>{movieDetails.genres.map( genre =><span class="badge badge-primary mr-2" style={{padding:"10px"}}>{genre.name}</span>)}</p>:"[no genre list]"}

            </div>
            </div>   
        </div>
        <div class="container mt-5">
            <h1 style={{color:"white",textAlign:"left",padding:"20px"}}>Full Cast & Crew</h1>
            <div class="row">{movieDetails && movieDetails.genres ?
            <div class="row">{movieDetails.credits.cast.slice(0,10).map( actor =>
                <div class="mt-3 mr-3 mx-auto">
                    {actor.profile_path ? <img style={movieStyle.castImage} src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="" />: <img style={movieStyle.castImage} src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" alt="" />}
            <p class="list-group-item" style={{color:"black", textAlign:"center"}}>{actor.name}</p>
                </div>
            )}
                

            </div>: "[no cast members]"}
            
         </div>
        </div>
    </div>
    )
}
export default MovieDetails;