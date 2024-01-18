import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const navigate = useNavigate();

  return (
    <div className="Header">
      <img
        src={process.env.PUBLIC_URL + `assets/icon-header.png`}
        onClick={() => navigate('/main')}
        alt="iconHeader"
      />
      <img
        className="menu-icon"
        src={process.env.PUBLIC_URL + `assets/icon-menu.png`}
        alt="iconMenu"
        onClick={() => toggleMenu()}
      />
      <div className="menu">
        <ul className={isOpen ? 'navLinks showNav' : 'hidden'}>
          <li onClick={() => navigate('/info')}>산 Check을 소개할게요 🖐</li>
          <li>견주들의 이야기</li>
          <li>오늘의 기사</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

//<img src={process.env.PUBLIC_URL + `assets/icon-menu.png`} />
