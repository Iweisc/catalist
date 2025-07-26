import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PurchaseOrdersPage from './pages/PurchaseOrdersPage';
import MobileNav from './components/layout/MobileNav';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MobileNav />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/purchase-orders" element={<PurchaseOrdersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
