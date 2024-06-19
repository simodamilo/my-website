import style from './About.module.css';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import NavigationButton from '../../components/navigation-button/NavigationButton';

interface AboutProps {
  width: number;
}

function About({ width }: AboutProps) {
	const { t } = useTranslation();

	return (
		<motion.main
			initial={{ x: width > 751 ? '-100vh' : '0vh', opacity: 0 }}
			animate={{ x: '0vh', opacity: 1 }}
			exit={{ x: width > 751 ? '-100vh' : '0vh', opacity: 0 }}
			transition={{ duration: 0.5 }}
			className={style.main}
		>
			<div className={style.aboutContainer}>
				{width > 751 && <div className={style.navBtn}>
					<NavigationButton label={t('about.homepage')} direction='right' to='/'/>
				</div>}
				<p>About</p>
      </div>
		</motion.main>
	)
}

export default About;