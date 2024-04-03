import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./Data";

export default function App(){
    const propData = data.map((ele)=>{
        return <Card
        open={ele.openSports}
        key={ele.id}
        img={ele.coverImg}
        rating={ele.stats.rating}
        reviewCount={ele.stats.reviewCount}
        country={ele.location}
        title={ele.title}
        price={ele.price}
        />
    });
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card-container">
               {propData}
            </div>
            
        </div>
    );
}