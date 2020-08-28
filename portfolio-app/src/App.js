import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      title: 'Christopher Dang',

      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Projects', path: '/projects'},
        { title: 'Contact', path: '/contact'},
      ],

      home: {
        title: 'Christopher Dang',
        subTitle: 'Computer Science Portfolio',
        text: 'Always strive for better'
      },

      about: {
        title: 'About Me'
      },

      projects: {
        title: 'My Projects'
      },

      contact: {
        title: 'My Contacts'
      }
    }
  }

  render() {

    return (
      <div>
        Hello from React
      </div>
      );
  }
}

export default App;
