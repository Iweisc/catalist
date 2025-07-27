import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PurchaseOrdersPage.css';
import Navbar from '../../components/layout/Navbar/Navbar';

const PurchaseOrdersPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      id: '293',
      date: 'July 13, 2025',
      items: '343 items',
      totalAmount: '$4,752.67',
      status: 'Received'
    }
  ];

  return (
    <div className="purchase-orders-page">
      <Navbar />
      
      <div className="purchase-orders-content">
        <div className="purchase-orders-header">
          <h1>Purchase Orders</h1>
          <button className="create-new-order-btn">
            <img src="/assets/icons/plus_icon.png" alt="Create New Order" />
            Create New Order
          </button>
        </div>

        <div className="purchase-orders-container">
          <div className="purchase-orders-controls">
            <div className="po-search-bar">
              <input
                type="text"
                placeholder="Search products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{outline:"none"}}
              />
              <img src="/assets/icons/search_icon.png" alt="Search" />
              {isMobile && <img src="/assets/icons/grid_icon.png" alt="Edit Columns" className="edit-columns-icon" />}
            </div>
            
            {!isMobile && (
              <div className="po-table-actions">
                <button className='po-edit-columns-btn'>
                  <img src="/assets/icons/grid_icon.png" alt="Edit Columns" />
                  Edit Columns
                </button>
                <button className='po-download-csv-btn'>
                  <img src="/assets/icons/download.png" alt="Download CSV" />
                  Download CSV
                </button>
              </div>
            )}
          </div>

          <div className="orders-table">
            <div className="orders-table-header">
              <div>Order ID</div>
              <div>Date</div>
              <div>Items</div>
              <div>Total Amount</div>
              <div>Status</div>
              <div>Actions</div>
            </div>
            
            <div className="orders-table-body">
              {purchaseOrders.map((order, index) => (
                <div className="orders-table-row" key={index}>
                  <div>{order.id}</div>
                  <div>{order.date}</div>
                  <div>{order.items}</div>
                  <div>{order.totalAmount}</div>
                  <div>
                    <span className="status-badge received">{order.status}</span>
                  </div>
                  <div>
                    <button onClick={() => navigate(`/order-details/${order.id}`)} className="view-details-btn">View details</button>
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