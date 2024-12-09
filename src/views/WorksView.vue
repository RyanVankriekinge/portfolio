<script>
import { gsap } from "gsap";
import EyeAnimationNoShape from "@/components/EyeAnimationNoShape.vue";

export default {
  components: {
    EyeAnimationNoShape,
  },
  methods: {
    goToPage(path) {
      this.$router.push(path);
    },
  },
  mounted() {
    const workContainers = document.querySelectorAll(".work-container");

    gsap.fromTo(
      workContainers,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  },
};
</script>

<template>
  <main>
    <div class="outer-wrapper">
      <div class="wrapper">
        <div class="works-title-container">
          <div class="works-title-shape"></div>
          <h2 class="title typing-animation">Works</h2>
        </div>
        <div class="works-list">
          <div class="work-container" @click="goToPage('/sharedbites')">
            <div class="media-container">
              <img src="../assets/img/prototypeSharedBites.jpeg" alt="SharedBites">
            </div>
            <div class="work-text-area">
              <h3 class="work-title">SharedBites</h3>
              <p class="work-description">A recipe sharing website specifically designed to cook and share quick recipes.</p>
            </div>
          </div>
          <div class="work-container" @click="goToPage('/skullfest')">
            <div class="media-container">
              <img src="../assets//img/prototypeSkullfest/prototypeSkullfest.png" alt="Skullfest">
            </div>
            <div class="work-text-area">
              <h3 class="work-title">Skullfest</h3>
              <p class="work-description">A mobile app design created for a fictional alternative music festival.</p>
            </div>
          </div>
          <div class="work-container" @click="goToPage('/programming-animation')">
            <div class="media-container">
            <img src="../assets/img/prototypeProgrammingAnimation/programmingTitle.webp" alt="Programming animation">
            </div>
            <div class="work-text-area">
              <h3 class="work-title">Programming animation</h3>
              <p class="work-description">A 2D animation video about programming for children, made in a paper cut stop motion style. </p>
            </div>
          </div>
          <div class="work-container" @click="goToPage('/flashquiz')">
            <div class="media-container">
              <img src="../assets/img/prototypeFlashQuiz.png" alt="FlashQuiz">
            </div>
            <div class="work-text-area">
              <h3 class="work-title">FlashQuiz</h3>
              <p class="work-description">A full-stack web app that allows users to host or play pre-made quizzes instantly.</p>
            </div>
          </div>

          <div class="work-container" @click="goToPage('/gsap-animations')">
            <div class="media-container eye-container">
              <EyeAnimationNoShape></EyeAnimationNoShape>
            </div>
            <div class="work-text-area">
              <h3 class="work-title">Animations and transitions</h3>
              <p class="work-description">Researching the use of animations with text and shapes on a responsive website and using transitions in Vue.js</p>
            </div>
          </div>
          <div class="work-container" @click="goToPage('/page-speed')">
            <div class="media-container">
            </div>
            <div class="work-text-area">
              <h3 class="work-title">Page speed improvement</h3>
              <p class="work-description">Maximising web page speed based on the 3 core web vitals: CLS, LCP and INP.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.works-title-container{
  height: fit-content;
  position: relative;
  margin-top: 50px;
}

.works-title-container h2{
  z-index: 1;
}

.works-list{
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.work-container{
  width: 100%;
  clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
  background-color: #57378b;
  margin-bottom: 50px;
  height: fit-content;
  height: 350px;
  opacity: 0;
  transform: translateY(50px);
}

.work-container:hover {
  opacity: 0.5 !important;
  cursor: pointer;
}

.work-container img{
  width: 100%;
  height: 200px;
  min-height: 200px;
  object-fit: cover;
}

.media-container{
  width: 100%;
  height: 200px;
  min-height: 200px;
  overflow: hidden;
}

.eye-container{
  height: 200px;
  width: 80%;
  margin: 0px auto;
}

.work-text-area{
  padding: 5px 45px 20px 15px;
  height: 150px;
}

.work-description{
  text-align: left;
}

.work-title{
  font-size: 25px;
}

@media (min-width: 641px) {
  .work-container{
    width: 45%;
    height: 400px
  }
  .work-description{
    height: 200px
  }
  .title{
    text-align: left;
  }
}

@media (min-width: 1025px) {
  .work-container{
    width: 30%;
  }
  
}
</style>
