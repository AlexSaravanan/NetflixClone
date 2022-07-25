import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://thereelbits.com/wp-content/uploads/2017/05/Netflix-Logo.jpg"
              alt=""
              width="90"
            />
            <div
              class="d-inline p-1 text-black bg-white"
              style={{ fontSize: "12px", borderRadius: "5px" }}
            >
              Clone
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav col-10">
              <ul class="navbar-nav ">
                <li class="nav-item ">
                  <Link className="nav-link text-white" to="../">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link text-white" to="/webseries">
                    TvShows
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link text-white" to="/movies">
                    Movies
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to="//">
                    My List
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-end col-2">
            <button type="button" className="btn btn-outline-primary ">
              <Link class="nav-link text-white" to="../login">
                Log in
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
