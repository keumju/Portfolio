import React, { useState, useEffect, useRef } from 'react';
import { headerNav } from '../data';

const Header = ()=>{
    // window width size
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    const resizeListener = () => {
        setInnerWidth(window.innerWidth);
    };
    
    useEffect(() => {
        window.addEventListener("resize", resizeListener);
    
        return () => {
        window.removeEventListener("resize", resizeListener);
        };
    }, []);
    
    


    return(
        <nav>
            <ul className="navL">
                <li className="navLogo"><a href='#MAIN'><img src='assets/logo.png'/></a></li>
            </ul>
            {innerWidth <= 750 ?
            <>
                <ul className='smallNav'>
                    <li>
                        <p>LET'S TALK <span>+</span></p>
                    </li>
                    <li>
                        <span></span>
                        <span></span>
                    </li>
                </ul>
                <div className='hamPopup'>
                    
                </div>
            </>
            :
            <>
                <ul className="navInfo">
                    {headerNav.map((data, key)=>
                        <li key={key}><a href={data.url}>{data.title}</a></li>
                    )}
                </ul> 
                <div className="navR">
                    <p>LET'S TALK <span>+</span></p>
                </div>
            </>
            }
        </nav>
    )
}

export default Header;