import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Items from '../components/Items';
import Footer from '../components/Footer';
import axios from 'axios';

export const Loading = () => {
  return (
    <div>
      목록을 <br />
      불러오고 있습니다.
    </div>
  );
};

const Order = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchItems = async () => {
    const { data } = await axios.get('http://localhost:3001/items');
    setItems(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="Order">
      <Header />
      <div>
        {isLoading === true ? (
          <Loading />
        ) : (
          <>
            {items?.map((item) => (
              <Items
                key={item.id}
                item={item}
                item_name={item.name}
                item_event={item.event}
                item_count={item.materialType}
              />
            ))}
          </>
        )}
      </div>
      <Items />
      <Footer isLoading={isLoading} />
    </div>
  );
};
export default Order;
