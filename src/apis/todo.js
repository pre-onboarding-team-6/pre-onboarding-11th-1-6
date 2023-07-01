import axios from 'axios';
import { getToken } from '../utils';
import { BASE_URL } from '../constants';

const baseURL = `${BASE_URL}/todos`;

const todoAxios = axios.create({
  baseURL,
});

todoAxios.interceptors.request.use(config => {
  const newConfig = config;
  newConfig.headers.Authorization = `Bearer ${getToken()}`;

  return newConfig;
});

todoAxios.interceptors.response.use(
  res => res,
  error => {
    if (error.response.status >= 500) {
      window.location.href = `/error?status=${error.response.status}`;
    }

    return Promise.reject(error);
  }
);

export const getTodos = async () => {
  const { data } = await todoAxios({
    method: 'get',
  });

  return data;
};

export const createTodo = async todo => {
  const { data } = await todoAxios({
    method: 'post',
    data: { todo },
  });

  return data;
};

export const updateTodo = async ({ id, todo, isCompleted }) => {
  todoAxios({
    method: 'put',
    url: `/${id}`,
    data: { todo, isCompleted },
  });
};

export const deleteTodo = async id => {
  await todoAxios({
    method: 'delete',
    url: `/${id}`,
  });
};
