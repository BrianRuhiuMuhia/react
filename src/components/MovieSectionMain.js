import {useState,useEffect} from 'react'
import './loader.css'
export default function MovieSectionMain()
{
    const [movies,setMovies]=useState()
    const [isLoading,setIsLoading]=useState(true)
    async function fetchFromMovieApi()
    {
        return ""
}
    
    useEffect(()=>{
fetchFromMovieApi().then((data)=>{
setMovies(data)
// setIsLoading(false)
},[])

    })
   
    if(isLoading)
{
    return (<div className="page-loader">
    <div className="spinner"></div>
  </div>)
}
    return (<main>

    </main>)
}