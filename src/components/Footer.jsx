import React from "react";
import twitterLogo from "../assets/Twitter Icon.png"
import linkedinLogo from "../assets/linkedin.png"
import githubLogo from "../assets/GitHub Icon.png"
import "../App.css"


export default function Footer() {
  return <div className="footer">
     <div className="footer--items">
        <a href="https://twitter.com/Imdivyakumari"><img src={twitterLogo} alt="" className="footer--image" /></a>
        <a href="https://www.linkedin.com/in/iamdivyak/"><img src={linkedinLogo} alt="" className="footer--image" /></a>
        <a href="https://github.com/Iamdivyak"><img src={githubLogo} alt="" className="footer--image" /></a>
      </div>
  </div>;
}
