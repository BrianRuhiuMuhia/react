import MovieTitle from "./MovieTitle"
import MovieCard from "./MovieCard"
import "./movie-section.css"
import {Link} from 'react-router-dom'
export default function MovieSection(props)
{
    const movies=props.movies.map((movie)=>{
        return <Link to={{pathname:`/movie/${movie['_id']}`,state:{
            data:movie
        }}}><MovieCard overview={movie["overview"]} title={movie['title']} date={movie["release_date"]} image={movie["poster_path"]} genres={movie['genres']} show={false}/></Link>
    })
    return (
    <div className="movie-section-banner">
<MovieTitle title={props.title}/>
        <div className="movie-section">
{movies}
    </div>
    </div>)
  
}