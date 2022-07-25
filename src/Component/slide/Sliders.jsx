import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Carousel.css";

function Sliders() {
    const [movies, setMovies] = useState([]);
  const originalImage = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {    
        axios
          .get(
            "https://api.themoviedb.org/3/discover/tv?api_key=028a2d86553ae3bcc6d599f76486922e"
          )
          .then((res) => {
            setMovies(res.data.results);
          });
      }, []);
  return (
    <>
      <div className="container-fluid bg-black text-white py-3">
        <h2 className="mx-4">Netflix Series</h2>
        <div className="container-fluid m-1 row-posters">
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

export default Sliders;
