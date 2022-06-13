
export default function ExBox ({ date, role, description }) {
    return (
        <div className="ex-box">
            <div className="date">
                <span>{date}</span>
            </div>
            <div className="description">
                <h3>{role}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}