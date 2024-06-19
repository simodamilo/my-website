import style from './Homepage.module.css';
import { motion } from "framer-motion";
import { useState } from 'react';
import mainImage from '../../assets/main-transparent.png';
import TextMainBlock from '../../components/text-main-block/TextMainBlock';

interface HomepageProps {
  width: number;
  activePage: number;
}

function Homepage({ width, activePage }: HomepageProps) {
  const [ newPage, setNewPage ] = useState('');

  return (
    <motion.main
      initial={{ x: activePage === 0 ? '-100vw' : '0vw', opacity: 0 }}
      animate={{ x: '0vh', opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={style.main}
    >
      <div className={style.homepageContainer}>
        <div className={style.navigation}>
          
        </div>
        <div className={style.content}>
          <div className={style.textModuleContainer}>
            <TextMainBlock/>
          </div>
          <div className={style.imgContainer}>
            <img alt='' src={mainImage} className={style.mainImg}></img>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

export default Homepage;
