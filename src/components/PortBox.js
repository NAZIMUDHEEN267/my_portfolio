
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function PortBox({ img, content }) {

    const { headline, list, link } = content;
    const text = content.text;

    // state using
    const [more, setMore] = useState(true);
    // selecting read button
    const buttons = document.querySelector('.read-btn');

    buttons.onclick = (e) => {
        setMore(!more);
        console.log("lo");
    }

    return (
        <div className="port-box">
            <div className="img">
                <img src={img} alt={img + ".jpg"} />
                <a href={link} className="link-btn">
                    <FaArrowRight color="#fff" />
                </a>
            </div>
            <div className="text">
                <h3>{headline}</h3>
                <p>{more ? text.slice(0, 100) + "..." : text}</p>
                <div>{more ? "" : list}</div>
                <span className="read-btn">
                    {more ? "Read more..." : "Show less"}
                </span>
            </div>
        </div>
    )
}