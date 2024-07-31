import React, { useState, useEffect, useRef } from 'react';
import { headerNav } from '../data';

const Header = ()=>{
    let [open, setOpen] = useState(false);
    function subOpen(){
        setOpen(open => !open)
    }
    
    // function scrollToTop(){
    //     setOpen(false)
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     })
    // }

    return(
        <>
        <nav className={open ? 'navColor' : ''}>
            <ul className="navL">
                <li className="navLogo"><a href='#MAIN'><img src='assets/logo.png'/></a></li>
            </ul>
            {open ? null : 
            <ul className="navInfo">
                {headerNav.map((data, key)=>
                    <li key={key}><a href={data.url}>{data.title}</a></li>
                )}
            </ul>
            }
            <ul className='navR'>
                <li className='navContact' onClick={subOpen}>
                    <p>LET'S TALK</p>
                    <div>
                        <p>+</p>
                    </div>
                </li>
                <li className='navHam' onClick={subOpen}>
                    <span className={open ? 'subRotR' : ''}></span>
                    <span className={open ? 'subRotC' : ''}></span>
                    <span className={open ? 'subRotL' : ''}></span>
                </li>
            </ul>
        </nav>
        <div className={open ? 'subNavWrap subNavWrapOpen' : 'subNavWrap'}>
            <div className={open ? 'subNav subNavOpen' : 'subNav'}>
                <ul>
                    {headerNav.map((data, key)=>
                        <li key={key} onClick={()=>setOpen(false)} className='subList'><a href={data.url}>{data.title}</a></li>
                    )}
                </ul>
                <div>
                    <p>Contact Me</p>
                    <div className='subNavContact'>
                        <div>
                            <p>+</p>
                        </div>
                        <p>LET'S TALK</p>
                    </div>
                </div>
                <ul className='subMyInfo'>
                    <li>
                        <img src='assets/birth.svg'/>
                        <p>010-6388-7821</p>
                    </li>
                    <li>
                        <img src='assets/address.svg'/>
                        <p>goldweek49@naver.com</p>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header;