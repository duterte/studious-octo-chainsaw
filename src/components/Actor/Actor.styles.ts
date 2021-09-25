import styled, { StyledComponent } from 'styled-components';

export const Wrapper: StyledComponent<'div', any, {}, never> = styled.div`
  color: var(--white);
  background: var(--darkGrey);
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  h3 {
    margin: 10px 0 0 0;
  }

  p {
    margin: 5px 0;
  }
`;
export const Image: StyledComponent<'img', any, {}, never> = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  border-radius: 50px;
`;
