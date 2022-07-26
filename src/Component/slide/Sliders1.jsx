import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Carousel.css";

function Sliders1() {
    const [movies, setMovies] = useState([]);
  const originalImage = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        // const baseUrl = "https://api.themoviedb.org/3";
        // const apikey = "028a2d86553ae3bcc6d599f76486922e";
        // const w500Img = (imgPath) =>
        //   "https://image.tmdb.org/t/p/w500" + { imgPath };
    
        // const fetchTrending = {baseUrl}+"/trending/all/day?api_key=" + { apikey };
        // const fetchNetflixOriginals = {baseUrl}+ "/discover/tv?api_key=" + { apikey };
        // const fetchTopRated = {baseUrl}+ "/movie/top_rated?api_key=" + { apikey };
        // const fetchComedyMovies =
        //   {baseUrl}+ "/discover/movie?api_key=" + { apikey } + "&with_genres=35";
        // const fetchRomanceMovies =
        //   {baseUrl}+ "/discover/movie?api_key=" + { apikey } + "&with_genres=10749";
        // const fetchDocumentaries =
        //   {baseUrl}+ "/discover/movie?api_key=" + { apikey } + "&with_genres=99";
    
        axios
          .get(
            "https://api.themoviedb.org/3/trending/all/day?api_key=028a2d86553ae3bcc6d599f76486922e"
          )
          .then((res) => {
            setMovies(res.data.results);
          });
      }, []);
  return (
    <>
      <div className="container-fluid bg-black text-white py-5">
        <h2 className="mx-4">Trending Series</h2>
        <div className="container-fluid mx-1 row-posters">
          {movies.map((movie, i) => {
            return (
              <div className="row-poster" key={i}>
                <img src={originalImage + movie.backdrop_path} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Sliders1;

