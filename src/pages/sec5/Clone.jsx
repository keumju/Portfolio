import Button from '../../components/Button'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {cloneDatas} from '../../data'

const Clone = ()=>{
    const cloneRef = useRef(null);
    const cloneTitleRef1 = useRef(null);
    const cloneTitleRef2 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const cloneWrap = cloneRef.current;
        const cloneTitle1 = cloneTitleRef1.current;
        const cloneTitle2 = cloneTitleRef2.current;
        
        let ctx = gsap.context(()=>{
            let toyTl = gsap.timeline();

            toyTl.fromTo(cloneTitle1,{x: -500},{
                x: 0,
                color: "#fff",
                scrollTrigger: {
                    trigger: cloneWrap,
                    start: "-10% top",
                    end: "top 10%",
                    scrub: 1,
                    markers: false
                }
            })
            toyTl.fromTo(cloneTitle2,{x: 500},{
                x: 0,
                color: "#fff",
                scrollTrigger: {
                    trigger: cloneWrap,
                    start: "-10% top",
                    end: "top 10%",
                    scrub: 1,
                    markers: false
                }
            })
                
        })
    }, []);


    return(
    <div id='CLONE' className='Clone' ref={cloneRef}>
        <div className="CloneWrap">
            <div>
                <div className="ProjectTitleWrap cloneTitWrap">
                    <div>
                        <h1 className="ProjectTitle1" ref={cloneTitleRef1}>Clone</h1>
                        <h1 className="ProjectTitle2" ref={cloneTitleRef2}>Projects</h1>
                    </div>
                </div>
            </div>
            <div className='CloneInfo'>
                {cloneDatas.map((data, key)=>{
                    return(
                    <ul className={`CloneSite ${data.class}`} key={key}>
                        <li className="CloneNum">0{key+1}</li>
                        <li className="CloneImg" style={{backgroundImage : `url(${data.img})`}}></li>
                        <li className="CloneTit">{data.tit}</li>
                        <li className="CloneTxt">{data.txt}</li>
                        <li className='CloneBtn'>
                            <Button name={data.btn1} link={data.link} img={data.btn1Img}/>
                            <Button name={data.btn3} link={data.link} img={data.btn3Img}/>
                        </li>
                    </ul>
                    )
                })}
            </div>
        </div>
    </div>
    )
}

export default Clone;