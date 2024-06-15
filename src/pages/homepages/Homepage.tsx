import style from './Homepage.module.css';
import NavigationButton from '../../components/navigation-button/NavigationButton';
import { motion } from "framer-motion";
import mainImage from '../../assets/main-transparent.png';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import TextMainBlock from '../../components/text-main-block/TextMainBlock';

interface HomepageProps {
  width: number;
}

function Homepage({ width }: HomepageProps) {
	const { t } = useTranslation();
  const [ newPage, setNewPage ] = useState('');

  return (
    <motion.main
      initial={{ x: newPage, opacity: 0 }}
      animate={{ x: '0vh', opacity: 1 }}
      exit={{ x: newPage, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={style.homepageContainer}>
        <div className={style.firstColumn}>
          <div className={style.textModuleContainer}>
            <TextMainBlock/>
          </div>
          <div className={style.imgContainer}>
            <img alt='' src={mainImage} className={style.mainImg}></img>
          </div>
        </div>
        {width > 768 && <div className={style.secondColumn}>
          <div>
            <div className={style.clip1}></div>
            <div className={style.navBtn1}>
              <NavigationButton label={t('homepage.about-me')} direction='left' to='/about' setNewPage={setNewPage}/>
            </div>
            <div className={style.navBtn2}>
              <NavigationButton label={t('homepage.experiences')} direction='right' to='/experiences' setNewPage={setNewPage}/>
            </div>
            <div className={style.clip2}></div>
          </div>
        </div>}
      </div>
    </motion.main>
  );
}

export default Homepage;
