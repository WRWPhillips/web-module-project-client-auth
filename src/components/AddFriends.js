// npm imports
import React from 'react';

// util imports
import axiosAuthStub from './../utils/axiosAuthStub';


export default class AddFriends extends React.Component {
  state = {
    newFriend: {
      name: '',
      email: '',
      age: '',
      id: Date.now()
    }
  };
  
  handleChanges = e => {
    this.setState({
      newFriend: { 
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    })
  }
  
  submitFriend = e => {
    e.preventDefault();
    axiosAuthStub(
    ).post('http://localhost:9000/api/friends', this.state.newFriend
    ).then(resp => {
      console.log(resp);
      this.props.history.push('/friends');
    }).catch(err => {
      console.log(err);
    });
  };
  
  render(){
    return(
      <div className="friendform">
        <form onSubmit={this.submitFriend}>
          <input
            type='text'
            name='name'
            value={this.state.newFriend.name}
            onChange={this.handleChanges}
          />
          <input
            type='email'
            name='email'
            value={this.state.newFriend.email}
            onChange={this.handleChanges}
          />
          <input
            type='text'
            name='age'
            value={this.state.newFriend.age}
            onChange={this.handleChanges}
          />
          <button>Submit Friend</button>
        </form>
      </div>
    );
  }
}  
