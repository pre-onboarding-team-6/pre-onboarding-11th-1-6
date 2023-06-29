import { Link } from 'react-router-dom';
import { deleteToken } from '../../utils';

const SignOutButton = () => (
  <Link to={'/'} onClick={deleteToken}>
    <button type="button">로그아웃</button>
  </Link>
);

export default SignOutButton;
