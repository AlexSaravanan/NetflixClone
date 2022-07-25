import React  from "react";
import{BrowserRouter,Route,Routes} from "react-router-dom"
import Header from "./Component/Header/Header";
import Login from "./Component/Login";
import Index from "./Component/Movie";
import MovieDetails from "./Component/Movie_detail";
import Signup from "./Component/Sign_in";
import Home from "./Component/slide";
import Webseries from "./Component/WebSeries";
import WebDetails from "./Component/WebSeries_Details";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="movies" element={<Index />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="movies/:id" element={<MovieDetails />}/>
        <Route path="webseries" element={<Webseries />} />
        <Route path="webseries/:id" element={<WebDetails />} />

      </Routes>
    </BrowserRouter>
    );
}

export default App;
