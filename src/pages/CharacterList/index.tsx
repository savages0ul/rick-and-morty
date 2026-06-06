import { useState } from 'react';

import mainImg from '@/assets/images/main.png';
import { MOCK_CHARACTERS } from '@/mocks/characters';
import { CharacterCard, FiltersPanel } from '@/widgets';
import type { FilterValues } from '@/widgets';

import styles from './styles.module.scss';

export const CharacterList = () => {
  const [filters, setFilters] = useState<FilterValues>({ name: '' });

  return (
    <div className={styles.page}>
      <div className={styles.bigLogo}>
        <img
          src={mainImg}
          alt='Rick and Morty'
          className={styles.mainImg}
        />
      </div>
      <FiltersPanel
        value={filters}
        onChange={setFilters}
      />
      <div className={styles.cardList}>
        {MOCK_CHARACTERS.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
          />
        ))}
      </div>
    </div>
  );
};
