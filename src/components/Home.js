import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image from "../image/monstera-leaves.jpg";

export default function Home() {

  const slideImages = [
    '../image/monstera-leaves.jpg',
    '../image/moi-ra-truong-it.jpg',
    '../image/photo-it.jpg'
  ];

  return(

    <main>

      <Slide>
          <div className="each-slide">
            <div className="absolute object-cover w-full h-full" style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div className="absolute object-cover w-full h-full" style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div className="absolute object-cover w-full h-full" style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>

        <img src={image} alt="monstera-leaves" className="absolute object-cover w-full h-full"/>

      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hello, I'm AnhICT</h1>
      </section>
    </main>
  )
}