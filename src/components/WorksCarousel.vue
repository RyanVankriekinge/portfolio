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
  },
  {
    type: 'image',
    media: prototypeSharedBites,
    title: 'SharedBites',
    description: 'An app that allows users to host or play pre-made quizzes instantly.',
  },
  {
    type: 'image',
    media: prototypeFlashQuiz,
    title: 'GSAP animations',
    description: 'An app that allows users to host or play pre-made quizzes instantly.',
  },
  {
    type: 'image',
    media: prototypeFlashQuiz,
    title: 'Page speed improvement',
    description: 'An app that allows users to host or play pre-made quizzes instantly.',
  },
];

const config = {
  itemsToShow: 1.5,
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
