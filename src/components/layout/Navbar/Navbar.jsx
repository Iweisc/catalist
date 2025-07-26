import React from 'react';
import '../../../pages/DashboardPage/DashboardPage.css';

const Navbar = () => {
  return (
    <div className="background-horizontal-border">
      <img src="assets/logo.png" alt="Catalist Group" className="catalist-group-logo" />
      <div className="header-buttons">
        <button className="button master-catalogue-btn">
          <img src="assets/icons/master_active.png" alt="Master Catalogue" />
          <span>Master Catalogue</span>
        </button>
        <button className="button purchase-orders-btn">
          <img src="assets/icons/cart_2.png" alt="Purchase Orders" />
          <span>Purchase Orders</span>
        </button>
      </div>
      <div className="user-profile">
        <img src="assets/icons/pfp.png" alt="Ivana Morgan" className="pfp" />
        <span>Ivana Morgan</span>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-down.png" alt="dropdown" />
      </div>
    </div>
  );
};

export default Navbar;