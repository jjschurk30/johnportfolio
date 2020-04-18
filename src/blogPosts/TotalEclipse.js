import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Link } from 'react-router-dom';


function TotalEclipse(props) {

return (

<div>
<Content>
<Hero title = {props.title} subTitle = {props.subTitle} text = {props.text} />



<h1 className = "blogPostTitle">Total Eclipse</h1>

<h5 className = "blogAuthor">By John Schurk</h5>


<p className = "blogContent">Depression is a tough state to describe to someone who isn't experiencing it at the moment.
 Your mind while in a depressive phase is slower, less cognitive and doesn’t register social situations or has delusions
  about what is really happening in the present. </p>

<p className = "blogContent">At least that’s how I felt from late April of 2018 to early August. In the summer of 2017,
I had some grasp on reality or sanity to where I could still function.</p>

<p className = "blogContent">This new wave of depression was different from how I felt the year before. I basically
felt or showed no emotion. My mind shut off completely. I barely spoke when in the presence of others and I had those
dead eyes that would scare anyone who looked directly into them.</p>

<p className = "blogContent">I can’t imagine how my family felt, they tried to cheer me up, but I lashed out at them.
I specifically remember having a meltdown and screaming at my brother and sister-in law until I lost my voice one
Friday night in June. </p>

<p className = "blogContent">There’s some details and more to this story that I can’t get into because it’s something
that I want to keep private between my family and close friends. </p>

<p className = "blogContent">I will say that I came close. Came close to ending it completely and not having to deal
with the pain anymore. That one day in July, I almost did it. I’ve tried it multiple times that summer actually, but
this one was the closest and not half-hearted like the others. </p>

<p className = "blogContent">I didn’t do it, thank God, but I did break down and called my brother Dan and sister
Peggy. I cried and begged them to come over to the house and please help me. </p>

<p className = "blogContent">They did come over. They also made me laugh, which I think was only the second time I
smiled or showed joy in the four months of that dark period.
</p>

<p className = "blogContent">That day in July was a turning point, some other factors went into me crawling out of
that pit, but it started on that day. By the end of July, something started to click again in my brain. Like some
dormant machine had been switched back on in a factory.</p>

<p className = "blogContent">I spent one Saturday afternoon at my brother Mike’s house. For the first time in about
three and a half months, I did not have the thought of not living anymore. It was one of the most wonderful and
relieving feelings I’ve ever felt in my life at that point. </p>

<p className = "blogContent">I’m actually starting to tear up while writing and thinking about that moment. Nothing was
there. No hope. No will. It just took one afternoon for everything to stop and then start again.
</p>

<p className = "blogContent">Now, I still had some anxiety issues going into August of 2018. There were still some
delusions and perceptions of reality that my mind was lying to me about, but the important thing was that I didn’t
feel like harming myself.</p>

<p className = "blogContent">The first two weeks in August before the fall semester of my senior year at UMSL were a
period of rediscovering myself...again. Just like in 2017, I needed to figure out what I wanted to do with my life.
I tried applying to internships, but none of them appealed to me at the time.</p>

<p className = "blogContent">I was still in my Liberal Studies degree path and I was still on track to graduate with a
Information Systems minor.</p>

<p className = "blogContent">I kept telling myself, “Just get the piece of paper”. I was still taking programming
classes. </p>

<p className = "blogContent">So, one day in September of 2018, I just randomly thought that I wanted to become a
programmer. Second time’s a charm, right?</p>

<p className = "blogContent">I’m an unpredictable person I admit, but I always try to hatch a plan. I’ve learned that
a mediocre plan executed on time is better than a perfect plan executed too late or even no plan at all.</p>

<p className = "blogContent">I planned to self-teach and start from ground zero in learning programming, graduate from
UMSL and look for someone to take me on at a company. Mediocre plan indeed, but better than no plan.</p>

<p className = "blogContent">I had righted the ship. I conquered this black tar that is depression, but not without the
help of some people that are very close in my life.
</p>

<p className = "blogContent">Programming is a constant growing and learning process. So is dealing with depression.</p>

<p className = "blogContent">What depression taught me is that it can pop up at any time and can bring down any man
or woman, no matter what background.
</p>

<p className = "blogContent">I do think someday that I’ll have to battle some down times once more, but in the words
of Steely Dan in the song Any Major Dude Will Tell You,
</p>

<p className = "lyrics">“I never seen you looking so bad my funky one.
                            You tell me that your superfine mind has come undone.

</p>

<p className = "lyrics">
                             Any major dude with half a heart surely will tell you my friend.
                             Any minor world that breaks apart falls together again.
                             When the demon is at your door.
                             In the morning it won't be there no more.
                             Any major dude will tell you.”

</p>

<p className = "blogContent">This period had passed. Good times lie ahead. The sun had popped out from behind the
eclipse of the moon.
</p>


    <Link className = "view" to ="/blog" style={{ textDecoration: 'none' }}><h5 className = "viewMore">See
    More Blog Posts></h5>
    </Link>
</Content>
</div>
)

}

export default TotalEclipse;