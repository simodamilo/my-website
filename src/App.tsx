import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/header/Header";
import About from "./pages/about/About";
import Homepage from "./pages/homepages/Homepage";
import Experiences from "./pages/experiences/Experiences";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import BackgroundSymbol from "./components/background-symbol/BackgroundSymbol";

function App() {
	const { i18n: {changeLanguage, language} } = useTranslation();
	const [ lang, setLang ] = useState<string>(language);
	const [ width, setWidth ] = useState<number>( window.innerWidth );
	const [ element, setElement ] = useState<Element | null>(null);
	const location = useLocation();

	useEffect(() => {
		setLang(localStorage.getItem('lang') || 'en');
		changeLanguage(localStorage.getItem('lang') || 'en');

		setElement(document.querySelector(".App"));

		function handleResize() {
			const elem = document.querySelector(".App");
      setWidth(elem!.clientWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
	}, []);

	const changeLanguageHandler = (lang: string) => {
		setLang(lang);
		changeLanguage(lang);
		localStorage.setItem('lang', lang);
	}


	return (
		<div className="App">			
			<Header lang={lang} changeLanguageHandler={changeLanguageHandler}/>
			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.key}>
					<Route path="/"	element={<Homepage />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/experiences" element={<Experiences />}></Route>
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</AnimatePresence>
			{element && width > 1024 && [...Array(10)].map((e, i) => 
				<BackgroundSymbol 
					initPosX={Math.random() * (element!.clientWidth-100) + 1}
					initPosY={Math.random() * (element!.clientHeight-100)}
					finalPosX={Math.random() < 0.5 ? element!.clientWidth-100 : 0}
					finalPosY={Math.random() * (element!.clientHeight-100)}
					device='Desktop'
					key={i} 
					shape={ i%2 === 0 ? 'circle' : 'square'}/>)}
			{element && width < 1024 && width > 600 && [...Array(4)].map((e, i) => 
				<BackgroundSymbol 
					initPosX={Math.random() * (element!.clientWidth-100) + 1}
					initPosY={Math.random() * (element!.clientHeight-100)}
					finalPosX={Math.random() < 0.5 ? element!.clientWidth-100 : 0}
					finalPosY={Math.random() * (element!.clientHeight-100)}
					device='Mobile'
					key={i} 
					shape={ i%2 === 0 ? 'circle' : 'square'}/>)}
		</div>
	);
}

export default App;