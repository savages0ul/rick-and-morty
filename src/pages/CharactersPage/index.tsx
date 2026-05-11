import mainImg from '../../assets/images/main.png';
import styles from './styles.module.scss';

export const CharactersPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.bigLogo}>
        <img
          src={mainImg}
          alt='Rick and Morty'
          className={styles.mainImg}
        />
      </div>
    </div>
  );
};
