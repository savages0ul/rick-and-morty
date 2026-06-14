import { useCallback, useEffect, useRef, useState } from 'react';

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
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [filters, setFilters] = useState<FilterValues>({ name: '' });
  const [page, setPage] = useState(FIRST_PAGE_PAGINATION);
  const [reloadToken, setReloadToken] = useState(0);

  const isFetchingRef = useRef(false);
  const pendingRetryRef = useRef(false);

  const { species, gender, status } = filters;
  const debouncedName = useDebounce(filters.name, DEBOUNCE_DELAY);

  const loadCharacters = useCallback(
    async (signal: AbortSignal) => {
      const isFirstPage = page === FIRST_PAGE_PAGINATION;

      isFetchingRef.current = true;
      pendingRetryRef.current = false;
      if (isFirstPage) setLoading(true);
      else setLoadingMore(true);

      try {
        const { results, info } = await getCharacters(
          { name: debouncedName, species, gender, status, page },
          signal
        );

        setCharacters((prev) =>
          isFirstPage ? results : [...prev, ...results]
        );
        setHasMore(info.next !== null);
      } catch (error) {
        if (axios.isCancel(error)) return;

        if (isFirstPage) setCharacters([]);
        else pendingRetryRef.current = true;

        toast.error(getErrorMessage(error));
      } finally {
        isFetchingRef.current = false;
        setLoading(false);
        setLoadingMore(false);
      }
    },
    // reloadToken форсирует повторную загрузку той же страницы после ошибки
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedName, species, gender, status, page, reloadToken]
  );

  useEffect(() => {
    const controller = new AbortController();

    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadCharacters(controller.signal);

    return () => controller.abort();
  }, [loadCharacters]);

  const loadMore = useCallback(() => {
    if (isFetchingRef.current) return;

    if (pendingRetryRef.current) {
      setReloadToken((prev) => prev + 1);
      return;
    }

    if (hasMore) setPage((prev) => prev + 1);
  }, [hasMore]);

  return {
    characters,
    loading,
    loadingMore,
    hasMore,
    filters,
    setFilters,
    setPage,
    loadMore
  };
}
