import Repository from "../Repository";
const resource = "/post";
export default {
  getPosts() {
    return Repository.get(`/posts`);
  },
  getPost(id) {
    return Repository.get(`${resource}/${id}`);
  },
  setPost(data) {
    return Repository.post(`${resource}`, data );
  },
  
};