import LogoIcon from '../../assets/icons/logo.svg?react';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <LogoIcon className={styles.logo} />
      </div>
    </header>
  );
};
