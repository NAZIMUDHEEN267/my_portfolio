import  { MdOutlineComputer } from "react-icons/md";
import { BsLayers } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import Headline from "./Headline.js";
import Box from "./Box.js";

export default function Services() {

    const size = {
        fontSize: "2rem",
        position: "absolute",
        top: "25%",
        left: "50%",
        transform: "translate(-50%)"
    }

    const data = [
        [
            <MdOutlineComputer style={size}/>,
            "Unique design",
            "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
        ],
        [
            < BsLayers style={size}/>,
            "Make it simple",
            "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
        ],
        [
            <AiOutlineMobile style={size}/>,
            "Responsive",
            "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
        ]
    ]

    return (
        <div className="services container">
            <div className="width">
                {/* headline component */}
                <Headline text="SERVICES" />

                <div className="boxes">
                    {
                      data.map((item, i) => {
                          const [icon, headline, para] = item;
                          return <Box key={i} icon={icon} headline={headline} para={para} />
                      })
                    }
                </div>
            </div>
        </div>
    )
}