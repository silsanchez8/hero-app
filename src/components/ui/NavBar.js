import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as S from './NavBar.styles';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        SuperHeroes
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <S.MenuRight className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/login"
          >
            Logout
          </NavLink>
        </ul>
      </S.MenuRight>
    </nav>
  );
};
