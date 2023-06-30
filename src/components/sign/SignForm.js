import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { validate } from '../../utils';
import { useAuth } from '../../hooks';
import { Input, Button } from '..';
import { DATATESTID } from '../../constants';

const formConfig = {
  signin: {
    formTypeText: '로그인',
    dataTestId: DATATESTID.SIGN_IN_BTN,
    link: '/signup',
    linkText: '처음 오셨나요?',
  },
  signup: {
    formTypeText: '회원가입',
    dataTestId: DATATESTID.SIGN_UP_BTN,
    link: '/signin',
    linkText: '이미 회원이신가요?',
  },
};

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Warning = styled.span`
  font-size: 14px;
  color: red;
  padding-left: 3px;
`;

const SignForm = ({ formType }) => {
  const { formValues, error, handleValueChange, handleSignInSubmit, handleSignUpSubmit } = useAuth();
  const [emailValid, passwordValid] = validate(formValues);

  const allValid = emailValid && passwordValid;
  const signIn = formType === 'signin';

  if (error)
    return (
      <div>
        {error}
        <p>{error.response.data.message}</p>
      </div>
    );

  return (
    <>
      <h1>{formConfig[formType].formTypeText}</h1>
      <Form onSubmit={signIn ? handleSignInSubmit : handleSignUpSubmit}>
        <Input
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleValueChange}
          data-testid={DATATESTID.EMAIL_INPUT}
          labelText="email"
          htmlFor="email"
          placeholder="이메일을 입력해주세요."
          mg="12px 0 6px 0"
          invalid={formValues.email && !emailValid}
        />
        {formValues.email && !emailValid && <Warning>아이디는 @를 포함해야합니다.</Warning>}
        <Input
          id="password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleValueChange}
          data-testid={DATATESTID.PASSWORD_INPUT}
          labelText="password"
          htmlFor="password"
          placeholder="비밀번호를 입력해주세요."
          mg="6px 0 6px 0 "
          invalid={formValues.password && !passwordValid}
        />
        {formValues.password && !passwordValid && <Warning>비밀번호는 8자 이상이여야 합니다.</Warning>}
        <Button data-testid={formConfig[formType].dataTestId} disabled={!allValid} mg="6px 0 0 0">
          {formConfig[formType].formTypeText}
        </Button>
      </Form>
      <Link to={formConfig[formType].link}>
        <Button mg="5px 0px" bg="white" c="Dodgerblue">
          {formConfig[formType].linkText}
        </Button>
      </Link>
    </>
  );
};

export default SignForm;
