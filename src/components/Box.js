
export default function Box ({icon, headline, para}) {
    
    return (
        <div className="box">
            <div className="hexagon">
               {icon}
            </div>

            <h3 className="box-headline">
                {headline}
            </h3>

            <p className="box-para">
                {para}
            </p>
        </div>
    )
}