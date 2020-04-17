import React from 'react';
import Content from '../components/Content';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DawnOfANewDay from "../blogPosts/DawnOfANewDay";
import OffTheBeatenPath from "../blogPosts/OffTheBeatenPath";



function BlogPage(props)  {


        return (
<div>
<Content>


          <Hero title = {props.title} subTitle = {props.subTitle} text = {props.text} />

          <h3 className = "blogIntro">Some honest posts on my experience in the programming world and life in general.
          Enjoy!</h3>
            <h2 className = "year">2020</h2>
            <h3 className = "month">April</h3>

                    <Container>
                    <Row>
                    <Col xs={2} md={4}>
                    <h5 className = "day">17</h5>
                    </Col>

                    <Col>
                    <Link to="/OffTheBeatenPath" style={{ textDecoration: 'none' }}>
                    <p className = "blogTitle">Off The Beaten Path</p></Link>
                    </Col>


                    </Row>

                    <Row>

                       <Col xs={2} md={4}>
                       <h5 className = "day">11</h5>
                       </Col>

                       <Col>
                       <Link to="/DawnOfANewDay" style={{ textDecoration: 'none' }}>
                       <p className = "blogTitle">Dawn of a New Day</p></Link>


                        </Col>
                          </Row>

                    </Container>



</Content>

</div>






                   )}




export default BlogPage;
