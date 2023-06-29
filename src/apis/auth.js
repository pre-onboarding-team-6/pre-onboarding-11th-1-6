import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop/auth',
  method: 'post',
});

export const signUp = async ({ email, password }) => {
  await authAxios({ url: '/signup', data: { email, password } });
};

export const signIn = async ({ email, password }) => {
  const { data } = await authAxios({ url: '/signin', data: { email, password } });

  return data;
};
