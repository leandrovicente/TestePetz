// @flow

import api from '../services/api';


api.getPosts = (): Promise<Object> =>
  api.get('/posts');

api.getUsers = (id): Promise<Object> =>
  api.get(`/users`);

api.getUser = (id): Promise<Object> =>
  api.get(`/users/${id}`);

api.getPostsByUserId = (id): Promise<Object> =>
  api.get(`/posts/${id}`);

api.deletePostsByUserId = (id): Promise<Object> =>
  axios.delete(api.baseURL + `/posts/${id}`);

export default api;
