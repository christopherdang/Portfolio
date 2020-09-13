import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './App.css';

import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import Projectspage from './Pages/Projectspage';
import Contactpage from './Pages/Contactpage';

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
        title: 'The Essence of Proactivity',
        subTitle: 'Constantly seeking more knowledge',
        text: 'Computer Science Portfolio'
      },

      about: {
        title: 'About Me'
      },

      projects: {
        title: 'My Projects'
      },

      contact: {
        title: 'Contact Me'
      }
    }
  }

  render() {

    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand><font color="white">Christopher Dang</font></Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav>
                <Link className="nav-link" to="/"><font color="white">Home</font></Link>
                <Link className="nav-link" to="/about"><font color="white">About</font></Link>
                <Link className="nav-link" to="/projects"><font color="white">Projects</font></Link>
                <Link className="nav-link" to="/contact"><font color="white">Contact</font></Link>

        
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <Homepage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <Aboutpage title={this.state.about.title} />} />
          <Route path="/projects" render={() => <Projectspage title={this.state.projects.title} />} />
          <Route path="/contact" render={() => <Contactpage title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>
      );
  }
}

export default App;