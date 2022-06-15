
// import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function PortBox({ img, content }) {

    const { headline, list, link } = content;
    const text = content.text;

    // state using
    // const [more, setMore] = useState(true);
    // setMore(!more);

    // selecting read button
    // const buttons = document.querySelectorAll(".read-btn");

    // buttons.forEach((btn) => {
    //     btn.addEventListener((e) => {
    //         const overflow = (scrollVal) => {
    //             console.log(e);
    //         }

    //         if (!more) {
    //             overflow("hidden");
    //         } else {
    //             overflow("scroll");
    //         }
    //     })
    // })

    return (
        <div className="port-box">
            <div className="img">
                <img src={img} alt={img + ".jpg"} />
                <a href={link} className="link-btn">
                    <FaArrowRight color="#fff"/>
                </a>
            </div>
            <div className="text">
                <h3>{headline}</h3>
                {/* <p>{more ? text.slice(0, 100) + "..." : text}</p> */}
                {/* <div>{more ? "" : list}</div> */}
                <span className="read-btn">
                    {/* {more ? "Read more..." : "Show less"} */}
                </span>
            </div>
        </div>
    )
}