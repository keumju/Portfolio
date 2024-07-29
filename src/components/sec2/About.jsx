import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import About1 from './About1'
import About2 from './About2'
import About3 from './About3'


const About = () => {

  const aboutRef = useRef(null);
  const aboutImgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const about = aboutRef.current;
    const aboutImg = aboutImgRef.current;

    let scrollAbout = gsap.fromTo(aboutImg,{
      scale: 0.8
    },{
      scale: 1,
      scrollTrigger: {
        trigger: about,
        start: "-20% top",
        end: "top 10%",
        scrub: 1,
        markers: true
      }
    })
    return () => {
        scrollAbout.kill();
    };
  }, []);

  return (
    <div id='ABOUT' className="About" ref={aboutRef}>
      <div className="AboutLeft" ref={aboutImgRef} style={{backgroundImage: 'url(assets/main_img1.jpg)'}}></div>
      <div className="AboutRight">
          <About1/>
          <About2/>
          <About3/>
      </div>
    </div>
  )
}

export default About;