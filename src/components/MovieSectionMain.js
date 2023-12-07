import {useState,useEffect} from 'react'
import './loader.css'
import images from './images'
import Carousel from './Carousel'
import MovieSection from './MovieSection'
import "./main-section.css"
export default function MovieSectionMain()
{ let movieSections=undefined
    const [movies,setMovies]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    async function fetchFromMovieApi()
    {
        const url = 'https://movies-api14.p.rapidapi.com/home';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '685155abd9mshcf702cf1a036246p1bcde8jsnfd58b8d5d7d1',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result)
            return result
        } catch (error) {
            console.error(error);
        }
}
    
    useEffect(()=>{
if(movies.length<1 || movies===undefined || movies===null )
{
    setIsLoading(true)
    fetchFromMovieApi().then((data)=>{
        setMovies(data)
        setIsLoading(false)
        })
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
        return <MovieSection title={movie.title} movies={movie.movies}/>
    })
}
    return (<main className="main">
<Carousel images={images} />
<div className="main-movie-section">
{movieSections}
</div>
    </main>)
}