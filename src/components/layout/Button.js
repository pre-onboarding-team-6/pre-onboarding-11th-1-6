import styled from 'styled-components';

const Button = styled.button.attrs(({ type }) => ({
  type: type || 'button',
}))`
  width: 100%;
  height: 50px;
  font-size: 16px;
  color: white;
  background-color: var(--primary-color);
  margin: 0;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:disabled {
    background-color: rgb(204, 204, 204);
    color: rgb(100, 100, 100);
    cursor: default;
  }
`;

export default Button;
