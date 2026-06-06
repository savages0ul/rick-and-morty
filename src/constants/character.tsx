import { StatusDot } from '@/components';
import type { SelectOption } from '@/components';
import type { CharacterStatus } from '@/types/character';

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
