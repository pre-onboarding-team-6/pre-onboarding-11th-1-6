import axios from 'axios';
import { getToken } from '../utils';

const todoAxios = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop/todos',
});

export const getTodos = async () => {
  const { data } = await todoAxios({
    method: 'get',
    headers: { Authorization: `Bearer ${getToken()}` },
  });

  return data;
};

export const createTodo = async todo => {
  const { data } = await todoAxios({
    method: 'post',
    data: { todo },
    headers: { Authorization: `Bearer ${getToken()}` },
  });

  return data;
};

export const updateTodo = async ({ id, todo, isCompleted }) => {
  todoAxios({
    method: 'put',
    url: `/${id}`,
    data: { todo, isCompleted },
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

export const deleteTodo = async id => {
  await todoAxios({
    method: 'delete',
    url: `/${id}`,
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};
