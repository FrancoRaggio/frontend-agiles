import Repository from "../Repository";
const resource = "/auth";
export default {
  auth(DTO) {
    console.log(DTO);
    return Repository.post(`${resource}`, DTO);
  },
  recoverPassword(email) {
    return Repository.get(`${resource}/recover/${email}`);
  },
};
