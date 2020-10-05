import axios from "axios";
const baseURL = "http://3.13.222.206:8000/api";
const repository = axios.create({
  baseURL,
});
let user = JSON.parse(localStorage.getItem("user"));
const token = user?.token ? "Bearer " + user?.token : null;
if (token) {
  repository.defaults.headers.common["Authorization"] = token;
}
repository.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
function removeSidebars() {
  const sidebars = document.getElementsByClassName("vs-content-sidebar");
  sidebars.forEach((sidebar) => {
    sidebar.remove();
  });
}
repository.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log("response error: ", error.response);
    if (error.response.status === 422) {
      const [firstErrorKey] = Object.keys(error.response.data.data);
      //REFACTOR
      /* $eventBus.$emit('show-message', {
        color: 'warning',
        text: error.response.data.data[firstErrorKey][0],
      }); */
    } else if (error.response.status === 404) {
      // redirect to 404
      removeSidebars();
      window.location.href = "/pages/404";
    } else if (error.response.status === 500) {
      removeSidebars();
      window.location.href = "/pages/500";
    } else if (error.response.status === 401) {
      if (error.response.data.message !== "Incorrect email and password") {
        window.location.href = "/pages/unauthorized";
      }
    }
    return Promise.reject(error);
  }
);
export default repository;
