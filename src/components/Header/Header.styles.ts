import styled, { StyledComponent } from 'styled-components';

export const Wrapper: StyledComponent<'div', any, {}, never> = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const LogiImg: StyledComponent<'img', any, {}, never> = styled.img`
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg: StyledComponent<'img', any, {}, never> = styled.img`
  width: 100px;
  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
