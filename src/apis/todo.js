import axios from 'axios';
import { getToken } from '../utils';
import { BASE_URL } from '../constants';

const baseURL = `${BASE_URL}/todos`;

const todoAxios = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${getToken()}` }
});

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
