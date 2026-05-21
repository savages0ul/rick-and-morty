import { useState } from 'react';

import mainImg from '../../assets/images/main.png';
import { Select } from '../../components/Select';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '../../components/Select/mocks';
import styles from './styles.module.scss';

export const CharacterList = () => {
  const [species, setSpecies] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [status, setStatus] = useState<string>();

  const [speciesSmall, setSpeciesSmall] = useState<string>();
  const [genderSmall, setGenderSmall] = useState<string>();
  const [statusSmall, setStatusSmall] = useState<string>();

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
      {/* TODO: для теста */}
      <div className={styles.filtersSmall}>
        <Select
          size='small'
          placeholder='Species'
          options={SPECIES_OPTIONS}
          value={speciesSmall}
          onChange={setSpeciesSmall}
        />
        <Select
          size='small'
          placeholder='Gender'
          options={GENDER_OPTIONS}
          value={genderSmall}
          onChange={setGenderSmall}
        />
        <Select
          size='small'
          placeholder='Status'
          options={STATUS_OPTIONS}
          value={statusSmall}
          onChange={setStatusSmall}
        />
      </div>
    </div>
  );
};
