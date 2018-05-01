import './index.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item" activeclassName="active">
                <NavLink className="nav-link" exact={true} to="/" >HOME</NavLink>
              </li>
              <li className="nav-item" activeclassName="active">
                <NavLink className="nav-link" to="/about">ABOUT</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      );
  }
}
