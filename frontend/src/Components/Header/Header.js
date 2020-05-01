import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__title">Ducky</div>
      </Link>
    </header>
  );
}

export default Header;
