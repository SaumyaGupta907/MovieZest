import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import HomePage from "./Component/HomePage";
import SearchMovie from "./Component/SearchPage/SearchMovie";
import Registration from "./Component/Registration/Registration"
import LoginPage from "./Component/Login/LoginPage";
import movieDetails from "./Component/MovieDetailPage/movieDetails";
import GenrePage from "./Component/Genre/GenrePage";
import GenreMoviePage from "./Component/Genre/GenreMoviePage";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div class="container-fluid main" style={{minHeight:"80vh"}}>
     <Navbar />
      <Route exact path={["/","/homepage"]} component={HomePage} />
      <Route exact path="/searchMovie" component={SearchMovie} />
      <Route exact path= "/Registration" component={Registration} />
      <Route exact path= "/login" component={LoginPage} />
      <Route exact path= "/movieDetails/:id" component={movieDetails} /> 
     <Footer />
     </div>
     </Router>
    </div>
  );
}

export default App;
