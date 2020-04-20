import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Footer from './components/Footer';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';



class App extends React.Component {
constructor(props) {
super(props);
this.state = {
title: 'John Schurk',
headerLinks: [
{ title: 'Home', path: '/' },
{ title: 'About', path: '/about' },
{ title: 'Resume', path: '/resume' }
],

home: {
title: 'Hi, I\'m John!',
subTitle: 'I\'m a software developer in the St. Louis Metro Region.',
},

about: {
title: 'A Little More About Me.'
},


resume: {
title: 'Full Resume'
},

}
}

render() {

return(
<Router>


<Container className = "p-0" fluid = {true} >

<Navbar  bg="transparent" expand="lg" >

    <Navbar.Brand>John Schurk</Navbar.Brand>

    <Navbar.Toggle className = "border-0" aria-controls = "navbar-toggle" />
    <Navbar.Collapse id = "navbar-toggle"  >

    <Nav className = "ml-auto"  >
    <Link className = "nav-link" to = "/" >Home</Link>
    <Link className = "nav-link" to="about">About</Link>
    <Link className = "nav-link" to="resume">Resume</Link>


    </Nav>

    </Navbar.Collapse>
</Navbar>



<Route path = "/" exact render = {() => <HomePage title = {this.state.home.title}
subTitle = {this.state.home.subTitle} />} text = {this.state.home.text} />

<Route path = "/about" render = {() => <AboutPage title = {this.state.about.title} />} />


<Route path = "/resume" render = {() => <ResumePage title = {this.state.resume.title} />} />


<Footer />

</Container>

</Router>


);
}
}

export default App;
