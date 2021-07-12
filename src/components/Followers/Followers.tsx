import { FC } from 'react';

import FollowersList from '../FollowersList/FollowersList';
import Header from '../Header/Header';
import styles from './Followers.module.css';

const Followers: FC = () => {
  return (
    <div className={styles.followers}>
      <Header title="Followers" />
      <FollowersList />
    </div>
  );
};

export default Followers;
