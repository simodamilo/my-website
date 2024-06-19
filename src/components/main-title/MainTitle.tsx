import style from './MainTitle.module.css';
import { motion } from "framer-motion";

const text = "Hello, World!"

const MainTitle = () => {

  return (
    <div className={style.mainTitle}>
      {
        text.split('').map((el, i) => (
          <motion.span
            initial={{ visibility: 'hidden' }}
            animate={{ visibility: 'visible' }}
            transition={{
              duration: 0.005,
              delay: i/400 + i/10
            }}
            key={i}
          >
            {el === ' ' ? '\xa0' : el}
          </motion.span>
        ))
      }
    </div>
  );
}

export default MainTitle;