import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { validate } from '../../utils';
import { useAuth } from '../../hooks';

const formConfig = {
  signin: {
    formTypeText: '로그인',
    dataTestId: 'signin-button',
    link: '/signup',
    linkText: '처음 오셨나요?',
  },
  signup: {
    buttonText: '회원가입',
    dataTestId: 'signup-button',
    link: '/signin',
    linkText: '이미 회원이신가요?',
  },
};

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const SignForm = ({ formType }) => {
  const { formValues, error, handleValueChange, handleSignInSubmit, handleSignUpSubmit } = useAuth();
  const [emailValid, passwordValid] = validate(formValues);

  const allValid = emailValid && passwordValid;
  const signIn = formType === 'signin';

  if (error) return <div>error</div>;

  return (
    <>
      <h1>{formConfig[formType].formTypeText.toUpperCase()}</h1>
      <Form onSubmit={signIn ? handleSignInSubmit : handleSignUpSubmit}>
        <label htmlFor="email">email</label>
        <input
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleValueChange}
          data-testid="email-input"
        />
        {formValues.email && !emailValid && <span>아이디는 @를 포함해야합니다.</span>}
        <label htmlFor="password">password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleValueChange}
          data-testid="password-input"
        />
        {formValues.password && !passwordValid && <span>비밀번호는 8자 이상이여야 합니다.</span>}
        <button data-testid={formConfig[formType].dataTestId} disabled={!allValid}>
          {formConfig[formType].formTypeText}
        </button>
      </Form>
      <Link to={formConfig[formType].link}>{formConfig[formType].linkText}</Link>
    </>
  );
};

export default SignForm;
