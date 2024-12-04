<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import prototypeFlashQuiz from '../assets/img/prototypeFlashQuiz.png';
import prototypeSharedBites from '../assets/img/prototypeSharedBites.jpeg'


const items = [
 {
    type: 'image',
    media: prototypeFlashQuiz,
    title: 'FlashQuiz',
    description: 'An app that allows users to host or play pre-made quizzes instantly.',
    route: '/flashquiz',
  },
  {
    type: 'image',
    media: prototypeSharedBites,
    title: 'SharedBites',
    description: 'A recipe sharing website specifically designed to cook and share quick recipes.',
    route: '/sharedbites',
  },
  {
    type: 'image',
    media: prototypeFlashQuiz,
    title: 'GSAP animations',
    description: 'A prototype that researched the use of animations with text and shapes on a responsive website.',
    route: '/gsap-animations',
  },
  {
    type: 'image',
    media: prototypeFlashQuiz,
    title: 'Page speed improvement',
    description: 'Maximising web page speed based on the 3 core web vitals: CLS, LCP and INP',
    route: '/page-speed',
  },
];

const config = {
  itemsToShow: 1,
  wrapAround: true,
  centerMode: true,
};
</script>

<template>
  <Carousel v-bind="config">
    <Slide v-for="(item, index) in items" :key="index">
      <div class="carousel__item">
        <div class="media">
          <img v-if="item.type === 'image'" :src="item.media" :alt="item.title" />
          <video v-else-if="item.type === 'video'" :src="item.media" controls />
        </div>
        <div class="text">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped>
.carousel__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.carousel__item:hover {
  opacity: 0.8;
}

.media {
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
}

.media img,
.media video {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.text {
  text-align: center;
}
</style>
