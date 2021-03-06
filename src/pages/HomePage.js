import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Content from '../components/Content';
import Image from 'react-bootstrap/Image';
import CherokeeImg from '../components/CherokeeImg';
import HullImg from '../components/HullImg';
import JohnSmileImg from '../components/JohnSmileImg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






function HomePage(props) {
return (
   <div>
   <Content>
<Hero title = {props.title} subTitle = {props.subTitle} text = {props.text} />

<JohnSmileImg />
<div  className = "intro">
<p>I have knowledge in Javascript, React, and Node. I also have an intermediate level of knowledge in Java.
When I'm not creating projects or learning, I enjoy reading, learning new skills, and watching my beloved
St. Louis Blues, Cardinals, and Billikens. I have a showcase of my work below. Feel free to reach out to me
at my <a href = "https://www.linkedin.com/in/john-schurk-89993271/">LinkedIn</a> and <a href = "https://github.com/jjschurk30">Github</a>  pages or you can contact me directly at
johnschurk@yahoo.com. Happy Coding!</p>
</div>

<h1 className = "projectTitle">My Projects</h1>


<Container>
  <Row>
    <Col xs={6} md={4}>

<a href ="https://cherokeestreetdrumschool.herokuapp.com/">
  <CherokeeImg />
  </a>
    </Col>


    <Col xs={6} md={4}>
<a href ="https://jjschurk30.github.io/">
  <HullImg />
</a>
</Col>
</Row>



</Container>
</Content>

 </div>


);
}

export default HomePage;