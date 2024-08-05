import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectDatas } from "../../data";

import Button from '../../components/Button';
import Button2 from '../../components/Button2';

const Project = () => { 

    const proTitleRef1 = useRef(null);
    const proTitleRef2 = useRef(null);
    const proRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const proTitle1 = proTitleRef1.current;
        const proTitle2 = proTitleRef2.current;
        const proWrap = proRef.current;
    
        let ctx = gsap.context(()=>{
            gsap.fromTo(proTitle1,{x: -300},{
                x: 0,
                scrollTrigger: {
                    trigger: proWrap,
                    start: "-10% top",
                    end: "top 10%",
                    scrub: 1,
                    markers: false
                }
            })
            gsap.fromTo(proTitle2,{x: 300},{
                x: 0,
                scrollTrigger: {
                    trigger: proWrap,
                    start: "-10% top",
                    end: "top 10%",
                    scrub: 1,
                    markers: false
                }
            })
        })
      }, []);

    return (
        <div id="PROJECT" className='Project' ref={proRef}>
            <div className="ProjectTitleWrap proTitWrap">
                <div>
                    <h1 className="ProjectTitle1" ref={proTitleRef1}>Projects</h1>
                    <h1 className="ProjectTitle2" ref={proTitleRef2}>Story</h1>
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
                            <Button2 name={data.btn4} link={data.btn4Link} img={data.btn4Img} />
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Project;