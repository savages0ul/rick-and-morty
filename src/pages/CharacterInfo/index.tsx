import { useNavigate } from 'react-router-dom';

import ArrowIcon from '../../assets/icons/arrow.svg?react';
import styles from './styles.module.scss';

export const CharacterInfo = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <button
        className={styles.backButton}
        onClick={() => navigate(-1)}
      >
        <ArrowIcon />
        GO BACK
      </button>
    </div>
  );
};
