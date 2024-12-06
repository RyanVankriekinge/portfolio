<script setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import { TypeWriterAnimation } from "@/typeWriterAnimation.js";


onMounted(() => {
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            });
            observer.unobserve(entry.target);
        }
        });
    };

  const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.2,
  });

  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    observer.observe(section);
  });

  const images = document.querySelectorAll('.section img');
  images.forEach(image => {
    observer.observe(image);
  });

  const headings = document.querySelectorAll("h2.typing-animation");
  if (headings.length > 0) {
    TypeWriterAnimation(headings);
  }
});
</script>

<template>
    <main>
        <div class="outer-wrapper">
            <div class="wrapper">
                <div class="section">
                    <div class="column-one-third">
                        <h2 class="prototype-title title typing-animation">Programming animation</h2>
                        <p>A 2D animation about programming for kids with the same look and feel as a paper cut animation.</p><br>
                        <h3 style="margin-top: 10px;">Used technologies</h3>
                        <ul>
                            <li>Adobe Illustrator: Creating background elements, characters and props</li>
                            <li>Duik Angela: Rigging the characters</li>
                            <li>Adobe After Effects: Animating the scenes</li>
                        </ul>
                    </div>
                    <div class="column-two-thirds">
                        <video controls width="100%" height="auo">
                        <source src="../../assets/videos/programmerenvoorkinderenv2.webm" type="video/webm" style="max-width: 100%">
                        Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div class="section">
                    <h2 class="prototype-title title typing-animation">Research</h2>
                    <h3>Problem</h3>
                    <p>Although computers are becoming increasingly important in our daily lives, programming is currently being neglected in general 
                        primary and secondary education. The curricula have so far contained few real programming subjects and computer science lessons 
                        are increasingly being removed from the teaching programs by schools. In this way there will continue to be a shortage of people 
                        who learn this valuable skill.
                    </p><br>
                    <p>I think it is important that students are prepared for the future, in which technology will most likely have a big role. Therefore, 
                        learning this skill would make children future proof and would also teach them valuable skills like computational thinking, problem 
                        solving and logic. That's why I asked myself the question: How can I explain the concept and benefits of programming in a way that's 
                        suitable for children.
                    </p>
                    <h3>Assignment</h3>
                    <p>Because children generally have a short attention span and like to be stimulated visually, I took the opportunity to work on this problem 
                        for my Motion graphics course, because  for this course, our main assignment was to make a short animation video. 
                    </p>
                    <h3>Choosing an animation style</h3>
                    <div class="column">

                    <p>I started my process by choosing an animation style that fits the message of my video. Because my main audience consists of children, I wanted to make something that speaks to them. After doing some research around possible styles, I decided to go with papercut animation. The bright colours and crafty aspect make it an appropriate style for a young audience.
                    </p><br>
                    <p>When I was younger, I loved making stop motion videos, so I tried to mimic this style by using certain techniques in after effects that make animation videos appear like mixed media videos. The most important things I did, were: using paper textures for all the shapes, using hold keyframes, moving the shapes by a small randomised amount at every keyframe and creating depth by using highlights and shadows.
                    </p>
                    </div>
                    <div class=column>
                        <img src="../../assets/img/prototypeProgrammingAnimation/paperCutStyleFrame.webp">
                    </div>
                </div>
                <div class="section">
                    <div class="column prototype-bottom">
                        <img src="../../assets/img/prototypeProgrammingAnimation/rigging.webp" style="max-height: 100vh;">
                    </div>
                    <div class="column prototype-top">
                        <h2 class="title  prototype-title typing-animation">Animating</h2>
                        <p>After choosing an animation style, I started by writing the script for the video. When the script was done, I made a story board to visualise the outline of the video. To make my video appear as realistic as possible, I created one scene with actual paper cuts and analysed the typical aspects of a paper cut animation so I could recreate the look digitally. I created all my characters and props with Adobe Illustrator and rigged and animated them using After Effects and Duik Angela.
                        </p>
                        <p>After completing the animation, I added sound effects and a voice over as well as some background music. This made the video really come to life. You can watch the finished product here.
                        </p>
                    </div>
                </div>
                <div class="section">
                    <h2 class="title  prototype-title typing-animation">End Result</h2>
                    <video controls width="100%" height="auo">
                        <source src="../../assets/videos/programmerenvoorkinderenv2.webm" type="video/webm" style="max-width: 100%">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.section{
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.column{
    width: 100%;
}

.column img{
    width: 100%;
    margin-top: 0px !important;
}

.section img{
    width: 100%;
    margin-top: 20px;
}

.prototype-title{
    width: 100%;
}

.work-top-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.section li{
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    font-size: 16px;
    color: white;
    list-style: circle;
}

p{
    text-align: left;
}

h2{
    text-align: left
}

h3{
    text-align: left;
    width: 100%;
    margin-top: 40px;
}

.section {
  opacity: 0;
  transform: translateY(50px);
}

.section img {
  opacity: 0;
  transform: translateY(50px);
}

@media (max-width: 1024px){
    .column{
        margin-bottom: 50px;
    }
    .prototype-bottom {
        order: 2;
    }
    .prototype-top {
        order: 1;
    }
}

@media (min-width: 641px) {       
    .section li{
    text-align: left;
    }
}

@media (min-width: 1025px) {       
    .column{
        width: 45%;
    }
    .column-one-third{
        width: 40%;
    }
    .column-two-thirds{
        width: 55%;
    }
}
</style>
