
export default function About() {
    return (
        <div className="about container" id="about">
            <div className="width">
                {/* shadow text */}
                <h1 className="shadow text-center">
                    ABOUT
                </h1>

                {/* headline text */}
                <div className="headline">
                    <span className="left">transparent</span>
                    <h3>
                        ABOUT
                    </h3>
                    <span className="right">transparent</span>
                </div>

                {/* description about container */}
                <div className="description">
                    <article>
                        <h3 className="sub-headline">About Me</h3>
                        <p className="short-description">
                            <span className="light-color">Hello, my name is <span className="under-line">Nazimudheen</span>, and i am a <span className="under-line">front-end developer</span>.</span> &nbsp;
                            I learned technologies or skills without college. Of course am a self thought learner,
                            currently learning react library and road to "M-E-R-N" stack Developer.
                        </p>
                    </article>
                    <article>
                        <h3 className="sub-headline">Tools</h3>
                        <ul className="tools">
                            <li className="border">gimp</li>
                            <li className="border">linux</li>
                            <li className="border">chrome</li>
                            <li className="border">vscode</li>
                        </ul>
                    </article>
                    <article>
                        <h3 className="sub-headline">Technologies and Skills</h3>
                        <ul className="skills">
                            <li className="border">Html</li>
                            <li className="border">Css</li>
                            <li className="border">Javascript</li>
                            <li className="border">React</li>
                            <li className="border">Sass</li>
                            <li className="border">git</li>
                            <li className="border">npm</li>
                        </ul>
                    </article>
                    <article>
                        <h3 className="sub-headline">Work process</h3>
                        <ul className="work">
                            <li>
                                <span className="point">#01</span>
                                <small>Research</small>
                            </li>
                            <li>
                                <span className="point">#02</span>
                                <small>Coding</small>
                            </li>
                            <li>
                                <span className="point">#03</span>
                                <small>Push</small>
                            </li>
                            <li>
                                <span className="point">#04</span>
                                <small>Launch</small>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </div>
    )
}