<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import prototypeFlashQuiz from '../assets/img/prototypeFlashQuiz.png';
import prototypeSkullfest from '../assets/img/prototypeSkullfest/prototypeSkullfest.png';
import prototypeProgrammingAnimation from '../assets/videos/programmerenvoorkinderenv2.webm';
import prototypeSharedBites from '../assets/img/prototypeSharedBites.jpeg';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = [
 {
    type: 'image',
    media: prototypeSkullfest,
    title: 'Skullfest',
    description: 'A mobile app designed for a fictional alternative music festival.',
    route: '/skullfest',
  },
  {
    type: 'image',
    media: prototypeSharedBites,
    title: 'SharedBites',
    description: 'A recipe sharing website specifically designed to cook and share quick recipes.',
    route: '/sharedbites',
  },
  {
    type: 'video',
    media: prototypeProgrammingAnimation,
    title: 'Programming for children',
    description: 'A 2D animaton about programming for children, made in paper cut stop motion style.',
    route: '/programming-animation',
  },
  {
    type: 'image',
    media: prototypeFlashQuiz,
    title: 'FlashQuiz',
    description: 'A full-stack application that allows users to host or play pre-made quizzes instantly.',
    route: '/flashquiz',
  },
];

const config = {
  itemsToShow: 1,
  wrapAround: true,
  centerMode: true,
};

const navigateToItem = (route) => {
  router.push(route);
};
</script>

<template>
  <Carousel v-bind="config">
    <Slide v-for="(item, index) in items" :key="index">
      <div class="carousel__item" @click="navigateToItem(item.route)">
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
