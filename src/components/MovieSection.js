import MovieTitle from "./MovieTitle"
import MovieCard from "./MovieCard"
import "./movie-section.css"
export default function MovieSection(props)
{
    const movies=props.movies.map((movie)=>{
        return <MovieCard image={movie["poster_path"]} show={false}/>
    })
    return (
    <div className="movie-section-banner">
<MovieTitle title={props.title}/>
        <div className="movie-section">
{movies}
    </div>
    </div>)
  
}