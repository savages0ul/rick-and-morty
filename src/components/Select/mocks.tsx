// TODO: удалить файл после интеграции с бэком
import { StatusDot } from '../StatusDot';
import type { SelectOption } from './types';

export const SPECIES_OPTIONS: SelectOption[] = [
  { value: 'human', label: 'Human' },
  { value: 'alien', label: 'Alien' },
  { value: 'humanoid', label: 'Humanoid' },
  { value: 'animal', label: 'Animal' },
  { value: 'robot', label: 'Robot' }
];

export const GENDER_OPTIONS: SelectOption[] = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'genderless', label: 'Genderless' },
  { value: 'unknown', label: 'Unknown' }
];

export const STATUS_OPTIONS: SelectOption[] = [
  { value: 'alive', label: 'Alive', icon: <StatusDot status='alive' /> },
  { value: 'dead', label: 'Dead', icon: <StatusDot status='dead' /> },
  { value: 'unknown', label: 'Unknown', icon: <StatusDot status='unknown' /> }
];
