import React, { useState } from 'react';
import { List, Image, Input } from 'antd';
import axios from 'axios';
import styles from './index.less';

export default () => {
  const [keyword, setKeyword] = useState('kitten');
  const [data, setData] = useState({ photo: [], total: 100, perpage: 100 });
  const [page, setPage] = useState(1);
  const onSearch = async (current = page) => {
    const result = await axios(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3e7cc266ae2b0e0d78e279ce8e361736&format=json&nojsoncallback=1&safe_search=1&page=${current}&text=${keyword}`,
    );
    setData(result.data.photos);
  };
  return (
    <List
      header={
        <Input.Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          onSearch={() => onSearch(page)}
        />
      }
      grid={{ gutter: 16, column: 4 }}
      dataSource={data.photo}
      pagination={{
        current: page,
        pageSize: data.perpage,
        pageSizeOptions: [data.perpage],
        total: data.total,
        onChange: current => {
          setPage(current);
          onSearch(current);
        },
      }}
      renderItem={item => (
        <List.Item>
          <Image
            src={`http://farm${item.farm}.static.flickr.com/${item.server}/${item.id}_${item.secret}.jpg `}
          />
        </List.Item>
      )}
    />
  );
};
