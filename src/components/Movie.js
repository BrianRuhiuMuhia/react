import {data} from "./util.js"
import MovieCard from "./MovieCard.js"
export default function Movie()
{
let moviesArray=[]
let moviesData=[]
let pageMovie=undefined
if(data)
{
    const url=window.location.pathname
    const id=url.split("/").pop()
    data.forEach(element => {
        moviesArray.push(element["movies"])
    });  
    moviesArray.forEach((movies)=>{
    movies.forEach((movie)=>{
moviesData.push(movie)
    })
    })
    moviesData.forEach((movie)=>{
        if(movie["_id"]==id)
        {
            pageMovie=movie
        }
    })
  
}
    return (
        <div className="card-view"><MovieCard  overview={pageMovie["overview"]} title={pageMovie['title']} date={pageMovie["release_date"]} image={pageMovie["poster_path"]} genres={pageMovie['genres']} show={true}/>
            
        </div>
    )
}