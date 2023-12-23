import "./footer.css"
import discord from "./assets/discord.svg"
import facebook from "./assets/facebook.svg"
import instagram from "./assets/instagram.svg"
import twitter from "./assets/twitter.svg"
import github from "./assets/github-icon.svg"
export default function Footer()
{
    return (<footer>
        <span>
        <img src={discord}></img>
        <span>discord</span>
        </span>
        <span>
        <img src={facebook}></img>
        <span>facebook</span>
        </span>
        <span>
        <img src={instagram}></img>
        <span>instagram</span>
        </span>
        <span>
        <img src={github}></img>
        <span>github</span>
        </span>
        <span>
        <img src={twitter}></img>
        <span>twitter</span>
        </span>
    </footer>)
}