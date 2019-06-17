import React from 'react';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res.data);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState ({ error: err.response.message })
      })
  }



  render(){
    return (
      <div className="App">
          <Friends friends={this.state.friends} key={this.state.friends.id} />
      </div>
    );
  }
}

export default App;
