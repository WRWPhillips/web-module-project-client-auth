import React from 'react';
import axios from 'axios';


class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: { 
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios.post('http://localhost:9000/api/login', this.state.credentials
    ).then( resp => {
      console.log(resp);
      localStorage.setItem("role", resp.data.role);
      localStorage.setItem("username", resp.data.username);
      localStorage.setItem("token", resp.data.token);
      this.props.history.push('/friends');
    }).catch( err => {
      console.log(err)
    });
  };

  render(){
    return(
      <div>
        <form onSubmit={this.login}>
          <input 
            type='text'
            name='username'
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
 
          <input 
            type='password'
            name='password'
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />

          <button>Log In</button>

        </form>
      </div>
    );
  }
}

export default Login;
