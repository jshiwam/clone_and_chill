import './Banner.css';
import instance from '../axios';
import requests from '../requests';
import { useEffect, useState } from 'react';

function loadMovie(url,setMovie){
    fetch(instance.defaults.baseURL+url)
    .then(results => results.json())
    .then(data => setMovie(data.results[Math.floor(Math.random()*data.results.length)]));
}

function truncate(text){
    if(text)
    return text.length>200? text.substring(0,200)+"...":text;
    return "";
}
function Banner(){
    const [movie,setMovie] = useState();
    useEffect(()=>{
        loadMovie(requests.fetchTrendingDay,setMovie);
    },[]);


    return(
    <header className="banner-header"
     style={{
         backgroundImage:`url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
         backgroundSize:"cover",
         backgroundPosition:"center center"
     }}>
    <div className="banner-title">
        <h1>{movie?.original_title ||  movie?.title}</h1>
    </div>
    <div className="banner-btns">
        <a href="#">Play</a>
        <a href="#">My List</a>
    </div>
    <div className="banner-description">
        <p>{truncate(movie?.overview)}</p>
    </div>
    <div className="banner-fade"/>
    </header>
    );
}

export default Banner;