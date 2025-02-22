import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 2134;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const addTodo = (data: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', data);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const updateTodo = ({ id, ...todo }: Todo) => {
  return client.patch<Todo>(`/todos/${id}`, todo);
};
