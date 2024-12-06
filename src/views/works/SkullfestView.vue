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
                    <div class="column">
                        <h2 class="prototype-title title typing-animation">Skullfest</h2>
                        <p>For this project, I created a mobile app design for a fictional alternative music festival named Skullfest.</p><br>
                        <h3>Used technologies</h3>
                        <ul>
                            <li>Adobe Illustrator: To create style elements, UI elements and a style guide</li>
                            <li>Adobe XD: To design a working mobile prototype</li>
                        </ul>
                        <h3>Challenge</h3>
                        <p>For this project, I challenged myself to create a mobile website for a fictional, alternative festival that mostly consist 
                            of bands and artists that fit into rock and metal genres. I really wanted this project to have a unique design that will 
                            speak to its specific audience and doesn't just look like your average festival website.
                        </p>
                    </div>
                    <div class="column">
                        <img class="work-top-image" src="../../assets/img/prototypeSkullfest/prototypeSkullfest.png">
                    </div>
                </div>
                <div class="section">
                    <h2 class="prototype-title title typing-animation">Process: Design</h2>
                    <h3 class="image-title first-title">Moodboard</h3>
                    <p>To find the ideal style for the website, I started by researching things that are typical for the genres and sub cultures that 
                        belong to the main audience of the festival. After some research, I stumbled apon the concept of 'punkzines'. This is a subcategory 
                        of 'fanzines', which are magazines created by cutting images and letters from news papers and magazines and reassembling them to 
                        create one of your own. 
                    </p><br>
                    <p>I decided to use this style, because it has a unique look that screams rock music, and also because the style contains elements that 
                        are typically seen in other rock and metal related contexts, like for example album covers. I created a moodboard that contained 
                        different styles of punk zines, and analysed which things were recurring. I also included some web pages in similar colour schemes 
                        and styles, to analyse how the style would be used in the specific context of a web page.
                    </p>
                    <img src="../../assets/img/prototypeSkullfest/moodboard.webp">
                </div>
                <div class="section">
                    <div class="column-two-thirds">
                        <h3 class="image-title">Style guide</h3>
                        <p>The things I found that are typical for the punk zine style, are:</p>
                        <ul>
                            <li>High contrast images</li>
                            <li>Bold fonts</li>
                            <li>Varying font size, due to the letters being cut out of magazines and news papers</li>
                            <li>Lots of designer fonts</li>
                            <li>Dark colours, often paired with one bright colour (usually pink)</li>
                            <li>Inconsistent shapes and frames</li>
                        </ul> <br>
                        <p>I combined these elements into a style guide that I used for my own web app, taking into account that these elements were found 
                            on posters and I needed to change some things to make it appropriate to use for a mobile web page.</p><br>
                        <p>Based on my style guide, I created my web app. I included all the important information and necessary pages, keeping in mind 
                            that it needs to be easy to navigate, because a lot of people will use the app while already at the festival. Like for example, 
                            taking a quick look at the time table. To finish everything off, I created a working prototype using Adobe XD.</p>
                    </div>
                    <div class="column-one-third">
                        <img src="../../assets/img/prototypeSkullfest/stijlgids.webp" style="max-height: 100vh;">
                    </div>
                </div>
                <div class="section">
                    <div class="column prototype-bottom">
                        <iframe width="360" height="760" src="https://xd.adobe.com/embed/29ef7323-1b9e-4fba-92aa-a39881e02e68-7cbc/?fullscreen" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="column prototype-top">
                        <h2 class="prototype-title title typing-animation">Prototype</h2>
                        <p>To create the prototype for my app, I started by creating a wireframe that focuses on the user experience. Since
                            it's a festival app, users will mostly use it for the following things:
                        </p>
                        <ul>
                            <li>Looking at the line-up (before buying a ticket, or to see which artists are coming on the day of their bought ticket)</li>
                            <li>Find information about the artists</li>
                            <li>Looking at the time table (to plan their visit or to use on the festival)</li>
                            <li>Find information about tickets prices and availability</li>
                            <li>Buy tickets</li>
                            <li>Find general information about the festival (floor plan, transport, camping) </li>
                            <li>Read the camping rules</li>
                        </ul>
                        <br>
                        <p>The home page is designed to efficiently direct to the pages that are used the most often (Time table, line-up and tickets), so 
                            users can easily find these pages when revisiting the website.
                        </p><br>
                        <p>The prototype is interactive, so try navigating through my app to discover how it works!</p>
                    </div>
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
    margin-top: 20px;
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
        width: 31%;
    }
    .column-two-thirds{
        width: 62%;
    }
}
</style>
