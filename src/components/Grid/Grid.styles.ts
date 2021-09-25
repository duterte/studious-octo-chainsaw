import styled, { StyledComponent } from 'styled-components';

export const Wrapper: StyledComponent<'div', any, {}, never> = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    color: var(--medGrey);
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content: StyledComponent<'div', any, {}, never> = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
