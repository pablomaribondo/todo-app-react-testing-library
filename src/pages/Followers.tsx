import { FC } from 'react';
import { Container } from 'react-bootstrap';

import FollowersComponent from '../components/Followers/Followers';

const Followers: FC = () => {
  return (
    <Container>
      <FollowersComponent />
    </Container>
  );
};

export default Followers;
