import axios from 'axios';

const baseURL = 'https://frontend-test-api.stk8s.66bit.ru/api';

export const api = axios.create({
  baseURL,
});
