import Headline from "./Headline.js";
import ExBox from "../components/ExBox.js";

export default function Experience() {

    const data = [
        {
            date: "July, 2021 - August, 2021",
            role: "Trainee",
            description: "I worked as a trainee at Brototype academy near info-park. I learned basic programming and web technologies"
        },
        {
            date: "March, 2022 - April, 2022",
            role: "Front-end Developer",
            description: "I Developed a website for Janaseve-kendra koliyadukkam, kasargod, kerala"
        }
    ];

    return (
        <div className="experience container">

            {/* headline component */}
                <Headline text="EXPERIENCE" />

            {/* ex box component array */}
                {
                    data.map((obj) => <ExBox date={obj.date} role={obj.role} description={obj.description} />)
                }
        </div>
    )
}