import { FC } from 'react';

import styles from './Header.module.css';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => (
  <h1 className={styles.header}>{title}</h1>
);

export default Header;
