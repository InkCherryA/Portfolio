import React from 'react';
import "./portfolio.scss";
import HorizontalScroll from "react-scroll-horizontal";

export default function Portfolio() {
  return (
    <div className="portfolio">

      <div className="wrapper1">

        <div className="container">
          <p className="title">architecture.</p>
        </div>
        <div className="container">
          <p className="par1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas praesentium inventore tenetur mollitia odit corporis eum exercitationem eligendi, repellat deleniti voluptatum repudiandae enim sequi nihil recusandae in consectetur incidunt numquam ea perspiciatis a harum quaerat. Reiciendis odit perferendis blanditiis porro, aut expedita nulla, est unde, voluptas ducimus ab natus alias!</p>
        </div>
      </div>
      <div className="wrapper2">
        <div className="container">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
      
    </div>
  
  )
}
