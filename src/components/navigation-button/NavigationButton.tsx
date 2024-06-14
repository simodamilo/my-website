import style from './NavigationButton.module.css';
import { NavLink } from 'react-router-dom';

interface NavButtonProp {
  label: string;
  direction: string;
  to: string;
  setNewPage?: any;
}

const NavigationButton = ({ label, direction, to, setNewPage }: NavButtonProp) => {

  function handleClick() {
    if (setNewPage)
      setNewPage(direction === 'right' ? '-100vh' : '100vh');
  }

  return(
    <div className={style.boxParent}>
      <div className={`${style.btn} ${direction === 'left' ? style.leftArrow : style.rightArrow}`}>
        <NavLink to={to} className={style.navLink} onClick={handleClick}>
          <p className={style.btnLabel}>{label}</p>
        </NavLink>
      </div>
      <svg className={style.fltSvg} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="flt_tag">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />    
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
            <feComposite in="SourceGraphic" in2="flt_tag" operator="atop"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default NavigationButton;