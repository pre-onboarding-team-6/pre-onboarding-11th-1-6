import { Link } from 'react-router-dom';
import { deleteToken } from '../../utils';
import { Button } from '..';

const SignOutButton = () => (
  <Link to="/" onClick={deleteToken}>
    <Button w="150px" borderRadius="15px" bg="#EFEFEF" mg="0px 0px 16px 0px" c="black" type="button">
      로그아웃
    </Button>
  </Link>
);

export default SignOutButton;
