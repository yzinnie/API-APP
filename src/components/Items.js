import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const Event = () => {
  return <div>이벤트</div>;
};

const Items = ({ item, item_name, item_event }) => {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    if (count < 999) {
      setCount(count + 1);
    }
  };

  const handleDecreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="Items">
      <div className="item-list">
        <img src={process.env.PUBLIC_URL + `assets/logo-items.svg`} />
        <div className="item-name">{item_name}</div>
        {item_event === 1 && <Event />}
        <div className="item-materialType">
          <button onClick={handleDecreaseCount}>-</button>
          <span>{count}</span>
          <button onClick={handleIncreaseCount}>+</button>
        </div>
      </div>
    </div>
  );
};
export default Items;
