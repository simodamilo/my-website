import style from './About.module.css';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import NavigationButton from '../../components/navigation-button/NavigationButton';

function About() {
	const { t } = useTranslation();

	return (
		<motion.main
			initial={{ x: '-100vh', opacity: 0 }}
			animate={{ x: '0vh', opacity: 1 }}
			exit={{ x: '-100vh', opacity: 0 }}
			transition={{ duration: 0.5 }}
			className={style.main}
		>
			<div className={style.aboutContainer}>
				<div className={style.navBtn}>
					<NavigationButton label={t('about.homepage')} direction='right' to='/'/>
				</div>
				<p>copy</p>
      </div>
		</motion.main>
	)
}

export default About;