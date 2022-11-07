import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { SidebarAdm } from '../sideBarAdm';
import Api from '../../service/Api';
import './style.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [tipoClient, setTipoClient] = useState(2);
  const showSidebar = () => setSidebar(!sidebar);
  // useEffect(async () => {
  //   //console.log(result);
  // }, []);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <div className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </div>
            </li>
            { 
              SidebarAdm.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;