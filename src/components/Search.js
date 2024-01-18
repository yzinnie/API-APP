import axios from 'axios';
import { useEffect, useState } from 'react';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const Search = () => {
  // const [articles, setArticles] = useState(null);

  // const apiGet = async (type, param) => {
  //   const apiURL =
  //     'https://openapi.naver.com/v1/search/' + type + '?query=' + param;
  //   const res = await fetch(apiURL, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-Naver-Client-Id': `${CLIENT_ID}`,
  //       'X-Naver-Client-Secret': `${CLIENT_SECRET}`,
  //     },
  //   });
  //   res.json().then((data) => {
  //     setArticles(data.items);
  //   });
  // };

  // useEffect(() => {
  //   apiGet('news', '강아지');
  // }, []);

  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default Search;
