// npm imports
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// stub imports
import axiosAuthStub from '../utils/axiosAuthStub'

const Logout = () => {
  const { push } = useHistory();

  useEffect(() => {
    axiosAuthStub(
    ).post('http://localhost:9000/api/logout'
    ).then( resp => {
      localStorage.removeItem("token");
      push('/login');
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return(<div></div>);
}

export default Logout;
