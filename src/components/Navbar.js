
import { GoThreeBars } from "react-icons/go"

const Navbar = () => {

    // nav bar links function
    const links = (drop) => {
        return (
            <>
                {["Home", "About", "Services", "Projects", "Contact"].map((link, i) => {
                    return <li className={(drop) ? `link-${i}` : "link"} key={i} ><a href={link}>{link}</a></li>
                })}
            </>
        )
    }

    const dropMenu = () => {
        const bar = document.querySelector(".drop__links");
        bar.classList.toggle("animation");
    }

    return (
        <header className="header">

            {/* navbar */}
            <nav className="nav width">
                <div className="nav__name">
                    <a href="#home">
                        <h1>Nazimudheen</h1>
                    </a>
                </div>

                <ul className="nav__links">{links()}</ul>

                {/* bar icon for show nav links */}
                <div className="nav__bars">
                    <GoThreeBars className="bar__icon" onClick={dropMenu} />
                </div>
            </nav>

            {/* drop down nav links when user click bar icon it will show*/}
            <ul className="drop__links">{links(true)}</ul>
        </header>

    )
}

export default Navbar;








































