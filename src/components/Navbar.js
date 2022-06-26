
import { GoThreeBars } from "react-icons/go";
import ScrollIntoView from "react-scroll-into-view";

const Navbar = () => {

    // nav bar links function
    const links = (drop) => {
        return (
            <>
                {["#Home", "#About", "#Services", "#Experience", "#Portfolio", "#Contact"].map((link, i) => {
                    return (
                        <ScrollIntoView selector={link} smooth={true}>
                            <li className={(drop) ? `link-${i}` : "link"} key={i}>{link.slice(1, link.length)}</li>
                        </ScrollIntoView>
                    )
                })}
            </>
        )
    }

    // dropMenu function for show drop nav links
    const dropMenu = () => {
        const bar = document.querySelector(".drop__links");
        bar.classList.remove("hide-anime");
        bar.classList.toggle("animation");
    }

    // hide drop menu links
    const dropOff = () => {
        const bar = document.querySelector(".drop__links");
        bar.classList.add("hide-anime");
        bar.classList.remove("animation");
    }


    // hide drop links
    // const dropLinks = [...bar.children];
    // dropLinks.forEach((link) => {
    //     link.addEventListener("click", () => {
    //         alert("hall")
    //     })
    // })

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
            <ul className="drop__links" onClick={dropOff}>{links(true)}</ul>
        </header>

    )
}

export default Navbar;








































