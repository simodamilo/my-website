import style from './Header.module.css';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import LogoWhite from '../../assets/Logo - White.png';
import { DarkModeToggle } from '../dark-mode-toggle/DarkModeToggle';
import SelectLang from '../select/SelectLang';

interface HeaderProp {
  lang: string;
  changeLanguageHandler: any;
}

function Header({ lang, changeLanguageHandler } : HeaderProp) {
  const myNav = document.getElementById('header')

  window.onscroll = function() {
    window.scrollY > 0 ?
      myNav!.style.background = getComputedStyle(document.body).getPropertyValue('--background-color') :
      myNav!.style.background = 'none'
  }

  return (
    <div id='header' className={style.headerContainer}>
      <div>
        <Link to='/'>
          <img alt='' src={LogoWhite} className={style.logo}></img>
        </Link>
      </div>
      <div className={style.actionsContainer}>
        {/*<SelectLang lang={lang} setLang={changeLanguageHandler}/>*/}
        <DarkModeToggle/>
        <IconButton className={'mobile-dnone'} aria-label="Linkedin" href='https://www.linkedin.com/in/simone-d%E2%80%99amilo-425521180/' target='_blank'>
          <LinkedInIcon fontSize='large' className={style.icon}/>
        </IconButton>
        <IconButton className={'mobile-dnone'} aria-label="GitHub" href='https://github.com/simodamilo' target='_blank'>
          <GitHubIcon fontSize='large' className={style.icon}/>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;  