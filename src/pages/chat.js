import React from 'react';
import { useParams } from 'umi';
import { Button } from 'antd';
import { NavLink } from 'umi';
import styles from './chat.less';

export default function Chat() {
  const { result } = useParams();
  return (
    <div className={styles.chat}>
      <span>{result}</span>
      <NavLink to="/tags">
        <Button type="primary" shape="round" size="large">
          I'm feeling ...
        </Button>
      </NavLink>
    </div>
  );
}
