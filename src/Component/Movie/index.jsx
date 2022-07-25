import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import "./index.css";

const Index = () => {
  const [movies, setMovies] = useState([]);
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=028a2d86553ae3bcc6d599f76486922e"
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);


  return (
    
    <div className="bg-black text-white">
      <div className="p-3">
        <div className="container-fulid m-3">
          <div className="row">
            <h3 className="my-3 col-lg-9">NEW MOVIES</h3>
            <input
              type="text"
              className="my-3 col-lg-3  Search"
              placeholder="Search"
              id="myInput"
            />
            {movies.map((movie) => {
              return (
                <div
                  className="col-md-4 col-sm-6 col-lg-3 p-2 text-white bg-black example"
                  key={movie.id}
                >
                  <img
                    src={IMG_URL + movie.backdrop_path}
                    className="img-fluid"
                  />
                  <div className="position-relative ">
                    <div className="position-absolute bottom-0 start-0 ">
                      <Link
                        to={`/movies/${movie.id}`}
                        class="text-center btn text-white  "
                      >
                        {movie.original_title}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Index;
