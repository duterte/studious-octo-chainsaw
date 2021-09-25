import styled, { StyledComponent } from 'styled-components';

export const Wrapper: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: var(--medGrey);
  color: var(--white);
`;

export const Content: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;
  a {
    text-decoration: none;
  }
  span {
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 10px;

    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;
