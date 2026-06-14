import mainImg from '@/assets/images/main.png';
import { ErrorBoundary, Loader } from '@/components';
import { FIRST_PAGE_PAGINATION } from '@/constants';
import { useInfiniteScroll, useLoadCharacters } from '@/hooks';
import { CharacterCard, type FilterValues, FiltersPanel } from '@/widgets';

import styles from './styles.module.scss';

export const CharacterList = () => {
  const {
    characters,
    loading,
    loadingMore,
    hasMore,
    filters,
    setFilters,
    setPage,
    loadMore
  } = useLoadCharacters();

  const sentinelRef = useInfiniteScroll(loadMore);

  const handleFilterChange = (newFilters: FilterValues) => {
    setFilters(newFilters);
    setPage(FIRST_PAGE_PAGINATION);
  };

  return (
    <div className={styles.page}>
      <div className={styles.bigLogo}>
        <img
          src={mainImg}
          alt='Rick and Morty'
          className={styles.mainImg}
        />
      </div>
      <FiltersPanel
        value={filters}
        onChange={handleFilterChange}
      />
      <ErrorBoundary>
        {loading ? (
          <Loader caption='Loading characters...' />
        ) : characters.length === 0 ? (
          <div className={styles.empty}>Characters list is empty</div>
        ) : (
          <>
            <div className={styles.cardList}>
              {characters.map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                />
              ))}
            </div>
            {loadingMore && (
              <Loader
                size='small'
                caption='Loading more characters...'
                className={styles.loadingMore}
              />
            )}
            {hasMore && (
              <div
                ref={sentinelRef}
                className={styles.sentinel}
              />
            )}
          </>
        )}
      </ErrorBoundary>
    </div>
  );
};
