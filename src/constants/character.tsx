import type { SelectOption } from '@/components/Select/types';
import { StatusDot } from '@/components/StatusDot';
import type { CharacterStatus } from '@/types/character';

export const STATUS_OPTIONS: SelectOption<CharacterStatus>[] = [
  { value: 'Alive', label: 'Alive', icon: <StatusDot status='Alive' /> },
  { value: 'Dead', label: 'Dead', icon: <StatusDot status='Dead' /> },
  { value: 'unknown', label: 'Unknown', icon: <StatusDot status='unknown' /> }
];

export const GENDER_OPTIONS: SelectOption[] = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'genderless', label: 'Genderless' },
  { value: 'unknown', label: 'Unknown' }
];
