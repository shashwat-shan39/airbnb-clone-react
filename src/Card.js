import React from "react";
import star from "./images/star.png"

export default function Card({open,img,rating,reviewCount,country,title,price}){
    return (
        <div className="card">
            {open == 0 && <div className="card-badge">SOLD OUT</div>}
            <img className="photo" src={img} alt="img"></img>
            <div className="ratings">
                <img className="star" src={star} alt="img"></img>
                <span>{rating}</span>
                <span className="grey">({reviewCount}) . </span>
                <span className="grey">{country}</span>
            </div>
            <p className="text">{title}</p>
            <p className="text"><b>From ${price}</b> / person</p>
        </div>
    );
}