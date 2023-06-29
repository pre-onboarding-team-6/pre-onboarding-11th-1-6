import axios from 'axios';
import { BASE_URL, PATH } from '../constants';

const baseURL = `${BASE_URL}/auth`;

const authAxios = axios.create({
  baseURL,
  method: 'post',
});

export const signUp = async ({ email, password }) => {
  await authAxios({ url: PATH.SIGN_UP, data: { email, password } });
};

export const signIn = async ({ email, password }) => {
  const { data } = await authAxios({ url: PATH.SIGN_IN, data: { email, password } });

  return data;
};
