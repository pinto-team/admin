import React from 'react';
import OrdersList from '../components/OrdersList';

const OrdersPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">مدیریت سفارشات</h1>
      <OrdersList />
    </div>
  );
};

export default OrdersPage;