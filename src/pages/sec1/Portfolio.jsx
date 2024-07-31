import React, { useEffect, useRef } from 'react';
import { TweenMax, Expo } from 'gsap';

function Portfolio(){
    const PortRef = useRef(null);
    const panelRef = useRef(null);
    const pContentRef = useRef(null);
    const imgRef = useRef(null);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        const cx = e.pageX;
        const cy = e.pageY;
        tilt(cx, cy);
      };
  
      const handleMouseLeave = () => {
        tilt(window.innerWidth / 2, window.innerHeight / 2);
      };
  
      const tilt = (cx, cy) => {
        const sxPos = (cx / window.innerWidth * 100 - 50) * 2;
        const syPos = (cy / window.innerHeight * 100 - 50) * 2;
        
        TweenMax.to(pContentRef.current, 2, {
          rotationY: -0.03 * sxPos,
          rotationX: 0.03 * syPos,
          transformPerspective: 500,
          transformOrigin: "center center -400",
          ease: Expo.easeOut
        });
  
        TweenMax.to(imgRef.current, 2, {
          rotationY: -0.03 * sxPos,
          rotationX: 0.03 * syPos,
          transformPerspective: 500,
          transformOrigin: "center center -200",
          ease: Expo.easeOut
        });
      };
  
      const body = PortRef.current;
      body.addEventListener('mousemove', handleMouseMove);
      body.addEventListener('mouseleave', handleMouseLeave);
  
      return () => {
        body.removeEventListener('mousemove', handleMouseMove);
        body.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []);

    return(
      <div id='MAIN' className="Portfolio" ref={PortRef}>
          <div className="panel" ref={panelRef}>
              <div className="panel__content-col">
                  <div className="panel__content" ref={pContentRef}>
                      <div className="panel__text">
                          <h1 className="panel__title">My Path in Tech</h1>
                          <p className="panel__addr"><span></span>Dedicated learner, Keumju Kim Portfolio</p>
                      </div>
                      <div className="panel__line"></div>
                  </div>
              </div>
              <div className="panel__img-col" ref={imgRef}>
                  <img src="assets/main_img2.jpeg" alt="main image" className="panel__img"/>
              </div>
          </div>
      </div>
    )
}

export default Portfolio;
