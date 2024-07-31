import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from '../../components/Button';

const Todo = ()=>{
    let btnData = [{
        name: 'go site',
        link: '',
        img: 'assets/web.png'
    },{
        name: 'github',
        link: '',
        img: 'assets/git2.png'
    }]

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
            markers: false
          }
        })
        return () => {
            scrollAbout.kill();
        };
      }, []);

    return(
    <div id='TOY' className="Toy">
        <div className="ProjectTitleWrap" ref={proRef}>
                <div>
                    <h1 className="ProjectTitle" ref={proTitleRef}>Toy Project</h1>
                </div>
            </div>
        <ul className="ToyInfo">
            <li className="ToyTitle">To-do List</li>
            <li className="ToySubTitle">투두리스트</li>
            <li className="ToyText">별빛야행 소개 및 사용 언어 소개 별빛야행 소개 및 사용 언어 소개 별빛야행 소개 및 사용 언어 소개 별빛야행 소개 및 사용 언어 소개 별빛야행 소개 및 사용 언어 소개 </li>
            <li className="ToyDate">2024.01.01 ~ 2024.02.01</li>
        </ul>
        <div className="ToyImg"></div>
        <div className="ToyBtn">
            <h2>Do You want to see more?</h2>
            <div className='todoBtn'>
                {btnData.map((data, index)=><Button name={data.name} link={data.link} img={data.img} key={index}/>)}
            </div>
        </div>
    </div>
    )
}

export default Todo;