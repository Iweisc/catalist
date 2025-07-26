import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './MobileNav.css';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-header">
        <img src="/assets/logo.png" alt="Catalist Group" className="mobile-nav-logo" />
        <button className="hamburger-btn" onClick={toggleMenu}>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png" alt="Menu" />
        </button>
      </div>
      {isOpen && (
        <div className="mobile-nav-links">
          <Link to="/dashboard" className={`mobile-nav-link ${location.pathname.includes('/dashboard') ? 'active' : ''}`}>
            <img src={location.pathname.includes('/dashboard') ? "/assets/icons/master_active.png" : "/assets/icons/master_catalouge.png"} alt="Master Catalogue" />
            <span>Master Catalogue</span>
          </Link>
          <Link to="/purchase-orders" className={`mobile-nav-link ${location.pathname.includes('/purchase-orders') ? 'active' : ''}`}>
            <img src={location.pathname.includes('/purchase-orders') ? "/assets/icons/cart_active.png" : "/assets/icons/cart_2.png"} alt="Purchase Orders" />
            <span>Purchase Orders</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNav;