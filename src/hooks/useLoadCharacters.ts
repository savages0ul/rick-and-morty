import { useCallback, useEffect, useState } from 'react';

import axios from 'axios';
import toast from 'react-hot-toast';

import { getCharacters } from '@/api';
import { DEBOUNCE_DELAY, FIRST_PAGE_PAGINATION } from '@/constants';
import { getErrorMessage } from '@/helpers';
import type { Character } from '@/types';
import type { FilterValues } from '@/widgets';

import { useDebounce } from './useDebounce';

export function useLoadCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FilterValues>({ name: '' });
  const [page, setPage] = useState(FIRST_PAGE_PAGINATION);

  const { species, gender, status } = filters;
  const debouncedName = useDebounce(filters.name, DEBOUNCE_DELAY);

  const loadCharacters = useCallback(
    (signal: AbortSignal) => {
      setLoading(true);

      return getCharacters(
        { name: debouncedName, species, gender, status, page },
        signal
      )
        .then((data) => {
          setCharacters(data);
          setLoading(false);
        })
        .catch((error) => {
          if (axios.isCancel(error)) return;

          setCharacters([]);
          setLoading(false);
          toast.error(getErrorMessage(error));
        });
    },
    [debouncedName, species, gender, status, page]
  );

  useEffect(() => {
    const controller = new AbortController();

    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadCharacters(controller.signal);

    return () => controller.abort();
  }, [loadCharacters]);

  return {
    characters,
    loading,
    filters,
    setFilters,
    setPage
  };
}
