<template>
    <main>
        <div class="outer-wrapper">
            <div class="wrapper">
                <div class="section">
                    <h2 class="prototype-title title">FlashQuiz</h2>
                    <div class="column">
                        <p>FlashQuiz is a quiz app that allows users to create, host and play quizzes instantly.</p><br>
                        <h3>Used technologies:</h3>
                        <p>Design and front-end:</p>
                        <ul>
                            <li>Adobe XD: Designing my application visually before developping it</li>
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
                    <h2 class="prototype-title title">Process: Design</h2>
                    <p>Since I wanted to implement many features, I aimed to efficiently and quickly develop a style suitable for a quiz app. To achieve this, I researched other quiz apps and colors typically associated with speed (as the app is named "FlashQuiz"). Additionally, I explored existing lobby systems and determined which user interfaces work best for this type of application. Based on this research, I created a mood board and designed a simple, user-friendly interface in Adobe XD.</p>
                    <img src="../../assets/img/prototypeFlashQuiz/flashquizmoodboard.png">
                    <img src="../../assets/img/prototypeFlashQuiz/flashquizdesignxd.png">
                </div>
                <div class="section">
                    <h2 class="prototype-title title">Back-end</h2>
                    <h3>Classes</h3>
                    <h3>WebSockets</h3>

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

li{
    font-family: sans-serif;
    font-size: 14px;
    color: white;
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

@media (max-width: 1024px){
    .column{
        margin-bottom: 50px;
    }
}

@media (min-width: 641px) {       
    li{
    list-style: circle;
    text-align: left;
    }
}

@media (min-width: 1025px) {       
    .column{
        width: 45%;
    }
}
    
</style>