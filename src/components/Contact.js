import Headline from "./Headline";
import { RiFacebookFill, RiLinkedinBoxFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineTwitter, AiOutlineArrowRight } from "react-icons/ai";
import emailjs from "emailjs-com";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {

    const siteKey = "6LfrkZ4gAAAAAK4nmBZ2so98rJ_lUF-YE_tDJ2lm";
    const privateKey = "6LcyvJ0gAAAAAA2uiaEJAXdVVK5YMsI3E0FSlMT3";

    // color function
    const clr = () => { return { color: "#919AA2" } }

    // form variable as useref hook
    const form = useRef();

    // onsubmit function for before sending contact form
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_6jbwamb", "template_kgwfwkq", form.current, "RYLznI6WeTK8zDFg-")
            .then((success) => {
                console.log(success);
            }).catch((fail) => {
                console.log(fail);
            })

        // blank the input field when user click the submit button
        // const allInput = document.querySelectorAll("#name, #email, #message, #subject");
        // allInput.forEach((input) => input.value = "")
    }
    // recaptcha function
    function onChange (value) {
        console.log(value);
    }

    return (
        <div className="contact container" id="Contact">
            <div className="width">
                {/* headline component */}
                <Headline text="CONTACT" />

                <div className="boxes">
                    <div div className="box-1">
                        <ul>
                            <div className="email">
                                <h3 className="sub-headline">Email</h3>
                                <p style={clr()}>nazimudheenti@gmail.com</p>
                            </div>

                            <div className="address">
                                <h3 className="sub-headline">Address</h3>
                                <p style={clr()}>Info-park kochi, kerala, India</p>
                                <p style={clr()}>Pin 682042</p>
                            </div>

                            <div className="phone">
                                <h3 className="sub-headline">Phone</h3>
                                <p style={clr()}>+918089892324</p>
                            </div>

                            <div className="social">
                                <a href="https://www.facebook.com/ayishath.munavvara/">
                                    <RiFacebookFill />
                                </a>
                                <a href="https://linkedin.com/in/nazimudheen-ti-405a341b1">
                                    <RiLinkedinBoxFill />
                                </a>
                                <a href="https://github.com/nazimudheen267">
                                    <AiFillGithub />
                                </a>
                                <a href="https://https://twitter.com/NazimudheenT">
                                    <AiOutlineTwitter />
                                </a>
                            </div>
                        </ul>
                    </div>
                    <div className="box-2">
                        <h3 className="sub-headline">
                            Get In Touch
                        </h3>

                        {/* form for user contact submission */}
                        <form action="" className="form" id="form" ref={form} onSubmit={sendEmail}>

                            <div className="user">
                                <div className="name">
                                    <input type="text" name="name" id="name" placeholder="Name *" required autoComplete="on" />
                                </div>
                                <div className="email">
                                    <input type="email" name="email" id="email" placeholder="Email *" required autoComplete="on" />
                                </div>
                            </div>

                            <div className="subject">
                                <input type="text" name="subject" id="subject" placeholder="Subject *" required autoComplete="off" />
                            </div>

                            <div className="message">
                                <textarea name="message" id="message" cols="30" rows="5" placeholder="Your message *" required></textarea>
                            </div>

                            {/* <ReCAPTCHA
                                siteKey={siteKey}
                                onChange={onChange}
                            ></ReCAPTCHA> */}

                            <button type="submit" form="form" className="btn">
                                <span>Submit <AiOutlineArrowRight style={{ fontSize: '1rem' }} /> </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}