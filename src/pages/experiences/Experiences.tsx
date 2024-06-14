import style from './Experiences.module.css';
import { motion } from "framer-motion";
import NavigationButton from '../../components/navigation-button/NavigationButton';

function Experiences() {
  return(
    <motion.main
      initial={{ x: '100vh', opacity: 0 }}
      animate={{ x: '0vh', opacity: 1 }}
      exit={{ x: '100vh', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={style.container}>
        <div className={style.navBtnExperiences}>
          <NavigationButton label="about" direction='left' to='/'/>
        </div>
        Experiences
      </div>
    </motion.main>
  );
}

export default Experiences;