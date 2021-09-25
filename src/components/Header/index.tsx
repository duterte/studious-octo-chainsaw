import { Link } from 'react-router-dom';

import { Wrapper, Content, LogiImg, TMDBLogoImg } from './Header.styles';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

const Header: React.FC = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogiImg src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
