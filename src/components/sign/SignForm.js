import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { validate } from '../../utils';
import { useAuth } from '../../hooks';
import { Input, Button, InvisibleLabel } from '..';
import { PATH } from '../../constants';

const formConfig = {
  signin: {
    formTypeText: '로그인',
    dataTestId: 'signin-button',
    link: PATH.SIGN_UP,
    linkText: '처음 오셨나요?',
  },
  signup: {
    formTypeText: '회원가입',
    dataTestId: 'signup-button',
    link: PATH.SIGN_IN,
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

const SubmitButton = styled(Button)`
  margin: 6px 0 0 0;
`;

const ChangeFormButton = styled(Button)`
  margin: 5px 0px;
  background-color: white;
  color: Dodgerblue;
`;

const SignInput = styled(Input)`
  margin: 12px 0 6px 0;
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
        <InvisibleLabel htmlFor="email">email input</InvisibleLabel>
        <SignInput
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleValueChange}
          data-testid="email-input"
          htmlFor="email"
          placeholder="이메일을 입력해주세요."
          inValid={formValues.email && !emailValid}
        />
        {formValues.email && !emailValid && <Warning>아이디는 @를 포함해야합니다.</Warning>}
        <InvisibleLabel htmlFor="password">password input</InvisibleLabel>
        <SignInput
          id="password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleValueChange}
          data-testid="password-input"
          placeholder="비밀번호를 입력해주세요."
          inValid={formValues.password && !passwordValid}
        />
        {formValues.password && !passwordValid && <Warning>비밀번호는 8자 이상이여야 합니다.</Warning>}
        <SubmitButton type="submit" data-testid={formConfig[formType].dataTestId} disabled={!allValid}>
          {formConfig[formType].formTypeText}
        </SubmitButton>
      </Form>
      <Link to={formConfig[formType].link}>
        <ChangeFormButton>{formConfig[formType].linkText}</ChangeFormButton>
      </Link>
    </>
  );
};

export default SignForm;
