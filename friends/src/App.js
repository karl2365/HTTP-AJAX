import React from 'react';
import './App.css';
import axios from 'axios';

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
        console.log(res);
        this.setState({ friends: res.friends });
      })
      .catch(err => {
        console.log(err);
        this.setState ({ error: err.response.message })
      })
  }



  render(){
    return (
      <div className="App">
          fuck
      </div>
    );
  }
}

export default App;
