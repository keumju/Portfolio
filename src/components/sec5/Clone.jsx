import Button from '../Button'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {cloneDatas} from '../../data'

const Clone = ()=>{
    
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

        return () => {
            scrollTween.kill();
        };
    }, []);


    return(
    <div id='CLONE' className='Clone'>
        <div className="CloneWrap"  ref={horizontalRef}>
            <h1 className="CloneTitle">Clone Project</h1>
            <div className='CloneInfo'>
                {cloneDatas.map((data, key)=>{
                    return(
                    <ul className={`CloneSite ${data.class}`} key={key} ref={(el) => (sectionRef.current[key] = el)}>
                        <li className="CloneNum">0{key+1}</li>
                        <li className="CloneImg" style={{backgroundImage : `url(${data.img})`}}>
                            <Button name={data.btn1} link={data.link} img={data.btn1Img}/>
                            <Button name={data.btn3} link={data.link} img={data.btn3Img}/>
                        </li>
                        <li className="CloneTit">{data.tit}</li>
                        <li className="CloneTxt">{data.txt}</li>
                    </ul>
                    )
                })}
            </div>
        </div>
    </div>
    )
}

export default Clone;