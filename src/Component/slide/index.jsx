import axios from "axios";
import React, { useEffect, useState } from "react";
import Sliders from "./Sliders";
import Sliders1 from "./Sliders1";
import Sliders2 from "./Sliders2";
import Sliders3 from "./Sliders3";

import { Link } from "react-router-dom";

function Home() {
  const[isActive, nActive] = ["carousel-item active","carousel-item"]
  const [web, setWeb] = useState([]);
  const originalImage = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?api_key=028a2d86553ae3bcc6d599f76486922e"
      )
      .then((res) => {
        setWeb(res.data.results);
      });
  }, []);

  return (
    <>
      <div className="m-auto bg-dark position-relative">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner" style={{ height: "670px" }}>
            
            {web.map((webs,i) => {
              return (
                <div key={i}
                className={ i === 0? isActive:nActive}
                data-interval='1000'
                >
                  <img
                    src={originalImage + webs.backdrop_path}
                    alt=""
                    className="w-100"
                  />
                  <div
                    className="position-absolute bottom-0 start-50 translate-middle-x text-white p-5"
                    style={{ marginBottom: "250px" }}
                  >
                    <h1 className="text-danger">{webs.original_name}</h1>
                    <button
                      type="button"
                      className="btn btn-light btn-sm me-2 justify-content-center "
                    >
                      <i className="fas fa-play" style={{ color: "black" }}></i>{" "}
                      PLAY
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm ">
                      <i
                        className="far fa-info-circle"
                        // style={{ color: "white" }}
                      ></i>
                      <Link
                        to={`/webseries/${webs.id}`}
                        class="text-center text-white  "
                      >
                        More Info
                      </Link>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="">
          <div className="position-absolute bottom-0 start-10 text-white py-3 px-5">
            <div className="d-flex"></div>
          </div>
        </div>
      </div>
      <Sliders />
      <Sliders1 />
      <Sliders2 />
      <Sliders3 />
    </>
  );
}

export default Home;
