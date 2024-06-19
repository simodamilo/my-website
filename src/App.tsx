import { useState, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Homepage from "./pages/homepages/Homepage";
import Experiences from "./pages/experiences/Experiences";
import BackgroundSymbol from "./components/background-symbol/BackgroundSymbol";
import BottomBar from "./components/bottom-bar/BottomBar";
import Navigation from "./components/navigation/Navigation";

function App() {
	const { i18n: {changeLanguage, language} } = useTranslation();
	const [ lang, setLang ] = useState<string>(language);
	const [ width, setWidth ] = useState<number>( window.innerWidth );
	const [ element, setElement ] = useState<Element | null>(null);
	const [ activePage, setActivePage ] = useState(1);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname	=== '/about')
			setActivePage(0);
		else if(location.pathname === '/experiences')
			setActivePage(2);
		else
			setActivePage(1);
	}, [location]);

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
			{element && width > 751 && <Navigation page={activePage} />}
			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.key}>
					<Route path="/"	element={<Homepage width={width} activePage={activePage}/>}></Route>
					<Route path="/about" element={<About width={width}/>}></Route>
					<Route path="/experiences" element={<Experiences width={width}/>}></Route>
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</AnimatePresence>
			{element && width <= 751 && <BottomBar activePage={activePage}/>}

			{element && width > 751 && [...Array(width > 1200 ? 10 : 4)].map((e, i) => 
				<BackgroundSymbol 
					initPosX={Math.random() * (element!.clientWidth-100) + 1}
					initPosY={Math.random() * (element!.clientHeight-100)}
					finalPosX={Math.random() < 0.5 ? element!.clientWidth-100 : 0}
					finalPosY={Math.random() * (element!.clientHeight-100)}
					device='Desktop'
					key={i} 
					shape={ i%2 === 0 ? 'circle' : 'square'}/>)}
		</div>
	);
}

export default App;