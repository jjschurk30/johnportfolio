import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function ResumePage(props) {

return (

<div>
<Content>
<Hero title = {props.title} subTitle = {props.subTitle} text = {props.text} />
<div className = "contactInfo">
<h1>John Schurk</h1>
<h5>Phone: 314-780-3027  Email: johnschurk@yahoo.com</h5>
</div>

<div className = "resume">
<h4><b>Education</b></h4>
<h6><b>University of Missouri-St. Louis</b>    May 2019</h6>

<h6>Bachelor of Liberal Studies</h6>
<h6>Minor in Information Systems</h6>

<ul>
<h6><li>Relevant Courses: Managerial Application of Object-Oriented Programming I & II, Developing Business Applications in
.Net</li></h6>
</ul>
<h4><b>Technologies</b></h4>
<ul>
·       <li>JavaScript</li>
·       <li>React</li>
·       <li>Java</li>
·       <li>jQuery</li>
·       <li>CSS</li>
·       <li>Bootstrap</li>
·       <li>Spring Boot</li>
·       <li>Maven</li>
·       <li>AWS Cloud</li>
·       <li>NodeJS</li>
·       <li>DynamoDB</li>
·       <li>Serverless Framework</li>
</ul>



<h4><b>Employment History</b></h4>

<h5><b>CenturyLink</b> September 2019-October 2019</h5>
<h6>Full-Stack Developer</h6>

<ul>
<li>Worked on Billing as a Service team which utilized AWS, NodeJS, and JavaScript.</li>
<li>Team had an abstraction layer used across the company to integrate all their billing systems with common APIs.</li>
<li>Fixed common bugs and provided unit tests for the team.</li>
<li>Pair Programmed with Senior Developers to find reliable solutions for our team.</li>
<li>Used Serverless framework during time at company.</li>
<li>Exposed to Agile environment and DevOps oriented culture.</li>
<li>Built & developed against my own full stack environment locally.</li>
</ul>

<h4><b>Project Experience</b></h4>

<h6><b>Cherokee Street Drum School Website</b></h6>
<h6>Personal Project Created with React and deployed with Heroku</h6>

<ul>
<li>Created Mock drum school website that utilized Create-React-App.</li>
<li>Used a Hero component on each page to take control of reusability.</li>
<li>Created Content component to structure text and apply easier practices.</li>
<li>Pushed up to a personal Github account which then connected to Heroku account.</li>
<li>Website is currently being hosted on Heroku.</li>
</ul>

<h6><b>Song Registration Project</b></h6>
<h6>Personal Project built in Spring Boot and Angular</h6>
<ul>
<li>Created Spring Boot back-end repository to store songs submitted through front-end.</li>
<li>Used SQLite to house all data associated with page.</li>
<li>Used AuthO to secure webpage.</li>
<li>Built Angular portion manually and through Angular CLI.</li>
<li>Users could submit song information on the Home page and Admin page houses each input.</li>
</ul>

<h6><b>Budget Analysis Application</b></h6>
<h6>C# Project created in four member team</h6>
<ul>
 <li>Performed unit testing on application and fixed bugs that hindered the code.</li>
 <li>Interacted with team members successfully on the project.</li>
 <li>Created presentation that summarized the application clearly.</li>
 <li>Application performed successfully and tracked income and expenses.</li>
</ul>

<h6><b>Random Quote Machine</b></h6>
<h6>Personal Project</h6>
<ul>
<li>Used HTML, CSS, JavaScript, jQuery, and Bootstrap.</li>
<li>Created button that user clicked which would change quote on screen.</li>
<li>Created Twitter button with Bootstrap which would post current quote on user’s  social media account.</li>
</ul>

<h6><b>Mock University Survey Project</b></h6>
<h6>Personal Project</h6>
<ul>
<li>Used HTML, CSS, and potentially Java in future.</li>
<li>Survey page for my university that asked students concerning question for UMSL campus.</li>
</ul>
</div>

</Content>
</div>
)

}

export default ResumePage;