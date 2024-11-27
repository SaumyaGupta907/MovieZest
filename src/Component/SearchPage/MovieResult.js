import React from "react";
import { Link } from "react-router-dom";

function MovieResult(props){
    const style= {
        imgStyle:{
            height: "60vh",
            width: "100%",
            objectFit: "cover"
        }
    }
    const resultArray = props.movieList;
    return( 
    <div>
        <div class= "container">
            <div class= "row">
                {resultArray.map(movie =>
                <div class= "movieCard mx-auto">
                    <p class= "movieCard-title"> Movie Info</p>
                        <div class= "movieCardImg">{movie.poster_path && movie.poster_path ? <img style={style.imgStyle} class="cardImg" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" /> : <img style={style.imgStyle} class="crdImg" src='https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png' alt="" />}</div>
                            <div class= "movieCardDesc">
                                <p class="movieCardTitle">{movie.title}</p> 
                                <p class="ratingCard">{movie.vote_average}</p>
                            </div>
                             <div class= "extra">
                                <Link to= {"movieDetails/" + movie.id}>
                                    <button type="button" class="btn myBtn mr-2">View More</button>
                                </Link>
                            </div>    
                </div>
                    )}
            </div>
        </div>
    </div>)
}
export default MovieResult; 