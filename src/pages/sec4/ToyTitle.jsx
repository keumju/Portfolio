import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ToyTitle(){
    const toyRef = useRef(null);
    const toyTitleRef1 = useRef(null);
    const toyTitleRef2 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const toyWrap = toyRef.current;
        const toyTitle1 = toyTitleRef1.current;
        const toyTitle2 = toyTitleRef2.current;
        
        let ctx = gsap.context(()=>{
            let toyTl = gsap.timeline();

            toyTl.fromTo(toyTitle1,{x: -500},{
                x: 0,
                color: "#fff",
                scrollTrigger: {
                    trigger: toyWrap,
                    start: "-10% top",
                    end: "top 10%",
                    scrub: 1,
                    markers: false
                }
            })
            toyTl.fromTo(toyTitle2,{x: 500},{
                x: 0,
                color: "#fff",
                scrollTrigger: {
                    trigger: toyWrap,
                    start: "-10% top",
                    end: "top 10%",
                    scrub: 1,
                    markers: false
                }
            })
                
        })
        }, []);

    useEffect(() => {
        const stars = 800;
    
        const generateRandomNumber = (min, max) => {
          return Math.random() * (max - min) + min;
        };
    
        const $stars = document.querySelector(".stars");
        const r = 800;
    
        for (let i = 0; i < stars; i++) {
          const $star = document.createElement("div");
          $star.classList.add("star");
          $stars.appendChild($star);
        }
    
        const starElements = document.querySelectorAll(".star");
        starElements.forEach((cur) => {
          const s = 0.2 + (Math.random() * 1);
          const curR = r + (Math.random() * 300);
          cur.style.transformOrigin = `0 0 ${curR}px`;
          cur.style.transform = `translate3d(0,0,-${curR}px) rotateY(${generateRandomNumber(0, 360)}deg) rotateX(${generateRandomNumber(-50, 0)}deg) scale(${s},${s})`;
        });
    
        // 클린업 함수
        return () => {
          $stars.innerHTML = ''; // 컴포넌트가 언마운트될 때 모든 별을 제거합니다.
        };
      }, []); // 빈 의존성 배열은 useEffect가 한 번만 실행되도록 합니다.
    
    return(
        <div className="toyTxtWrap" ref={toyRef}>
            <div className="sta">
                <div className="stars"></div>
            </div>
            <div className="starTit">
                <div className="ProjectTitleWrap toyTitWrap">
                    <div>
                        <h1 className="ProjectTitle1" ref={toyTitleRef1}>Toy</h1>
                        <h1 className="ProjectTitle2" ref={toyTitleRef2}>Projects</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToyTitle