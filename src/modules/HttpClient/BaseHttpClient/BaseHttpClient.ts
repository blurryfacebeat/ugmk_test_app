import { HttpClient } from '../HttpClient';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const BaseHttpClient = new HttpClient({
  baseURL: BASE_URL,
});
