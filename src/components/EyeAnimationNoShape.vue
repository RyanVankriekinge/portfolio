<script setup>
import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  const svg = document.querySelector("#eyeSVG");
  const mouse = svg.createSVGPoint();

  const leftEye = createEye("#eye-left");
  const rightEye = createEye("#eye-right");

  let requestId = null;

  const onFrame = () => {
    const point = mouse.matrixTransform(svg.getScreenCTM().inverse());
    leftEye.rotateTo(point);
    rightEye.rotateTo(point);
    requestId = null;
  };

  const onMouseMove = (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    if (!requestId) {
      requestId = requestAnimationFrame(onFrame);
    }
  };

  window.addEventListener("mousemove", onMouseMove);

  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", onMouseMove);
  });

  function createEye(selector) {
    const element = document.querySelector(selector);

    return {
      rotateTo(point) {
        const bbox = element.getBBox();
        const centerX = bbox.x + bbox.width / 2;
        const centerY = bbox.y + bbox.height / 2;

        const dx = point.x - centerX;
        const dy = point.y - centerY;

        const angle = Math.atan2(dy, dx);
        const pupil = element.querySelector(".pupil");

        const radius = 30;
        const pupilX = centerX + radius * Math.cos(angle);
        const pupilY = centerY + radius * Math.sin(angle);

        pupil.setAttribute("cx", pupilX);
        pupil.setAttribute("cy", pupilY);
      },
    };
  }
});
</script>

<template>
    <svg id="eyeSVG" viewBox="0 0 1000 1000">
        <g id="eye-left">
            <circle class="eyeball" cx="250" cy="500" r="250" />
            <circle class="pupil" cx="250" cy="500" r="150" />
        </g>
        <g id="eye-right">
            <circle class="eyeball" cx="750" cy="500" r="250" />
            <circle class="pupil" cx="750" cy="500" r="150" />
        </g>
    </svg>
</template>

<style scoped>
    svg {
    height: 100%;
    width: 100%;
    display: block;
    }

    #diamond-shape {
    stroke-width: 20px;
    stroke: white;
    }

    .eyeball {
    fill: #1c1c1b;
    stroke-width: 20;
    stroke: #ffffff;
    }

    .pupil {
    fill: rgb(255, 255, 255);
    }

    .outer-wrapper,
    .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    }
</style>
