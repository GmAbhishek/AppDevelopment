import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Dashboard.css';

function Dashboard() {
  const overallTraffic = 15000; // Total website traffic
  const totalUsers = 5000; // Total registered users
  const activeUsers = 3000; // Active users currently online
  const eComActivity = 1200; // E-commerce activity (e.g., orders placed)
  const totalSales = 25000; // Total sales revenue
  

  const categoryData = {
    fruits: [
      { name: 'Apple', sales: 100 },
      { name: 'Banana', sales: 150 },
    ],
    vegetables: [
      { name: 'Carrot', sales: 80 },
      { name: 'Tomato', sales: 120 },
    ],
    dairy: [
      { name: 'Milk', sales: 200 },
      { name: 'Cheese', sales: 90 },
    ],
  };

  const totalSalesByCategory = {
    fruits: categoryData.fruits.reduce((total, item) => total + item.sales, 0),
    vegetables: categoryData.vegetables.reduce((total, item) => total + item.sales, 0),
    dairy: categoryData.dairy.reduce((total, item) => total + item.sales, 0),
  };

  const percentagesByCategory = {
    fruits: ((totalSalesByCategory.fruits / totalSales) * 100).toFixed(2),
    vegetables: ((totalSalesByCategory.vegetables / totalSales) * 100).toFixed(2),
    dairy: ((totalSalesByCategory.dairy / totalSales) * 100).toFixed(2),
  };

  return (
    <div className="dashboard">
      <h1>Online Grocery Dashboard</h1>
      <div className="dashboard-stats">
        <div className="dashboard-stat">
          <h2>Overall Traffic</h2>
          <p>{overallTraffic} visits</p>
        </div>
        <div className="dashboard-stat">
          <h2>Total Users</h2>
          <p>{totalUsers} users</p>
        </div>
        <div className="dashboard-stat">
          <h2>Active Users</h2>
          <p>{activeUsers} online</p>
        </div>
        <div className="dashboard-stat">
          <h2>E-commerce Activity</h2>
          <p>{eComActivity} orders placed</p>
        </div>
        <div className="dashboard-stat">
          <h2>Total Sales</h2>
          <p>${totalSales} revenue</p>
        </div>
      </div>
      <div className="category-links">
        <Link to="/fruits">Fruits ({percentagesByCategory.fruits}%)</Link>
        <Link to="/vegetables">Vegetables ({percentagesByCategory.vegetables}%)</Link>
        <Link to="/dairy">Dairy ({percentagesByCategory.dairy}%)</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Dashboard;
