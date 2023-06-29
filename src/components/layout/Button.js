import styled from 'styled-components';

const Button = styled.button(({ w, h, bg, c, mg, fz, border, borderRadius }) => ({
  width: w ?? '100%',
  height: h ?? '50px',
  fontSize: fz ?? '16px',
  color: c ?? 'white',
  backgroundColor: bg ?? 'var(--primary-color)',
  margin: mg ?? '0px 0px 0px 0px',
  border: border ?? 'none',
  borderRadius: borderRadius ?? '25px',
  fontWeight: 'bold',
  ':disabled': {
    backgroundColor: 'rgb(204,204,204)',
    color: 'rgb(100,100,100)',
    cursor: 'default',
  },
  cursor: 'pointer',
  transition: 'all .3s',
}));

export default Button;
