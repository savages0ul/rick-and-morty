import { useState } from 'react';

import mainImg from '@/assets/images/main.png';
import { Select, TextField } from '@/components';
import { GENDER_OPTIONS, STATUS_OPTIONS } from '@/constants/character';
import { MOCK_CHARACTERS } from '@/mocks/characters';
import { SPECIES_OPTIONS } from '@/mocks/filterOptions';
import { CharacterCard } from '@/widgets/CharacterCard';

import styles from './styles.module.scss';

export const CharacterList = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [status, setStatus] = useState<string>();

  return (
    <div className={styles.page}>
      <div className={styles.bigLogo}>
        <img
          src={mainImg}
          alt='Rick and Morty'
          className={styles.mainImg}
        />
      </div>
      <div className={styles.filters}>
        <TextField
          variant='bordered'
          value={name}
          onChange={setName}
          placeholder='Filter by name...'
        />
        <Select
          placeholder='Species'
          options={SPECIES_OPTIONS}
          value={species}
          onChange={setSpecies}
        />
        <Select
          placeholder='Gender'
          options={GENDER_OPTIONS}
          value={gender}
          onChange={setGender}
        />
        <Select
          placeholder='Status'
          options={STATUS_OPTIONS}
          value={status}
          onChange={setStatus}
        />
      </div>
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
