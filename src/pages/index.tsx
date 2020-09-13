import React from 'react';
import Chat from './chat';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.app}>
      <Chat />
    </div>
  );
};
