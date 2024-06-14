import style from './About.module.css';
import { motion } from "framer-motion";
import BackgroundSymbol from '../../components/background-symbol/BackgroundSymbol';

function About() {
	return (
		<motion.main
			initial={{ x: '-100vh', opacity: 0 }}
			animate={{ x: '0vh', opacity: 1 }}
			exit={{ x: '-100vh', opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className={style.aboutContainer}>
				<p>copy</p>
      </div>
		</motion.main>
	)
}

export default About;