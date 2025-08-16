import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // List of routes where you want NO shadow
  const noShadowRoutes = ['/donate', '/browse', '/contact'];
  const noShadow = noShadowRoutes.includes(location.pathname);

  // Use text shadow only on home page
  const brandClass = `navbar-brand fs-3 fw-bold ${isHome ? 'navbar-text-shadow text-white' : 'text-dark'}`;
  const linkClass = `nav-link fw-semibold ${isHome ? 'navbar-text-shadow text-white' : 'text-dark'}`;

  return (
    <nav
      className={`navbar navbar-expand-lg w-100 ${isHome ? 'bg-transparent position-absolute' : 'bg-light'} ${noShadow ? '' : 'shadow-sm'}`}
      style={{
        ...(isHome ? { top: 0, left: 0, zIndex: 10, borderBottom: 'none', boxShadow: 'none' } : {}),
        ...(noShadow ? { boxShadow: 'none' } : {})
      }}
    >
      <div className="container">
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          style={{ display: 'inline-block' }}
        >
          <Link className={brandClass} to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img
              src="/image/Milan-Logo.png"
              alt="Milan Logo"
              style={{ height: '40px', width: '40px', objectFit: 'contain' }}
            />
            Milan
          </Link>
        </motion.div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { to: '/', label: 'Home', end: true },
              { to: '/donate', label: 'Donate' },
              { to: '/browse', label: 'Browse' },
              { to: '/contact', label: 'Contact Us' }
            ].map(({ to, label, end }) => (
              <li className="nav-item" key={to}>
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ display: 'inline-block' }}
                >
                  <NavLink className={linkClass} to={to} end={end}>
                    {label}
                  </NavLink>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
