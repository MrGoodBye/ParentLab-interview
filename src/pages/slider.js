import React, { useState } from 'react';
import { Slider, Button } from 'antd';
import 'animate.css';
import { NavLink } from 'umi';
import styles from './slider.less';
import { useParams } from 'umi';

export default function MySlider() {
  const { tag } = useParams();
  const [num, setNum] = useState(72);
  return (
    <div
      className={`animate__animated animate__fadeIn animate__faster ${styles.slider}`}
    >
      <Slider
        step={1}
        value={num}
        onChange={value => {
          setNum(value);
        }}
        vertical
      />
      <NavLink to={`/chat/${tag} ${num}`}>
        <Button type="primary" shape="round" size="large">
          {tag} {num}%
        </Button>
      </NavLink>
    </div>
  );
}
