import { Wave } from "react-animated-text";
import dotImg from "../images/dot.png";
import heroImg from "../images/hero.png";
import { FaFacebookSquare } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const Home = function () {
    return (
        <div className="home width" id="home">

            {/* home text field */}
            <div className="home__text">
                <h3>Hi There, I'm</h3>
                <h1>Nazimudheen Ti</h1>

                {/* shadow text */}
                <h2 className="shadow home-shadow">
                    nazim
                </h2>

                {/* wave animation library */}
                <h3 className="wave">
                    <Wave text="Web Developer" effectChange={.6} speed={5} />
                </h3>

                <p> Passionate in building new things, moving on "MERN" stack developer </p>

                <button className="home-btn">
                    <a href="#contact">contact me</a>
                </button>
            </div>

            {/* home hero section */}
            <div className="home__img">
                <div className="bgImg">
                    <img src={dotImg} alt="dot.png" />
                </div>

                <div className="hero">
                    <div className="hero__img">
                        <img src={heroImg} alt="hero.jpg" />
                    </div>

                    <div className="hero__social">
                        <FaFacebookSquare />
                        <AiOutlineTwitter />
                        <RiLinkedinBoxFill />
                        <AiFillGithub />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;