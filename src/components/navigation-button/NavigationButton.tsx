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
      <div className={`${style.btnBorder} ${direction === 'left' ? style.leftArrow : style.rightArrow}`}>
        <NavLink to={to} className={style.navLink} onClick={handleClick}>
          <div className={`${style.btn} ${direction === 'left' ? style.leftArrow : style.rightArrow}`}>
            <p className={`${style.btnLabel} ${direction === 'left' ? style.btnLabelLeft : style.btnLabelRight}`}>{label}</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default NavigationButton;