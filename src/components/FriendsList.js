//npm module imports
import React from 'react';

//util imports
import axiosAuthStub from './../utils/axiosAuthStub';

export default class FriendsList extends React.Component {
  state= {
    friendsList: []
  };

  componentDidMount() {
    axiosAuthStub(
    ).get('http://localhost:9000/api/friends'
    ).then(resp => {
      console.log(resp.data);
      this.setState({
        friendsList: resp.data
      });
      console.log(this.state.friendsList);
    }).catch( err => {
      console.log(err);
    });
  }

  addFriendRoute= e => {
    e.preventDefault();
    this.props.history.push('/friends/add');
  }

  render(){
    const friendsList = this.state.friendsList;
    return(
      <div>
        <h2>Friends</h2>
          {friendsList.map(friend => (
            <div className="Friend" key={friend.id}>
              <h3>{friend.name}, {friend.age}</h3>
              <p>Contact: {friend.email}</p>
            </div>
            ))}
        <button onClick={this.addFriendRoute}>Add Friend</button>
      </div>
    )
  }
};

