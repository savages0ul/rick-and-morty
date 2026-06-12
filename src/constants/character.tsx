import { StatusDot } from '@/components';
import type { SelectOption } from '@/components';
import type { CharacterStatus } from '@/types';

export const STATUS_OPTIONS: SelectOption<CharacterStatus>[] = [
  { value: 'alive', label: 'Alive', icon: <StatusDot status='alive' /> },
  { value: 'dead', label: 'Dead', icon: <StatusDot status='dead' /> },
  { value: 'unknown', label: 'Unknown', icon: <StatusDot status='unknown' /> }
];

export const GENDER_OPTIONS: SelectOption[] = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'genderless', label: 'Genderless' },
  { value: 'unknown', label: 'Unknown' }
];

export const SPECIES_OPTIONS: SelectOption[] = [
  { value: 'human', label: 'Human' },
  { value: 'alien', label: 'Alien' },
  { value: 'humanoid', label: 'Humanoid' },
  { value: 'animal', label: 'Animal' },
  { value: 'robot', label: 'Robot' },
  { value: 'cronenberg', label: 'Cronenberg' },
  { value: 'disease', label: 'Disease' },
  { value: 'unknown', label: 'Unknown' }
];
