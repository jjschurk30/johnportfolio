import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Link } from 'react-router-dom';


function OffTheBeatenPath(props) {

return (

<div>
<Content>
<Hero title = {props.title} subTitle = {props.subTitle} text = {props.text} />



<h1 className = "blogPostTitle">Off the Beaten Path</h1>

<h5 className = "blogAuthor">By John Schurk</h5>


<p className = "blogContent">By the time August of 2017 rolled around, I had already made up my mind that I wanted to
become a software developer. FreeCodeCamp lessons had been going well as I had gotten into HTML, CSS, and vanilla
JavaScript by the time the first day of Fall classes began at UMSL. Interestingly, the first day of the semester fell
on August 21st, the day of the big Solar Eclipse of 2017. I look back at that moment when the moon passed in front of
the sun as a foreshadow of what was to come next in my life. </p>

<p className = "blogContent">I switched my major in the summer to Liberal Studies, a bullcrap degree with no real
future when it came to career choices. I decided to get that degree because it was the closest to get in terms of my
credits at the time and if I wanted to graduate within my 5th year of university. If I went back and switched to a CS
degree, I probably would still be at UMSL right now and extended my stay. See, I hated college with a deep passion.
I thought it was a waste of time and I screwed off in my early years which led to this moment.</p>

<p className = "blogContent">By the time my junior year started, I was too deep in and I didn’t want to disappoint
my parents if I dropped out. Plus, I was so close to actually getting the piece of paper, that I would disappoint
myself as well if I didn’t finish what I started. I had to prove to myself that I could complete and conquer something
that I thought in my mind was the evil enemy that must be destroyed (Yes...that’s how I actually viewed what college
was). I decided that if I could self-teach myself coding, I could take programming centered classes at UMSL as well
and get a minor in Information Systems. </p>

<p className = "blogContent">I had a solid plan, until I started to get distracted. In the winter of 2017, for some
stupid reason, I wanted to get into comedy. I did a couple open mics. Some went great, some crashed into the side of
a cliff. The ultimate problem was that I stopped focusing on coding, which led to me to neglect college even more
than I already did. I had strayed from my goal, which led to the start of some dark days ahead. </p>

<p className = "blogContent">By the time the calendar turned to April of 2018, I had stopped doing comedy, I had
stopped coding, and my mind started to crack due to trying to catch up on school work that I blew off early in the
spring semester. I had lost all motivation and I was back in the position where I was a year ago. I didn’t know
what I wanted to do with my life. </p>

<p className = "blogContent">The only difference this time around, I didn’t even think I wanted to do anything at all
in my life. I didn’t even think I wanted to live. The moon had blocked the sun and cast a darkness. The next four
months would be the most critical in my young life. Crisis mode had taken over and I would have to fight to get
up...again. All because I had strayed from my goal.</p>

<p className = "blogContent">There’s going to be a lot of pain in due time, but trust me, there’s a happy ending to
this story. </p>

    <Link className = "view" to ="/blog" style={{ textDecoration: 'none' }}><h5 className = "viewMore">See
    More Blog Posts></h5>
    </Link>
</Content>
</div>
)

}

export default OffTheBeatenPath;