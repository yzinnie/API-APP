import axios from 'axios';
import { useEffect, useState } from 'react';
import News from '../pages/News';

const NewsAPI = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = '/v1/search/news?query=강아지';

  useEffect(() => {
    axios
      .get(API_URL, {
        headers: {
          'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET,
        },
      })
      .then((data) => {
        // console.log(data);
        setNews(data.data.items);
        setLoading(false);
      })
      .catch((error) => console.log('error:', error));
  }, []);
  // console.log(news);

  return (
    <div className="NewsAPI">
      {loading ? (
        <div>Loading...🐾</div>
      ) : (
        <ul className="result-list">
          {news &&
            news.map((item) => (
              <li key={item.link}>
                <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                <h4 dangerouslySetInnerHTML={{ __html: item.description }}></h4>
                <a href="{item.link}">{item.link}</a>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default NewsAPI;
