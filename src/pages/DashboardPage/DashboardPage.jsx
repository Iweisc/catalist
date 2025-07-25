import React, { useState, useMemo } from 'react';
import './DashboardPage.css';
import FavoriteButton from '../../components/ui/FavoriteButton';
import { useFavorites } from '../../hooks/useFavorites';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { toggleFavorite, isFavorite, favorites } = useFavorites();

  // Mock product data
  const mockProducts = useMemo(() => [
    { id: 'product-0', name: 'Dumonde Tech Lite 4-oz Bicycle Chain Lube (2015)', brand: 'Dumonde Tech', price: '$12.98', asin: 'B001ENVJD4', upc: '718122960736', moq: '126', buybox: '$23.47', fees: '$7.20', profit: '3.29%', tags: ['trending'] },
    { id: 'product-1', name: 'Leupold Standard Scope Rings, 1" High with a Silver finish', brand: 'Leupold', price: '$12.98', asin: 'B001ENVJD4', upc: '718122960736', moq: '126', buybox: '$23.47', fees: '$7.20', profit: '3.29%',},
    { id: 'product-2', name: 'Dumonde Tech Lite 4-oz Bicycle Chain Lube (2015)', brand: 'Dumonde Tech', price: '$12.98', asin: 'B001ENVJD4', upc: '718122960736', moq: '126', buybox: '$23.47', fees: '$7.20', profit: '3.29%', tags: ['trending'] },
    { id: 'product-3', name: 'Dumonde Tech Pro-X Freehub Grease One Color, 1oz', brand: 'Dumonde Tech', price: '$12.98', asin: 'B001ENVJD4', upc: '718122960736', moq: '126', buybox: '$23.47', fees: '$7.20', profit: '3.29%', },
    { id: 'product-4', name: 'Dumonde Tech Lite 4-oz Bicycle Chain Lube (2015)', brand: 'Dumonde Tech', price: '$12.98', asin: 'B001ENVJD4', upc: '718122960736', moq: '126', buybox: '$23.47', fees: '$7.20', profit: '3.29%', tags: [] },
    { id: 'product-5', name: 'Dumonde Tech Lite 4-oz Bicycle Chain Lube (2015)', brand: 'Dumonde Tech', price: '$12.98', asin: 'B001ENVJD4', upc: '718122960736', moq: '126', buybox: '$23.47', fees: '$7.20', profit: '3.29%', tags: [] },
  ], []);

  // Filter products based on active tab
  const filteredProducts = useMemo(() => {
    if (activeTab === 'favorites') {
      return mockProducts.filter(product => favorites.includes(product.id));
    }
    // Add other tab filters here when needed
    return mockProducts;
  }, [mockProducts, favorites, activeTab]);

  return (
    <div className="master-catalogue">
      <div className="background-horizontal-border">
        <img src="assets/logo.png" alt="Catalist Group" className="catalist-group-logo" />
        <div className="header-buttons">
          <button className="button master-catalogue-btn">
            <img src="assets/icons/master_catalouge.png" alt="Master Catalogue" />
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
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Welcome, Ivana!</h1>
          <a href="#">
              <img src="assets/icons/question_mark.png" alt="help" />
              <span>Need help? Contact our Support Team</span>
          </a>
        </div>
        <h2 className="master-catalogue-title">Master Catalogue</h2>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon">
                <img src="assets/icons/new_brands.png" alt="New Brands" />
              </div>
              <div className="stat-value">13</div>
              <span className="stat-tag">Vortex, Burris, Nightforce + 10 more</span>
            </div>
            <div className="stat-label-1">New Brands in the Last 30 Days</div>
          </div>
          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon">
                <img src="assets/icons/total_brands.png" alt="Total Brands" />
              </div>
              <div className="stat-value">191</div>
            </div>
            <div className="stat-label-2">Total Brands</div>
          </div>
          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon">
                <img src="assets/icons/cart.png" alt="Total Products"  style={{width:"30px"}}/>
              </div>
              <div className="stat-value">1,335</div>
            </div>
            <div className="stat-label-3">Total Products</div>
          </div>
        </div>
        <div className="tabs">
          <button className="tab-item active">
            <img src="assets/icons/amazon.png" alt="Amazon" />
            <span>Amazon</span>
          </button>
          <button className="tab-item">
            <img src="assets/icons/walmart.png" alt="Walmart" />
            <span>Walmart</span>
          </button>
        </div>
        <div className="table-container">
          <div className="table-header">
              <div className="table-controls">
                  <div className="tabs-secondary">
                      <button
                          className={`tab-secondary-item ${activeTab === 'all' ? 'active' : ''}`}
                          onClick={() => setActiveTab('all')}
                      >
                          <img src="assets/icons/all_products.png" alt="" />
                          <span>All Products</span>
                      </button>
                      <button
                          className={`tab-secondary-item ${activeTab === 'new' ? 'active' : ''}`}
                          onClick={() => setActiveTab('new')}
                      >
                          <img src="assets/icons/trending.png" alt="" />
                          <span>New This Month</span>
                      </button>
                      <button
                          className={`tab-secondary-item ${activeTab === 'topsellers' ? 'active' : ''}`}
                          onClick={() => setActiveTab('topsellers')}
                      >
                          <img src="assets/icons/rocket.png" alt="" />
                          <span>Top Sellers</span>
                      </button>
                      <button
                          className={`tab-secondary-item ${activeTab === 'catalistai' ? 'active' : ''}`}
                          onClick={() => setActiveTab('catalistai')}
                      >
                          <img src="assets/icons/bottle.png" alt="" />
                          <span>CatalistAI</span>
                      </button>
                      <button
                          className={`tab-secondary-item ${activeTab === 'favorites' ? 'active' : ''}`}
                          onClick={() => setActiveTab('favorites')}
                      >
                          <img src="assets/icons/star.png" alt="" />
                          <span>Your Favorites</span>
                          {favorites.length > 0 && (
                              <span className="favorites-count">({favorites.length})</span>
                          )}
                      </button>
                  </div>
                  <div className="tooltip-container">
                    <button className="create-po-btn">
                        <img src="assets/icons/order_now.png" alt="Create Purchase Order" style={{height: "16px"}}/>
                        Create Purchase Order
                    </button>
                    <div className="tooltip">Select product(s) from the table to create a purchase order</div>
                  </div>
              </div>
              <div className="table-filters">
                  <div className="search-bar">
                      <img src="assets/icons/search_icon.png" alt="Search" />
                      <input type="text" placeholder="Search products" style={{outline:"none"}} />
                  </div>
                  <button>Price ($) <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-down.png" alt="dropdown" /></button>
                  <button>Profit <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-down.png" alt="dropdown" /></button>
                  <button>Margin <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-down.png" alt="dropdown" /></button>
                  <button>Brand <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-down.png" alt="dropdown" /></button>
                  <div className="table-actions">
                      <button className='edit-columns-btn' style={{height:"40px"}} >
                          <img src="assets/icons/grid_icon.png" alt="Edit Columns" />
                          Edit Columns
                      </button>
                      <button className='download-csv'><img src="assets/icons/download.png" alt="Download CSV" />Download CSV</button>
                  </div>
              </div>
              <div className="selected-products-count">0 product(s) selected</div>
          </div>
          <div className="table-body">
              <div className="table-row-header">
                  <input type="checkbox" />
                  <div>Product</div>
                  <div>Add to Favorites</div>
                  <div>Brand</div>
                  <div>Price</div>
                  <div>ASIN</div>
                  <div>UPC/EAN</div>
                  <div>MOQ</div>
                  <div>Amazon Buybox</div>
                  <div>Amazon Fees</div>
                  <div>Profit</div>
              </div>
              {filteredProducts.length === 0 ? (
                  <div className="table-row empty-state">
                      <div className="empty-message">
                          {activeTab === 'favorites'
                              ? 'No favorites yet. Click the star icon to add products to your favorites!'
                              : 'No products found matching your criteria.'}
                      </div>
                  </div>
              ) : (
                  filteredProducts.map((product) => (
                      <div className="table-row" key={product.id}>
                          <input type="checkbox" />
                          <div className="product-info">
                              <img src="assets/product_logo.png" alt={product.name} />
                              <div className="product-details">
                                  {product.tags && product.tags.length > 0 && (
                                      <div className="product-tags">
                                          {product.tags.map(tag => (
                                              <span key={tag} className={`tag tag-${tag}`}>
                                                  {tag === 'trending' && <img src="assets/icons/trending_tag.svg" alt="Trending" />}
                                                  {tag === 'new' && <img src="assets/icons/new_icon.svg" alt="New" />}
                                                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                                              </span>
                                          ))}
                                      </div>
                                  )}
                                  <div className="product-name-wrapper">
                                      <p>{product.name}</p>
                                  </div>
                              </div>
                          </div>
                          <div className="favorite-cell">
                              <FavoriteButton
                                  productId={product.id}
                                  isFavorite={isFavorite(product.id)}
                                  onToggle={toggleFavorite}
                              />
                          </div>
                          <div>{product.brand}</div>
                          <div>{product.price}</div>
                          <div>{product.asin}</div>
                          <div>{product.upc}</div>
                          <div>{product.moq}</div>
                          <div>{product.buybox}</div>
                          <div>{product.fees}</div>
                          <div>{product.profit}</div>
                      </div>
                  ))
              )}
          </div>
          <div className="table-footer" style={{ position: 'relative' }}>
              <div className="pagination" style={{ left: '160px', position: 'relative' }}>
                      <span>{'<'}</span>
                      <span>1</span>
                      <span>...</span>
                      <span>4</span>
                      <span>5</span>
                      <span className="active">6</span>
                      <span>7</span>
                      <span>8</span>
                      <span>...</span>
                      <span>50</span>
                      <span>{'>'}</span>
                  </div>
              <div className="page-size" style={{ position: 'relative', left: '150px' }}>
                  <span>10/page</span>
              </div>
              <div className="item-count" style={{ position: 'relative', top: '50px', left: '-280px' }}>
                  Showing 1-100 of 1335 items
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;