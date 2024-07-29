import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectDatas } from "../../data";

import Button from '../Button';

const Project = () => { 

    const proTitleRef = useRef(null);
    const proRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const proTitle = proTitleRef.current;
        const proWrap = proRef.current;
    
        let scrollAbout = gsap.fromTo(proTitle,{
            y: 100
        },{
            y: 0,
          scrollTrigger: {
            trigger: proWrap,
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
        <div id="PROJECT" className='Project'>
            <div className="ProjectTitleWrap" ref={proRef}>
                <div>
                    <h1 className="ProjectTitle" ref={proTitleRef}>My Projects Story</h1>
                </div>
            </div>
            {projectDatas.map((data) =>
                <div key={data.class} className={`ProjectSite ${data.class}`} style={{ backgroundImage: `url(${data.bgImg})` }}>
                    <ul className='ProWrap'>
                        <li className="ProTitle"><p>{data.siteName}</p></li>
                        <li className="ProTeam"><p>{data.teamName}</p></li>
                        <li className="ProText"><p>{data.text}</p></li>
                        <li className="ProDate"><p>{data.date}</p></li>
                        <li className='btnWrap'>
                            <Button name={data.btn1} link={data.btn1Link} img={data.btn1Img} />
                            <Button name={data.btn3} link={data.btn3Link} img={data.btn3Img} />
                            <Button name={data.btn2} link={data.btn2Link} img={data.btn2Img} />
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Project;