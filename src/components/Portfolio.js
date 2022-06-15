import Headline from "./Headline";
import PortBox from "./PortBox";
import Janaseva from "../images/janaseva.png";
import RPS from "../images/rps.png";
import Disney from "../images/disney.png";
import Ttt from "../images/ttt.png";

export default function Portfolio() {
    const data = {
        box1: {
            img: { Janaseva },
            content: {
                headline: "Janaseva Website",
                text: "Developed for janaseva kendra office, Created qr-code and google map also added. Minified html, css, javascript files for increase load speed",
                list: <div>
                    <h4>Used technologies</h4>
                    <ol>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Javascript</li>
                        <li>Font-awesome library</li>
                    </ol>
                </div>,
                link: "https://coderaid.netlify.app"
            }
        },
        box2: {
            img: { RPS },
            content: {
                headline: "Rock Paper Scissor",
                text: "This is a funny game known as rock paper scissor, 2 pages created for this game starting page and game page,  and also funny sounds are added for better game experience, points are stored in locale-storage browser database",
                list: <div>
                    <h4>Used technologies</h4>
                    <ol>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Javascript</li>
                        <li>Font-awesome library</li>
                    </ol>
                </div>,
                link: "https://rainbow-duckanoo-2f63e9.netlify.app"
            }
        },
        box3: {
            img: { Disney },
            content: {
                headline: "Disney clone",
                text: ` Inspired in "clever programmer" youtube channel. This is a single page website, scrolling movies container and it's youtube trailer videos also showing under the container `,
                list:
                    <div>
                        <h4>Used technologies</h4>
                        <ol>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Javascript</li>
                            <li>Prettier</li>
                            <li>npm</li>
                            <li>git</li>
                            <li>editorconfig file</li>
                            <li>Json</li>
                            <li> Gruntjs
                                <ul>
                                    <li>Sass</li>
                                    <li>Pug</li>
                                    <li>Eslint</li>
                                    <li>Babel</li>
                                    <li>Imagemin</li>
                                    <li>Cssmin</li>
                                    <li>Watch</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                ,
                link: "https://nazim-disney-clone.netlify.app"
            }
        },
        box4: {
            img: { Ttt },
            content: {
                headline: "Tic-tac-toe",
                text: "Simple javascript game, day and night modes are available. Locale storage used to store points, computer and user is the players",
                list: <div>
                    <h4>Used technologies</h4>
                    <ol>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Javascript</li>
                        <li>Font-awesome</li>
                        <li>Google-font</li>
                        <li>git</li>
                    </ol >
                </div>,
                link: "https://beautiful-pavlova-21f7ac.netlify.app/"
            }
        }
    }

    const { box1, box2, box3, box4 } = data;

    return (
        <div className="portfolio container">
            <div className="width">
                {/* headline component */}
                <Headline text="PORTFOLIO" />
                <div className="boxes">
                    <PortBox img={box1.img.Janaseva} content={box1.content} />
                    <PortBox img={box2.img.RPS} content={box2.content} />
                    <PortBox img={box3.img.Disney} content={box3.content} />
                    <PortBox img={box4.img.Ttt} content={box4.content} />
                </div>
            </div>
        </div>
    )
}