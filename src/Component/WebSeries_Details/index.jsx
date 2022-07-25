import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WebDetails = () => {
  const [web, setWeb] = useState([]);
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?api_key=028a2d86553ae3bcc6d599f76486922e"
      )
      .then((res) => {
        console.log(res.data.results);
        setWeb(res.data.results);
      });
  }, []);
  const proid = useParams();
  const proDetail = web.filter((x) => x.id == proid.id);
  const product = proDetail[0];

  return (
    <>
      <div className="container-fluid p-3 bg-black text-white">
        {product && (
          <div className="row">
            <div className="col-md-5 p-3 ">
              <img src={IMG_URL + product.poster_path} className="h-75"/>
            </div>
            <div className="col-md-7">
              <h1>
                <b>Movie</b> : {product.original_name}
              </h1>
              <h3>
                <b>Language</b> : {product.original_language}
              </h3>
              <h3>
                <b>Release-Date</b> : {product.first_air_date}
              </h3>
              <h5>
                <b>About</b> : {product.overview}
              </h5>
              <br />
              <h5>
                <b>Rating</b> : {product.vote_average}
              </h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default WebDetails;
