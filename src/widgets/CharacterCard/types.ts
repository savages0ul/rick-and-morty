import type { CharacterStatus } from '@/types';

export interface EditableFields {
  name: string;
  locationName: string;
  status: CharacterStatus;
}
