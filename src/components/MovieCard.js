import "./movie-card.css"
export default function MovieCard(props)
{
return (
    <div>
        <img src={props.image} className="image"></img>
        {
            props.show && <div>
                <span>{}</span>
                <span>{}</span>
                <span>{}</span>
                <span>{}</span>
                <span>{}</span>
                <span>{}</span>
            </div>
        }
    </div>
)
}