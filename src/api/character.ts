import axios from 'axios';

import type { Character, CharactersResponse } from '@/types';
import type { FilterValues } from '@/widgets';

import { apiClient } from './axiosInstance';

export interface GetCharactersParams extends FilterValues {
  page: number;
}

export interface GetCharactersResult {
  results: Character[];
  info: CharactersResponse['info'];
}

const EMPTY_INFO: CharactersResponse['info'] = {
  count: 0,
  pages: 0,
  next: null,
  prev: null
};

export const getCharacters = async (
  params: GetCharactersParams,
  signal?: AbortSignal
): Promise<GetCharactersResult> => {
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

    return {
      results: data.results.map((character) => ({
        ...character,
        status: character.status.toLowerCase() as Character['status']
      })),
      info: data.info
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return { results: [], info: EMPTY_INFO };
    }

    throw error;
  }
};
