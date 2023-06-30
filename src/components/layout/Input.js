import styled from 'styled-components';

const Input = styled.input`
  margin: 0px 0px 12px 0px;
  border: 1px solid;
  border-color: ${props => (props.inValid ? 'red' : '#e1e2e3')};
  background-color: white;
  width: 100%;
  height: 50px;
  font-size: 16px;
  text-decoration: none;
  border-radius: 5px;
  padding-left: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: ${props => (props.inValid ? 'red' : 'var(--primary-color)')};
    outline: none;
  }
`;

export default Input;
