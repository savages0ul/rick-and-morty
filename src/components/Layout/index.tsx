import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './styles.module.scss';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
