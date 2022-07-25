import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";


const Webseries = () =>{
    const [web, setWeb] = useState([]);
    const IMG_URL = "https://image.tmdb.org/t/p/w500"

    useEffect(() =>{
        axios.get('https://api.themoviedb.org/3/discover/tv?api_key=028a2d86553ae3bcc6d599f76486922e')
        .then((res) =>{
            setWeb(res.data.results)
        })
    },[])
    return(
        <div className="bg-black text-white">
                <div className="p-3">
                    <h3 className="px-3">NEW WEBSERIES</h3>
                        <div className="container-fulid m-4">                               
                            <div className="row">
                            {web.map((webs,index) => {
                                return (
                                <div className="col-md-4 col-sm-6 col-lg-3 p-2  text-white bg-black example" style={{gap: "coloum-gap: 5px;"}} >
                                        <img src={IMG_URL + webs.backdrop_path} className="img-fluid"/>
                                        <div className="position-absolute top-0 start-0">
                                        <Link to ={`/webseries/${webs.id}`} class="text-center btn text-white  ">{webs.original_name}</Link>  
                                        </div>
                                    </div>
                                    
                                    )
                                })}
                            </div>
                        </div>
                </div>
        </div>
    )
}
export default Webseries;