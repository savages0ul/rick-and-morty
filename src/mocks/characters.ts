// TODO: удалить файл после интеграции с бэком
import characterImg from '@/assets/images/character.png';
import type { Character } from '@/types/character';

export const MOCK_CHARACTERS: Character[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth', url: '' },
    location: { name: 'Earth', url: '' },
    image: characterImg,
    episode: [],
    url: '',
    created: ''
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth', url: '' },
    location: { name: 'Earth', url: '' },
    image: characterImg,
    episode: [],
    url: '',
    created: ''
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'unknown',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: { name: 'Earth', url: '' },
    location: { name: 'Earth', url: '' },
    image: characterImg,
    episode: [],
    url: '',
    created: ''
  }
];
