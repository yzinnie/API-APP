import React, { useState } from 'react';
import data from '../db/db.json';

const Items = () => {
  return (
    <div className="Items">
      {data.items.map((item) => (
        <div className="item-list" key={item.id}>
          <div>
            <img src={process.env.PUBLIC_URL + `assets/logo-items.svg`} />
          </div>
          <div className="item-name">
            {item.name}{' '}
            <div className="item-materialType">
              {' '}
              <button>-</button>
              {item.materialType}
              <button>+</button>
            </div>
          </div>

          <div className="item-price">{item.price}원</div>
        </div>
      ))}
    </div>
  );
};
export default Items;
