import { Select, TextField } from '@/components';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '@/constants/character';

import styles from './styles.module.scss';
import type { FilterValues } from './types';

interface Props {
  value: FilterValues;
  onChange: (value: FilterValues) => void;
}

export const FiltersPanel = ({ value, onChange }: Props) => {
  return (
    <div className={styles.panel}>
      <TextField
        variant='bordered'
        value={value.name}
        onChange={(name) => onChange({ ...value, name })}
        placeholder='Filter by name...'
      />
      <Select
        placeholder='Species'
        options={SPECIES_OPTIONS}
        value={value.species}
        onChange={(species) => onChange({ ...value, species })}
      />
      <Select
        placeholder='Gender'
        options={GENDER_OPTIONS}
        value={value.gender}
        onChange={(gender) => onChange({ ...value, gender })}
      />
      <Select
        placeholder='Status'
        options={STATUS_OPTIONS}
        value={value.status}
        onChange={(status) => onChange({ ...value, status })}
      />
    </div>
  );
};
