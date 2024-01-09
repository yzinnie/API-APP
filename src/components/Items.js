import React from 'react';
import data from '../db/db.json';

const Items = () => {
  return (
    <div className="Items">
      <ul>
        {data.items.map((item) => (
          <li key={item.id}>
            {item.name}
            {item.event}
            {item.materialType}
            {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Items;
