import axios from 'axios';

const axiosAuthStub = () => {
  const authToken = localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: authToken
    }
  });
}

export default axiosAuthStub;
