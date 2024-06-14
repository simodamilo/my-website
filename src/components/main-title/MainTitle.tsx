import style from './MainTitle.module.css';
import { motion } from "framer-motion";

/*const text = [
  "###   ###             ### ###               ###           ##           ###                        ###          ###  ###",
  "###   ###             ### ###               ###          ####          ###                        ###          ###  ###",
  "###   ###             ### ###                ###        ######        ###                         ###          ###  ###",
  "###   ###             ### ###                ###        ######        ###                         ###          ###  ###",
  "###   ###   #######   ### ###   #######       ###      ###  ###      ###    #######   ###  #####  ###   ###### ###  ###",
  "#########  ###   ###  ### ###  ###   ###      ###      ###  ###      ###   ###   ###  ### ### ### ###  ###   #####  ###",
  "######### ###     ### ### ### ###     ###      ###    ###    ###    ###   ###     ### #####       ### ###     ####  ###",
  "###   ### ########### ### ### ###     ###      ###    ###    ###    ###   ###     ### ####        ### ###     ####  ###",
  "###   ### ########### ### ### ###     ###       ###  ###      ###  ###    ###     ### ###         ### ###     ####     ",
  "###   ### ###         ### ### ###     ###       ###  ###      ###  ###    ###     ### ###         ### ###     ####  ###",
  "###   ###  ###   ###  ### ###  ###   ###         ######        ######      ###   ###  ###         ###  ###   #####  ###",
  "###   ###   #######   ### ###   #######   ##     ######        ######       #######   ###         ###   ###### ###  ###",
  "                                          ##                                                                           ",
  "                                         ##                                                                            "
]*/

const text = "Hello, World!"

const MainTitle = () => {

  return (
    <div className={style.mainTitle}>
      {
        text.split('').map((el, i) => (
          <motion.span
            initial={{ visibility: 'hidden' }}
            animate={{ visibility: 'visible'  }}
            transition={{
              duration: 0.005,
              delay: i/400 + i/4
            }}
            key={i}
          >
            {el === ' ' ? '\xa0' : el}
          </motion.span>
        ))
      }
    </div>
  );

  /*return (
    <div className={style.mainTitle}>
      {
        text.map((t, index) => (
          <p key={index} className={style.p1}>
          {
            t.split('').map((el, i) => (
              <motion.span
                initial={{ visibility: 'hidden' }}
                animate={{ visibility: 'visible'  }}
                transition={{
                  duration: 0.005,
                  delay: i/400 + index/4
                }}
                key={i}
              >
                {el === ' ' ? '\xa0' : el}
              </motion.span>
            ))
          }
        </p>
        ))
      }
    </div>
  );*/
}

export default MainTitle;