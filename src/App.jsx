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

import Header from './pages/Header.jsx'
import Portfolio from './pages/sec1/Portfolio.jsx'
import About from './pages/sec2/About.jsx';
import Project from './pages/sec3/Project.jsx'
import Todo from './pages/sec4/Todo.jsx'
import Clone from './pages/sec5/Clone.jsx'
import Footer from './pages/Footer.jsx'

function App() {

	useEffect(() => {
		smooth();
		link();
	}, []);

	const mainBg = useRef(null);
	const aboutBg = useRef(null);

	useEffect(()=>{
		gsap.registerPlugin(ScrollTrigger);

		const main = mainBg.current;
		const about = aboutBg.current;

		let scrollTween = gsap.to(main,{
		backgroundColor: "#F8F8F4",
		ease: "none",
		scrollTrigger: {
			trigger: about,
			start: "-500px -56px",
			end: "top top",
			scrub: 1,
			markers: false,
		}
		})
	
		return () => {
			scrollTween.kill();
		};
	}, []);

	return (
		<>
			<header>
				<Header/>
			</header>
			<main ref={mainBg}>
				<Portfolio/>
				<div ref={aboutBg}>
					<About/>
				</div>
				<Project/>
				{/* <Todo/> */}
				<Clone/>
			</main>
			<footer>
				<Footer/>
			</footer>
		</>
  )
}

export default App
