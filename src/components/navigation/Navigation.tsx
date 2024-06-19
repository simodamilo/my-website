import { useEffect, useState } from 'react';
import NavigationButton from '../navigation-button/NavigationButton';
import styles from './Navigation.module.css';

interface NavProps {
  page: number;
}

function Navigation({ page }: NavProps) {
  const [ btn1, setBtn1 ] = useState({ label: '', direction: '', to: '' });
  const [ btn2, setBtn2 ] = useState({ label: '', direction: '', to: '' });

  useEffect(() => {
    if (page === 0) {
      setBtn1({ label: '', direction: '', to: '' });
      setBtn2({ label: 'Home', direction: 'right', to: '/' });
    } else if (page === 2) {
      setBtn1({ label: 'Home', direction: 'left', to: '/' });
      setBtn2({ label: '', direction: '', to: '' });
    } else {
      setBtn1({ label: 'Abount', direction: 'left', to: '/about' });
      setBtn2({ label: 'Experience', direction: 'right', to: '/experiences' });
    }
  }, [page]);

  return (
    <div className={styles.navigation}>
      <div>
        {btn1.label !== '' && <NavigationButton label={btn1.label} direction={btn1.direction} to={btn1.to}/>}
      </div>
      <div>
        {btn2.label !== '' && <NavigationButton label={btn2.label} direction={btn2.direction} to={btn2.to}/>}
      </div>
    </div>
  );
}

export default Navigation;