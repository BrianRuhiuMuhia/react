import "./movie-card.css"
export default function MovieCard(props)
{
return (
    <div className="card">
        <img src={props.image} className="image"></img>
        {
            props.show && <div className="card-detail">
                <span className="movie-title">{props.title}</span>
                <span className="movie-overview">overview <br></br>{props.overview}</span>
                <span className="movie-released">released {props.date}</span>
                <span className="movie-genre">genres {props.genres}</span>
            </div>
        }
    </div>
)
}