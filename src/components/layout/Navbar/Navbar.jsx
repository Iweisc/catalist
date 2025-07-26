import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../../pages/DashboardPage/DashboardPage.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="background-horizontal-border">
      <img src="/assets/logo.png" alt="Catalist Group" className="catalist-group-logo" />
      <div className="header-buttons">
        <a href="/dashboard" className={`button master-catalogue-btn ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                  <img src={location.pathname === '/dashboard' ? "/assets/icons/master_active.png" : "/assets/icons/master_catalouge.png"} alt="Master Catalogue" />
                  <span>Master Catalogue</span>
                </a>
        <a href="/purchase-orders" className={`button purchase-orders-btn ${location.pathname === '/purchase-orders' ? 'active' : ''}`}>
          <img src={location.pathname === '/purchase-orders' ? "/assets/icons/cart_active.png" : "/assets/icons/cart_2.png"} alt="Purchase Orders" />
          <span>Purchase Orders</span>
        </a>
      </div>
      <div className="user-profile">
        <img src="/assets/icons/pfp.png" alt="Ivana Morgan" className="pfp" />
        <span>Ivana Morgan</span>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-down.png" alt="dropdown" />
      </div>
    </div>
  );
};

export default Navbar;