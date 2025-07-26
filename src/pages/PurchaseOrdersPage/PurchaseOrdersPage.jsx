import React, { useState } from 'react';
import './PurchaseOrdersPage.css';
import Navbar from '../../components/layout/Navbar/Navbar';

const PurchaseOrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock purchase orders data
  const purchaseOrders = [
    {
      id: '293',
      date: 'July 13, 2025',
      items: '343 items',
      totalAmount: '$4,752.67',
      status: 'Received'
    },
    {
      id: '294',
      date: 'July 14, 2025',
      items: '256 items',
      totalAmount: '$3,421.89',
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
            <img src="assets/icons/new_icon.svg" alt="Plus" />
            Create New Order
          </button>
        </div>

        <div className="purchase-orders-container">
          <div className="purchase-orders-controls">
            <div className="search-bar">
              <img src="assets/icons/search_icon.png" alt="Search" />
              <input 
                type="text" 
                placeholder="Search products" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{outline:"none"}} 
              />
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
            
            <div className="table-body">
              {purchaseOrders.map((order) => (
                <div className="table-row" key={order.id}>
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
      </div>
      <div className="bottom-spacer"></div>
    </div>
  );
};

export default PurchaseOrdersPage;