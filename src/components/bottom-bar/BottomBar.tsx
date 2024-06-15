import './BottomBar.css';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BottomBar = () => {
  const [ active, setActive ] = useState(1);

  return (
    <div className='navigation'>
      <ul>
        <li className={`list ${active === 0 ? 'active' : ''}`}>
          <NavLink to='/about' className={'nav-link'} onClick={() => setActive(0)}>
            <span className='icon'><InfoIcon/></span>
            <span className='text'>About</span>
          </NavLink>
        </li>
        <li className={`list ${active === 1 ? 'active' : ''}`}>
          <NavLink to='/' className={'nav-link'} onClick={() => setActive(1)}>
            <span className='icon'><HomeIcon/></span>
            <span className='text'>Home</span>
            </NavLink>        
        </li>
        <li className={`list ${active === 2 ? 'active' : ''}`}>
          <NavLink to='/experiences' className={'nav-link'} onClick={() => setActive(2)}>
            <span className='icon'><RocketLaunchIcon/></span>
            <span className='text'>Experience</span>
          </NavLink>      
        </li>
        <div className='indicator'></div>
      </ul>
    </div>
  );
}

export default BottomBar;