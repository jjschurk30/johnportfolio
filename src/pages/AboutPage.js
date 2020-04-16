import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import JohnImg from '../components/JohnImg.js';
import Image from 'react-bootstrap/Image';

function AboutPage(props) {

return (

<div>
<Content>
<Hero title = {props.title} subTitle = {props.subTitle} text = {props.text} />

<JohnImg />
<div className = "bio">
<h5>Back in June of 2017, I was introduced to coding by my brother's roommate. It was a difficult
period for me personally, but I found solace in learning how to code and found myself feeling a pull to get into
programming professionally. I was in between re-deciding my major that summer as I was heading into my junior year
of college. I didn't want to start over and become a CS major due to the cost, so I figured that I could self-teach and
take programming centered classes on the side. In May of 2019, I graduated from the University of Missouri-St. Louis with
a degree in Liberal Studies and a minor in Information Systems.</h5>
<br />
<h5>I finally did it, but now the real work began and in September of 2019, I landed a six-month contract to hire
Full-Stack developer role at CenturyLink in St. Louis. I achieved my goal of becoming a professional programmer.
I loved my co-workers and the team I was brought on to were a match I enjoyed. I learned the ropes of how to be a
professional and the field itself and had a blast all at the same time. Unfortunately, due to budget cuts, that stint
only lasted until November 1st. Since then, I've been learning new languages and sharpening my programming skills.
This website you're reading my story on was built with React, which I learned on my spare time. My dedication, loyalty,
and positive outlook make me a great fit for any team or project. I love to code and learn. Thanks for listening.</h5>
</div>
</Content>
</div>
)

}

export default AboutPage;