import React from 'react';
import { Link } from 'react-router-dom';


function Header() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <a className="navbar-brand" href="#">Electronic Store</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/shop-page">Store</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/laptop-stock">Laptop & Tablet</Link>
          </li>
          <li>
            <Link className="nav-link" to="/mobile-stock">Phone</Link>
          </li>
          <li>
            <Link className="nav-link" to="/user-list">User</Link>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Header;