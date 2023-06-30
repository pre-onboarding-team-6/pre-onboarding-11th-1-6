import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { deleteToken } from '../../utils';
import { Button } from '..';
import { PATH } from '../../constants';

const LogoutButton = styled(Button)`
  width: 150px;
  border-radius: 15px;
  background-color: #efefef;
  margin: 0 0 16px 0;
  color: black;
`;

const SignOutButton = () => (
  <Link to={PATH.ROOT} onClick={deleteToken}>
    <LogoutButton>로그아웃</LogoutButton>
  </Link>
);

export default SignOutButton;
