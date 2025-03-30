import { useEffect } from 'react';

type HeaderProps = {
  logo: string;
  menuItems: string[];
};

const Header = ({ logo, menuItems }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img className="header__logo" src={logo}></img>
        <div className="header__items">
          {menuItems.map((item) => (
            <a href="#">{item}</a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
