import { useState, useEffect } from 'react';
import API, { Movie, Cast, Crew } from '../API';
import { isPersistedState } from '../helpers';

export interface MovieState extends Movie {
  actors: Cast[];
  directors: Crew[];
}

export const useMovieFetch = (movieId: number) => {
  const [state, setState] = useState<MovieState>({} as MovieState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const movie: Movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const directors = credits.crew.filter(
          (member) => member.job === 'Director'
        );
        setState({ ...movie, actors: credits.cast, directors });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(movieId.toString());

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchData();
  }, [movieId]);

  useEffect(() => {
    window.sessionStorage.setItem(movieId.toString(), JSON.stringify(state));
  }, [movieId, state]);

  return {
    state,
    loading,
    error,
  };
};
