
import { FaFacebookSquare } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <a href="https://www.facebook.com/ayishath.munavvara/"><FaFacebookSquare /></a>
                <a href="https://https://twitter.com/NazimudheenT"><AiOutlineTwitter /></a>
                <a href="https://linkedin.com/in/nazimudheen-ti-405a341b1"><RiLinkedinBoxFill /></a>
                <a href="https://github.com/nazimudheen267"><AiFillGithub /></a>
            </div>

            <div className="copy">
                <p>&copy; All rights from NAZIMUDHEEN TI. 2022-23</p>
            </div>
        </div>
    )
}

export default Footer;