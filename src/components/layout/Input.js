import styled from 'styled-components';
import InvisibleLabel from './InvisibleLabel';

const StyledInput = styled.input(({ w, mg, c, invalid }) => ({
  margin: mg ?? '0px 0px 12px 0px',
  border: '1px solid',
  borderColor: invalid ? 'red' : '#e1e2e3',
  backgroundColor: c ?? 'white',
  width: w ?? '100%',
  height: '50px',
  fontSize: '16px',
  textDecoration: '`none',
  borderRadius: '5px',
  paddingLeft: '16px',
  boxSizing: 'border-box',
  ':focus': {
    borderColor: invalid ? 'red' : 'var(--primary-color)',
    outline: 'none',
  },
}));

const Input = ({ ...rest }, { w, m, c, htmlFor, labelText, invalid }) => (
  <>
    <InvisibleLabel htmlFor={htmlFor}>{labelText}</InvisibleLabel>
    <StyledInput w={w} m={m} c={c} invalid={invalid} {...rest} />
  </>
);

export default Input;
