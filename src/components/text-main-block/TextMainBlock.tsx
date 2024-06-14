import style from './TextMainBlock.module.css';
import MainTitle from "../main-title/MainTitle";
import { useTranslation } from 'react-i18next';
import { skills } from '../../utils/global';

function TextMainBlock() {
  const { t } = useTranslation();

  return (
    <div className={style.content}>
      <MainTitle/>
      <h2 className={style.subtitle}>{t('homepage.intro-copy')}</h2>
      <p className={style.par1}>{t('homepage.software-eng')}</p>
      <div className={style.skillContainer}>
        {skills.map((skill) => 
          <div className={style.skill} key={skill}>
            {skill}
          </div>
        )}
      </div>
    </div>
  );
}

export default TextMainBlock;