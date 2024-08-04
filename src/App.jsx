import React, { useEffect, useRef } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import smooth from "./utils/smooth.js";
import link from "./utils/link.js";

import './App.css'
import './css/main.css'
import './css/components.css'

import './css/section/header.css'
import './css/section/port.css'
import './css/section/about.css'
import './css/section/project.css'
import './css/section/toy.css'
import './css/section/clone.css'
import './css/section/footer.css'

import Header from './pages/header/Header.jsx'
import Portfolio from './pages/sec1/Portfolio.jsx'
import About from './pages/sec2/About.jsx';
import Project from './pages/sec3/Project.jsx'
import Toy from './pages/sec4/Toy.jsx'
import Clone from './pages/sec5/Clone.jsx'
import Footer from './pages/Footer.jsx'

function App() {

	useEffect(() => {
		smooth();
		link();
	}, []);

	const mainBg = useRef(null);
	const aboutBg = useRef(null);
	const proBg = useRef(null);
	const fotBg = useRef(null);

	useEffect(()=>{
		gsap.registerPlugin(ScrollTrigger);

		const main = mainBg.current;
		const about = aboutBg.current;
		const pro = proBg.current;
		const fot = fotBg.current;

		let scrollTween = gsap.to(main,{
		scrollTrigger: {
			trigger: about,
			start: '-10% 50%',
				end: 'top 50%',
			scrub: 1,
			markers: false,
			onEnter: () => gsap.to('main', {
				backgroundColor: '#F8F8F4',
				duration: 1.4,
			}),
			onEnterBack: () => gsap.to('main', {
				backgroundColor: '#151515',
				duration: 1.4,
			}),
		},
		})

		let scrollTween2 = gsap.to(main,{
			scrollTrigger: {
				trigger: pro,
				start: '10% 50%',
				end: 'top 50%',
				scrub: 1,
				markers: false,
				onEnter: () => gsap.to('main', {
					backgroundColor: '#151515',
					duration: 1.4,
				}),
				onEnterBack: () => gsap.to('main', {
					backgroundColor: '#F8F8F4',
					duration: 1.4,
				}),
			},
		})

		
		let scrollTween3 = gsap.to(main,{
			scrollTrigger: {
				trigger: fot,
				start: '10% 50%',
				end: 'top 50%',
				scrub: 1,
				markers: false,
				onEnter: () => gsap.to('main', {
					backgroundColor: '#F8F8F4',
					duration: 1.4,
				}),
				onEnterBack: () => gsap.to('main', {
					backgroundColor: '#151515',
					duration: 1.4,
				}),
			},
		})
		
	}, []);

	return (
		<>
			<header>
				<Header/>
			</header>
			<main ref={mainBg}>
				<Portfolio/>
				<div className="changeGsap" ref={aboutBg}>
					<About/>
				</div>
				<div className="changeGsap" ref={proBg}>
					<Project/>
				</div>
				<Toy/>
				<Clone/>
				<div className="changeGsap" ref={fotBg}>
					<Footer/>
				</div>
			</main>
		</>
  )
}

export default App
