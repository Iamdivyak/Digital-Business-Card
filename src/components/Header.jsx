import React from "react";
import photo from "../assets/divya.jpg"
import "../App.css"

export default function Header(){
    return(
        <div className="header">
            <img src={photo} alt="Profile-photo" srcset="" width="300" hight="300" />

        </div>

    )

}
