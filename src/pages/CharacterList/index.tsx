import { useState } from 'react';

import mainImg from '../../assets/images/main.png';
import { Select } from '../../components/Select';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '../../components/Select/mocks';
import { TextField } from '../../components/TextField';
import styles from './styles.module.scss';

export const CharacterList = () => {
  const [name, setName] = useState('');
  const [formName, setFormName] = useState('');
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
      {/* TODO: для теста */}
      <div className={styles.formTest}>
        <TextField
          variant='underlined'
          value={formName}
          onChange={setFormName}
          placeholder='Rick Sanchez'
        />
      </div>
    </div>
  );
};
