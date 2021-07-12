import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Follower } from '../../types';
import styles from './FollowersList.module.css';

const FollowersList: FC = () => {
  const [followers, setFollowers] = useState<Follower[]>([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    const { data } = await axios.get('https://randomuser.me/api/?results=5');

    setFollowers(data.results);
  };

  return (
    <div className={styles['followerslist-container']}>
      <div>
        {followers.map(follower => (
          <div key={follower.login.uuid} className={styles['follower-item']}>
            <img src={follower.picture.large} />
            <div className={styles['followers-details']}>
              <div className={styles['follower-item-name']}>
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles['follower-footer']}>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default FollowersList;
