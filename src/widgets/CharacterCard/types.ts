import type { CharacterStatus } from '@/types/character';

export interface EditableFields {
  name: string;
  locationName: string;
  status: CharacterStatus;
}
