import React, { useState, useEffect, useRef } from 'react';

import SearchIcon from '../../images/search-icon.svg';
import { Wrapper, Content } from './SearchBar.styles';

interface Props {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
  const [state, setState] = useState<string>('');
  const initial = useRef<boolean>(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={SearchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setState(e.currentTarget.value)
          }
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
