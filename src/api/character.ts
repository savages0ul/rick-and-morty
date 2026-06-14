import axios from 'axios';

import type { Character, CharactersResponse } from '@/types';
import type { FilterValues } from '@/widgets';

import { apiClient } from './axiosInstance';

export interface GetCharactersParams extends FilterValues {
  page: number;
}

export const getCharacters = async (
  params: GetCharactersParams,
  signal?: AbortSignal
): Promise<Character[]> => {
  try {
    const { data } = await apiClient.get<CharactersResponse>('/character', {
      params: {
        page: params.page,
        name: params.name || undefined,
        species: params.species,
        gender: params.gender,
        status: params.status
      },
      signal
    });

    return data.results.map((character) => ({
      ...character,
      status: character.status.toLowerCase() as Character['status']
    }));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return [];
    }

    throw error;
  }
};
