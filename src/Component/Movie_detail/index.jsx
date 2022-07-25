import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDel, setMovieDel] = useState([]);
  const [movieDe, setMovieDe] = useState([]);
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=028a2d86553ae3bcc6d599f76486922e"
      )
      .then((res) => {
        setMovieDel(res.data.results);
      });
  }, []);
  const proid = useParams();
  const proDetail = movieDel.filter((x) => x.id == proid.id);
  const product = proDetail[0];

  return (
    <>
      <div className="container-fluid p-3 bg-black text-white">
        {product && (
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-4  p-3">
              <img src={IMG_URL + product.poster_path} className="img-fluid h-75" />
            </div>
            <div className="col-md-6 col-sm-12 col-lg-8 ">
              <h3><b>Movie</b> : {product.original_title}</h3>
              <h3><b>Language</b> : {product.original_language}</h3>
              <h3><b>Release-Date</b> : {product.release_date}</h3>
              <h5><b>About</b> : {product.overview}</h5>
              <br />
              <h5><b>Rating</b> : {product.vote_average}</h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default MovieDetails;
