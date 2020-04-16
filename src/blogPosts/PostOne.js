import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Link } from 'react-router-dom';


function PostOne(props) {

return (

<div>
<Content>
<Hero title = {props.title} subTitle = {props.subTitle} text = {props.text} />



<h1 className = "blogPostTitle">Dawn of A New Day</h1>

<h5 className = "blogAuthor">By John Schurk</h5>


<p className = "blogContent">I was lost. The end of my sophomore year at the University of Missouri-St. Louis was the
end of my life. All that education was for nothing and this entire last year was a whole waste of time. That was my
thinking in April of 2017. I wanted to be a teacher and was enrolled in the education program. All of a sudden, one
night while alone in my living room, I didn’t want to be a teacher. I don’t know why it happened or what made it
change, but something in my brain told me that I couldn’t be a teacher and I started to have a panic attack. I tried to
fight it, convince myself that I could stand in front of a room full of adolescents and lecture them on stuff I wasn’t
passionate about. Eventually, my mind won the battle and that sent me on a three month spiral that would last until
August. Summer of 2017 felt like a summer of finding myself. Summer of 2018 was a summer of trying to stay alive, but
that story is for another post.</p>

<p className = "blogContent">After the spring semester ended, I would wake up everyday and feel no hope. No hope that
everything was going to be okay and no plan for what my next steps would be to climb back into normalcy. My six
brothers (yes, six) and one sister (yes...one) tried to cheer me up and tell me that they were in the same situation
when they were my age. I wish I listened then, that would’ve made the down time a lot more enjoyable.</p>

<p className = "blogContent">Anyway, on a humid June Friday night in St. Louis, I was at my brother Dan’s house. We
were about to head out that night to the bars downtown because I wanted a distraction from all the noise and pain
going on in my head. His roommate, also named Dan, is a computer programmer and at that time was still studying to
get his degree. He heard my story and my whoa is no attitude and that my world is over, when he said this to me,
“Why don’t you just become a programmer”? I had thought about it before, but I told him, “It’s too hard”.
I’ll always appreciate and respect him when Dan told me, “No John,
programming is easy”.</p>

<p className = "blogContent">In reality, both you and I know that programming is not easy and it takes time and
dedication, but I needed to hear those words from my brother’s roommate at that moment. It opened the door for me to at
least try something new when I had no motivation to discover anything at all. Dan the programmer showed me FreeCodeCamp,
a wonderful site that teaches programming for free and I believe that new and experienced programmers should check it
out. Dan showed me a basic “Hello World” in HTML and at that moment I was hooked. I had a fun rest of that Friday night
and I’ll probably never forget it, at least I hope, because it was the beginning of a new life for myself.</p>

<p className = "blogContent">That Saturday afternoon, I visited the FreeCodeCamp site and started to learn the basics
of programming. That summer, I spent a lot of time on the site and by the time my junior year at UMSL started, I knew
I wanted to be a programmer. Everything was going to be okay. That Friday night and Saturday night in June of 2017 was
the rediscovery of who I was, who I  am, and who I wanted to become. That was the dawn of a new day.</p>

    <Link className = "view" to ="/blog" style={{ textDecoration: 'none' }}><h5 className = "viewMore">See
    More Blog Posts></h5>
    </Link>
</Content>
</div>
)

}

export default PostOne;