import style from './Homepage.module.css';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import mainImage from '../../assets/main-transparent.png';
import TextMainBlock from '../../components/text-main-block/TextMainBlock';
import NavigationButton from '../../components/navigation-button/NavigationButton';

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
      className={style.main}
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
        {width > 751 && <div className={style.secondColumn}>
          <div className={style.navigationContainer}>
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
