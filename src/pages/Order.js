import React from 'react';
import Header from '../components/Header';
import Items from '../components/Items';

const Order = ({ item }) => {
  return (
    <div className="Order">
      <Header />
      <Items />
    </div>
  );
};
export default Order;
