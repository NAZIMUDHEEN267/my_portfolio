
export default function Headline({ text }) {
    return (
        <>
            {/* shadow text */}
            <h1 className="shadow text-center">
                {text}
            </h1>

            {/* headline text */}
            <div className="headline">
                <span className="left">transparent</span>
                <h3>
                    {text}
                </h3>
                <span className="right">transparent</span>
            </div>
        </>
    )
}