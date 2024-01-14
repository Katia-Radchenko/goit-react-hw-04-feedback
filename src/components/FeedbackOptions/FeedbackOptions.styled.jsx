import styled from '@emotion/styled';

export const Button = styled.button`  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 35px;

  font-style: inherit;
  font-weight: bold;

  color: #ffffff;
  background-color: #22c1c3;

  border: 1px solid #22c1c3;
  border-radius: 4px;

  cursor: pointer;

  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out,
  transform 250ms ease-in-out;

  &:hover {
    border-color: #fdbb2d;
    background-color: #fdbb2d;
  }
`


