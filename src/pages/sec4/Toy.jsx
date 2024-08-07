import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { toyData } from "../../data";
import Button from '../../components/Button';
import ToyTitle from './ToyTitle'

const Toy = ()=>{
    const toyRef = useRef(null);
    
    const toyWrapRef = useRef(null);

    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);
    
        useEffect(() => {
            gsap.registerPlugin(ScrollTrigger);
    
            const horizontal = horizontalRef.current;
            const sections = sectionRef.current;
    
            let scrollTween = gsap.to(sections, {
                xPercent: -120 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: horizontal,
                    start: "top 56px",
                    end: () => "+=" + horizontal.offsetWidth,
                    pin: true,
                    scrub: 1,
                    markers: false,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                }
            })
            console.log(horizontal.offsetWidth)
            return () => {
                scrollTween.kill();
            };
        }, []);


    return(
    <div id="TOY" className="Toy"  ref={toyRef}>
        <div ref={horizontalRef}>
            <div ref={(el) => (sectionRef.current[0] = el)}>
                <ToyTitle/>
                <div className="toyBar"></div>
            </div>
            <div className="ToyWrap" ref={toyWrapRef}>
                {toyData.map((data, id)=>
                    <ul className="ToyInfo" ref={(el) => (sectionRef.current[id+1] = el)} style={{backgroundImage : `url(${data.bgImg})`}} key={id}>
                        <li className="ToyTitle">
                            <p>{data.tit}</p>
                        </li>
                        <li className="toyBtns">
                            <div className='btnWrap'>
                                <Button name={data.btn1} link={data.btn1Link} img={data.btn1Img} />
                                <Button name={data.btn3} link={data.btn3Link} img={data.btn3Img} />
                            </div>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    </div>
    )
}

export default Toy;