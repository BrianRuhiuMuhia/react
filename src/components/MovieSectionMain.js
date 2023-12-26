import {useState,useEffect} from 'react'
import './loader.css'
import images from './images'
import Carousel from './Carousel'
import MovieSection from './MovieSection'
import "./main-section.css"
import {data,fetchFromMovieApi} from "./util"
export default function MovieSectionMain()
{ let movieSections=undefined
    const [movies,setMovies]=useState([])
    const [isLoading,setIsLoading]=useState(true)


    
    useEffect(()=>{
    if(data==undefined)
    {
        if(movies.length<1 || movies===undefined || movies===null )
{
    setIsLoading(true)
    fetchFromMovieApi().then((data)=>{
        setMovies(data)
        setIsLoading(false)
        })
}
    }
else{
    setMovies(data)
    setIsLoading(false)
}


    },[])
    
    if(isLoading)
{
    return (<div className="page-loader">
    <div className="spinner"></div>
  </div>)
}
if(!isLoading)
{
    movieSections=movies.map((movie)=>{
        return <MovieSection title={movie.title} movies={movie.movies} key={movie['_id']}/>
    })
}
    return (<main className="main container">
{/* <Carousel images={images}/> */}
<div className="main-movie-section">
{movieSections}
</div>
    </main>)
}