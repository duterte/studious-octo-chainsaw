import React, { useContext } from 'react';

import Thumb from '../Thumb';
import Rate from '../Rate';
import { Wrapper, Content, Text } from './MovieInfo.styles';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.jpg';
import { Context } from '../../context';
import API from '../../API';
import { MovieState } from '../../hooks/useMovieFetch';

interface Props {
  movie: MovieState;
}

const MovieInfo: React.FC<Props> = ({ movie }) => {
  const user = useContext(Context)[0];
  const handleRating = async (value: number) => {
    await API.rateMovie(user.sessionId, movie.id, value);
  };
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
            {Boolean(user.sessionId) && (
              <div>
                <p>Rate Movie</p>
                <Rate callback={handleRating} />
              </div>
            )}
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
