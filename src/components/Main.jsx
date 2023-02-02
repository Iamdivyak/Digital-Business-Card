import React from "react";
import emailimg from "../assets/Mail.png"
import linkedin from "../assets/linkedin.png"
import "../App.css"


export default function Main() {
  return <div className="main">
    <h2>Divya Kumari</h2>
    <h4>Full Stack Web Developer</h4>
    {/* <span>website</span> */}

    <div className="btn--class">
            <button className="btn--email">
                <a href="mailto:kumaridivya2796@gmail.com"><img src={emailimg} className="email" />Email</a>
            </button>
            <button className="btn--linkedin">
                <a href="https://www.linkedin.com/in/iamdivyak/"><img src={linkedin} className="linkedin"/>LinkedIn</a>
            </button>
            </div>


            <div className="main--about--interest">
                <h3>About</h3>
                <p>I am a full-stack web developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <br />
                <h3>Interests</h3>
                <p>Music. Reader. Internet fanatic. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic. Singing</p>
            </div>
  </div>;
}
