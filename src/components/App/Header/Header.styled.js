import styled from '@emotion/styled';

export const Title = styled.h1`
  color: #fff;
  font-size: 46px;
  font-weight: 900;
  letter-spacing: 2px;
  padding-bottom: 100px;
  padding-top: 100px;
  text-align: center;
  text-transform: uppercase;
`;

export const TitleColor = styled.span`
  color: #a9a9a9;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 270px;
  height: 40px;
  margin-bottom: 50px;
  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  font-family: inherit;
  border: none;
  cursor: pointer;
  transition: background-color var(--main-hover-animation);
  :hover,
  :focus {
    background-color: var(--second-bg-color);
  }
`;

export const ButtonText = styled.span`
  margin-right: 10px;
`;
