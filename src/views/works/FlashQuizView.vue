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
                    <h2 class="prototype-title title typing-animation">FlashQuiz</h2>
                    <div class="column">
                        <p>FlashQuiz is a quiz app that allows users to create, host and play quizzes instantly.</p><br>
                        <p style="display: inline;">Link to git repo:</p>
                        <a href="https://github.com/EHB-MCT/expertlab-pt1-RyanVankriekinge/tree/feat/host-lobby" 
                        target="_blank" style="color: azure; font-family: 'Oswald', sans-serif; font-size: 14px;">Prototype: FlashQuiz</a>
                        <h3>Goals:</h3>
                        <ul>
                            <li>Develop a quiz app using WebSockets for real-time communication</li>
                            <li>Design an intuitive and appealing user interface</li>
                            <li>Implement a scalable and secure data storage system</li>
                        </ul>

                        <h3>Used technologies:</h3>
                        <p>Design and front-end:</p>
                        <ul>
                            <li>Adobe XD: Designing my application visually before developing it</li>
                            <li>Vue.js: Chosen front-end framework</li>
                        </ul>
                        <p>Back-end:</p>
                        <ul>
                            <li>Node.js: Used to run the back-end server and handle server-side logic</li>
                            <li>Socket.IO: Integrated for real-time communication via WebSockets to enable live features</li>
                            <li>MongoDB: saving users, quizzes and lobbies</li>
                        </ul>
                    </div>
                    <div class="column">
                        <img class="work-top-image" src="../../assets/img/prototypeFlashQuiz.png">
                    </div>
                </div>
                <div class="section">
                    <h2 class="prototype-title title typing-animation">Process: Design</h2>
                    <h3 class="image-title first-title">Moodboard</h3>
                    <p>Since I wanted to implement many features, I aimed to efficiently and quickly develop a style suitable for a quiz app. To achieve this,
                         I researched other quiz apps and colors typically associated with speed (as the app is named "FlashQuiz"). Additionally, 
                         I explored existing lobby systems and determined which user interfaces work best for this type of application. Based on this 
                         research, I created a mood board and designed a simple, user-friendly interface in Adobe XD.</p>
                    <img src="../../assets/img/prototypeFlashQuiz/flashquizmoodboard.png">
                    <h3 class="image-title">Design</h3>
                    <p>I chose to create a mobile design that easily extends to desktop because quiz apps are typically used on-the-go, 
                        making mobile the most convenient option. A mobile-first approach is also recommended for web development as it 
                        prioritizes performance and user experience and it's easy to scale up to a desktop design.</p>
                    <img src="../../assets/img/prototypeFlashQuiz/flashquizdesignxd.png">
                </div>
                <div class="section">
                    <div class="column">
                        <h2 class="prototype-title title typing-animation">Process: Development</h2>
                        <h3>Classes</h3>
                        <p>I created a class diagram (UML) in draw.io and made sure to include all the important classes that are needed to allow
                            users to create an account, quizzes with questions and lobbies. 
                        </p>
                        <h3>Storing my data with MongoDB</h3>
                        <p>I opted for a Node.js back-end combined with a MongoDB database. I chose MongoDB because it handles different quiz formats better than 
                            relational databases, which need rigid schemas. 
                                For example, you can easily store different types of questions in the same collection, with each 
                                type having its own structure. It manages complex data like questions and answers efficiently, scales well for high traffic, 
                                and speeds up development with its simple document-based structure.</p>
                        <h3>WebSockets with socket.io</h3>
                        <p>
                            I chose to use Socket.IO for this project because it seems the most suitable. 
                            It’s beginner-friendly, automatically handles reconnecting and fallbacks, and integrates smoothly with Node.js. The event-driven 
                            model works well with Vue, making it easy to update the front-end in real-time. It works well with MongoDB, enabling 
                            instant data synchronization across clients. Socket.IO also reduces setup complexity, 
                            allowing me to focus on building features rather than managing real-time communication.</p>
                    </div>
                    <div class="column">
                        <img src="../../assets/img/prototypeFlashQuiz/flashquizclasses.drawio.png">
                    </div>
                </div>
                <div class="section">
                    <h2 class="prototype-title title typing-animation">Reflection and next steps</h2>
                    <h3>Challenges and solutions</h3>
                    <ol>
                        <li>Underestimated scope: I made this project during a sprint of only 2 weeks, so my goals were quite ambitious. I tried to implement
                            too many features in a short time frame. I should prioritize critical features and plan thoroughly to avoid this issue in the future.
                        </li>
                        <li>Database access issues: MongoDB was initially inaccessible from home due to IP restrictions. After identifying the problem, I updated 
                            this in the MongoDB Atlas Client.
                        </li>
                        <li>
                            Some variables, like the player count in the lobby, did not update when changes occurred in the database. This happened because I passed 
                            these variables as props from the page where the lobby was joined. The solution was to retrieve this data directly on the lobby page and 
                            update it via emits.
                        </li>
                        <li>Real-Time Updates for host: Occasionally, the host account would not receive certain emits, such as a player joining or the quiz starting. 
                            I partially resolved this by tweaking the emits, but the issue still occasionally occurs. To date, I haven’t fully solved this problem.
                        </li>
                    </ol>
                    <h3>What I learned</h3>
                    <ol>
                        <li>Efficiently integrating WebSockets with front-end frameworks.</li>
                        <li>The importance of realistic workload estimation and prioritization.</li>
                        <li>Debugging through structured problem-solving and techniques like the rubber duck principle.</li>
                        <li>Creating scalable back-end systems for real-time applications.</li>
                    </ol>
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
    font-size: 14px;
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
}
</style>
