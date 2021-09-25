import { useState, useEffect } from 'react';
import API, { Movies } from '../API';
import { isPersistedState } from '../helpers';

const initialState: Movies = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState<Movies>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const fetchMovies = async (
    page: number,
    searchTerm: string = ''
  ): Promise<void> => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  // Initial and Search
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState('homeState');

      if (sessionState) {
        setState(sessionState);
        return;
      }
    }
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // Load More

  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state]);

  // Write to sessionStorage

  useEffect(() => {
    if (!searchTerm) {
      window.sessionStorage.setItem('homeState', JSON.stringify(state));
    }
  }, [searchTerm, state]);

  return {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  };
};
