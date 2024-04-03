import React from "react";
import image from "./images/image1.png"

export default function Hero(){
    return(
        <section className="hero">
            <img className="hero-photo" src={image} alt="img"></img>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-para">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    );
}