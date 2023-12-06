import "./landing-page.css"
import {Link} from 'react-router-dom'
export default function LandingPage()
{
    return(<div className="landing-page">
        <Link to={"/homepage"}><span className="view">View Movies</span></Link>
    </div>)
}