import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar/Navbar';
import './OrderDetailsPage.css';

const OrderDetailsPage = () => {
  const { orderId } = useParams();

  // Mock data - in a real app, you'd fetch this based on orderId
  const orderDetails = {
    billedTo: {
      name: 'Sample TEST',
      company: 'Sample TEST',
      phone: '(516) 778-1100',
      email: 'asad@thedecibel.io',
      addressLine1: 'test',
      addressLine2: 'test, test test',
      country: 'United States',
    },
    orderId: '#VS1878',
    items: [
      {
        name: 'Dumonde Tech Lite 4-oz Bicycle Chain Lube (2015)',
        price: '$12.98',
        qty: 126,
        tax: '-',
        subtotal: '$1,636.01',
      },
    ],
    subtotal: '$1,636.01',
    amountDue: '$9,384.92',
  };

  return (
    <div className="order-details-page">
      <Navbar />
      <div className="order-details-content">
        <h1 className="page-title">Order ID {orderId}</h1>
        <div className="order-summary-card">
          <div className="card-header">
            <div className="company-info">
              <img src="/assets/logo.png" alt="Catalist Group" className="company-logo" />
              <div className="company-text">
                <p>CATALIST GROUP</p>
                <p>(929) 416-3749</p>
                <p>catalistgroup.co</p>
              </div>
            </div>
            <div className="company-address">
              <p>287 Park Avenue South, New</p>
              <p>York, NY 10010, United States</p>
            </div>
          </div>
          <div className="card-body">
            <div className="billed-to">
              <h2>Order Summary</h2>
              <h3>Billed to</h3>
              <p>{orderDetails.billedTo.name}</p>
              <p>{orderDetails.billedTo.company}</p>
              <p>{orderDetails.billedTo.phone}</p>
              <p>{orderDetails.billedTo.email}</p>
              <p>{orderDetails.billedTo.addressLine1}</p>
              <p>{orderDetails.billedTo.addressLine2}</p>
              <p>{orderDetails.billedTo.country}</p>
            </div>
            <div className="order-id-section">
              <h3>Order ID</h3>
              <p>{orderDetails.orderId}</p>
            </div>
            <div className="download-order">
              <button>
                <img src="/assets/icons/download.png" alt="Download Order" />
                Download Order
              </button>
            </div>
          </div>
          <div className="items-table">
            <div className="table-header">
              <div>ITEM NAME</div>
              <div>PRICE</div>
              <div>QTY</div>
              <div>TAX</div>
              <div>SUBTOTAL</div>
            </div>
            <div className="table-body">
              {orderDetails.items.map((item, index) => (
                <div className="table-row" key={index}>
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                  <div>{item.qty}</div>
                  <div>{item.tax}</div>
                  <div>{item.subtotal}</div>
                </div>
              ))}

              <div className='table-row'>
                <span className='subtotal-amount'> Subtotal: $1,636.01 </span>
              </div>

              <div className='table-row'>
                <span className='amount-due-txt'> Amount Due: </span> <span className='amount-due-num'> $9,384.92</span>
              </div>
            </div>
          </div>

        </div>
        <div className="page-actions-container">
            <div className="page-actions">
                <Link to="/purchase-orders" className="back-to-orders-btn">Back to Orders</Link>
                <button className="print-order-btn">Print Order</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;