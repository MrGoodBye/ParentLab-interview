import React from 'react';
import { Button } from 'antd';
import styles from './tags.less';
import 'animate.css';
import { NavLink } from 'umi';

export default function Tags() {
  return (
    <div
      className={`animate__animated animate__fadeInUp animate__faster ${styles.tags}`}
    >
      <NavLink to={`/slider/Happy`}>
        <Button type="primary" shape="round" size="large">
          Happy
        </Button>
      </NavLink>
    </div>
  );
}
