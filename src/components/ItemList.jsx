import React from 'react';
import ItemCard from './ItemCard';
// import './ItemList.css';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemList;