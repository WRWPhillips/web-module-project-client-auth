// npm imports
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// stub imports
import axiosAuthStub from '../utils/axiosAuthStub'

export default function LogOut(){
  const { push } = useHistory();

  useEffect(() => {
    axiosAuthStub(
    ).post('http://localhost:9000/api/logout'
    ).then( resp => {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("username");
      push('/login');
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return(<div></div>);
}

