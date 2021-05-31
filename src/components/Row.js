import {useEffect, useState} from 'react';
import instance from '../axios';
import './Row.css';
import requests from '../requests';

//I need to store the fetched data somewhere
const renderMovie = (movieArray)=>{
    return movieArray.map((movie)=>{
        return <img className="row-img" src={"https://image.tmdb.org/t/p/original"+movie.poster_path} alt="Movie Poster"/> 
    });
}

const loadMovie = (url,setMovie)=>{
    fetch(instance.defaults.baseURL+url)
        .then(response=>response.json())
        .then(data => setMovie(data.results));
}
function Row(){
    const [original,setOriginal]=useState([]);
    const [trending,setTrending]=useState([]);
    const [top,setTop]=useState([]);
    const [action,setAction]=useState([]);
    const [comedy,setComedy]=useState([]);
    const [horror,setHorror]=useState([]);
    const [romance,setRomance]=useState([]);
    const [documentry,setDocumentary]=useState([]);


    useEffect(()=>{
    loadMovie(requests.fetchNetflixOriginals,setOriginal);
    loadMovie(requests.fetchTrending,setTrending);
    loadMovie(requests.fetchTopRated,setTop);
    loadMovie(requests.fetchActionMovies,setAction);
    loadMovie(requests.fetchComedyMovies,setComedy);
    loadMovie(requests.fetchHorrorMovies,setHorror);
    loadMovie(requests.fetchRomanceMovies,setRomance);
    loadMovie(requests.fetchDocumentaries,setDocumentary);
    },[]);

    return(
        <div className="rows">
            <div className="row">
                <h2>Netflix Originals</h2>
                
                <div className="container">
                    {renderMovie(original)}
                </div>   
            
            </div>
            <div className="row">
                <h2>Trending Now</h2>
                
                <div className="container">
                    {renderMovie(trending)}
                </div>   
            
            </div>
            <div className="row">
                <h2>Top Rated</h2>
                
                <div className="container">
                    {renderMovie(top)}
                </div>   
            
            </div>
            <div className="row">
                <h2>Action Movies</h2>
                
                <div className="container">
                    {renderMovie(action)}
                </div>   
            
            </div>
            <div className="row">
                <h2>Comedy Movies</h2>
                
                <div className="container">
                    {renderMovie(comedy)}
                </div>   
            
            </div>
            <div className="row">
                <h2>Horror Movies</h2>
                
                <div className="container">
                    {renderMovie(horror)}
                </div>   
            
            </div>
            <div className="row">
                <h2>Romance Movies</h2>
                
                <div className="container">
                    {renderMovie(romance)}
                </div>   
            
            </div>
            <div className="row">
                <h2>Documentaries</h2>
                
                <div className="container">
                    {renderMovie(documentry)}
                </div>   
            
            </div>
        </div>
    )
}

export default Row;