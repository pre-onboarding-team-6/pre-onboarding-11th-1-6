import styled from 'styled-components';
import InvisibleLabel from './InvisibleLabel';

const StyledInput = styled.input(({ w, mg, c }) => ({
  margin: mg ?? '0px 0px 12px 0px',
  border: '1px solid #e1e2e3',
  borderBottom: '1px solid #e1e2e3',
  backgroundColor: c ?? 'white',
  width: w ?? '100%',
  height: '50px',
  fontSize: '16px',
  textDecoration: '`none',
  borderRadius: '5px',
  paddingLeft: '16px',
  boxSizing: 'border-box',
  ':focus': {
    border: '1px solid var(--primary-color)',
    outline: 'none',
  },
}));

const Input = ({ ...rest }, { w, m, c, htmlFor, labelText }) => (
  <>
    <InvisibleLabel htmlFor={htmlFor}>{labelText}</InvisibleLabel>
    <StyledInput w={w} m={m} c={c} {...rest} />
  </>
);

export default Input;
