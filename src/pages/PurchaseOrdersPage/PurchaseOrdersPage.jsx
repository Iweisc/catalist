import React, { useState } from 'react';
import './PurchaseOrdersPage.css';
import Navbar from '../../components/layout/Navbar/Navbar';

const PurchaseOrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const purchaseOrders = [
    {
      id: '293',
      date: 'July 13, 2025',
      items: '343 items',
      totalAmount: '$4,752.67',
      status: 'Received'
    },
    {
      id: '293',
      date: 'July 13, 2025',
      items: '343 items',
      totalAmount: '$4,752.67',
      status: 'Received'
    }
  ];

  return (
    <div className="purchase-orders">
      <Navbar />
      <div className="purchase-orders-content">
        <div className="purchase-orders-header">
          <h1>Purchase Orders</h1>
          <button className="create-new-order-btn">
            <img src="assets/icons/plus_icon.png" style={{width:"18px"}} alt="Plus" />
            Create New Order
          </button>
        </div>

        <div className="purchase-orders-container">
          <div className="purchase-orders-controls">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
               <img src="assets/icons/search_icon.png" alt="Search" />
            </div>
            
            <div className="table-actions">
              <button className='edit-columns-btn'>
                <img src="assets/icons/grid_icon.png" alt="Edit Columns" />
                Edit Columns
              </button>
              <button className='download-csv'>
                <img src="assets/icons/download.png" alt="Download CSV" />
                Download CSV
              </button>
            </div>
          </div>

          <div className="orders-table">
            <div className="table-header">
              <div>Order ID</div>
              <div>Date</div>
              <div>Items</div>
              <div>Total Amount</div>
              <div>Status</div>
              <div>Actions</div>
            </div>
            
              {purchaseOrders.map((order, index) => (
                <div className="table-row" key={index}>
                  <div>{order.id}</div>
                  <div>{order.date}</div>
                  <div>{order.items}</div>
                  <div>{order.totalAmount}</div>
                  <div>
                    <span className="status-badge received">{order.status}</span>
                  </div>
                  <div>
                    <button className="view-details-btn">View details</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="bottom-spacer"></div>
    </div>
  );
};

export default PurchaseOrdersPage;