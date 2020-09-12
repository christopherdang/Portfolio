import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './App.css';

import Footer from './Components/Footer';

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
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Christopher Dang</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Footer />

        </Container>
      </Router>
      );
  }
}

export default App;