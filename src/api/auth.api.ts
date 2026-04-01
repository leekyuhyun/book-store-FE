import type { User } from '../models/user.model';
import { httpClient } from './http';

export const signup = async (userData: User) => {
  const response = await httpClient.post('/signup', userData);
  return response.data;
};
