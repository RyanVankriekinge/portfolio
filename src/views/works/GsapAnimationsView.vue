<script setup>
import { onMounted } from 'vue';
import { TypeWriterAnimation } from "@/typeWriterAnimation.js";

onMounted(() => {
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
                  <h2 class="prototype-title title typing-animation">Dynamic transitions</h2>
                  <div class="column">
                      <p>A prototype that researched the use of animations with text and shapes on a responsive website.</p><br>
                      <p style="display: inline;">Link to git repo:</p>
                      <a href="https://github.com/EHB-MCT/expertlab-pt2-RyanVankriekinge/" 
                      target="_blank" style="color: azure; font-family: 'Oswald', sans-serif; font-size: 16px;">Prototype: Dynamic transitions</a>
                      <h3>Goals:</h3>
                      <ul>
                          <li>Create dynamic animations for my portfolio page</li>
                          <li>Learning how to use different js animation librairies and how to choose the appropriate library for each individual project.</li>
                          <li>Learning how to integrate transitions and animations in a one page Vue application.</li>
                          <li>Learning how to create and animate shapes and text while keeping the website responsive for all screen sizes.</li>
                      </ul>

                      <h3>Used technologies:</h3>
                      <ul>
                          <li>Adobe XD: Designing my application visually before developing it</li>
                          <li>Vue.js: Chosen front-end framework</li>
                      </ul>
                  </div>
                  <div class="column">
                      <img class="work-top-image" src="../../assets/img/prototypeFlashQuiz.png">
                  </div>
              </div>
              <div class="section">
                  <h2 class="prototype-title title typing-animation">Process: Design</h2>
                  <h3 class="image-title first-title">My personal style</h3>
                  <p></p>
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

h2::after {
  content: "|";
  display: inline-block;
  animation: blink 0.6s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
  
</style>