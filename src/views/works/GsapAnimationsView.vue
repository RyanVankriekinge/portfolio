<script setup>
import { onMounted } from 'vue';
import { TypeWriterAnimation } from "@/typeWriterAnimation.js";
import EyeAnimation from "@/components/EyeAnimation.vue";

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
                  <h2 class="prototype-title title typing-animation">Dynamic animations and transitions</h2>
                  <div class="column">
                      <p>A prototype that researched the use of animations with text and shapes on a responsive website.</p><br>
                      <p style="display: inline;">Link to git repo:</p>
                      <a href="https://github.com/EHB-MCT/expertlab-pt3-RyanVankriekinge/" 
                      target="_blank" style="color: azure; font-family: 'Oswald', sans-serif; font-size: 16px;">Prototype: Dynamic transitions</a>
                      <h3>Goals:</h3>
                      <ul>
                          <li>Create dynamic animations for my portfolio page</li>
                          <li>Learning how to use different js animation libraries and how to choose the appropriate library for each individual project.</li>
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
                      <EyeAnimation></EyeAnimation>
                  </div>
              </div>
              <div class="section">
                  <h2 class="prototype-title title typing-animation">Process: Design</h2>
                  <p>Since this prototype was the first contribution to my portfolio website, I started by designing this website in Adobe XD. This design
                    was based on my own personal style guide, which I created earlier for my curriculum vitae.
                  </p><br>
                  <p>After designing the page, I started thinking about which animation would look good on each element. I put these in a list and added them
                    to my planning.
                  </p>
              </div>
              <div class="section">
                <h2 class="prototype-title title typing-animation">Animations</h2>
                <h3>Defining requirements</h3>
                <p class="list-header">I had the following needs for my animations:</p>
                <ul>
                  <li>Responsiveness</li>
                  <li>Beginner-friendly library</li>
                  <li>Performance</li>
                  <li>Support for major browsers</li>
                </ul>
                <p class="list-header">Key features I wanted to implement:</p>
                <ul>
                  <li>Page transitions on router change</li>
                  <li>Hover effects on navigation and buttons</li>
                  <li>Scrolling animations</li>
                  <li>Element transformations</li>
                </ul>
                <h3>Choosing a librarie</h3>
                <p>To choose a library, I looked at some of the most commonly used animation libraries. I compared these on beginner-friendliness, performance, use case, support,
                  integration with the framework I'll be using (which is Vue) and how many resources are available. I chose GSAP because it's perfect for creating complex animations like scroll 
                  effects and timelines. It’s beginner-friendly, but powerful compared to other libraries and it has a big community with a lot of free resources. 
                  For simple transitions like fades or hovers,
                   I relied on CSS and Vue’s built-in transition system, this is more lightweight and easy to use for basic animations without
                    extra complexity.</p>
                <table class="animations-libraries-table">
                  <thead>
                      <tr>
                          <th>Library</th>
                          <th>Complexity</th>
                          <th>Performance</th>
                          <th>Use Case</th>
                          <th>SVG Support</th>
                          <th>Physics Support</th>
                          <th>Integration with Vue</th>
                          <th>Community</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Vanilla JS & CSS</td>
                          <td>Low</td>
                          <td>High (direct DOM control)</td>
                          <td>Simple animations, CSS transitions</td>
                          <td>Basic (CSS only)</td>
                          <td>Custom-built</td>
                          <td>Native to Vue (templates, lifecycle hooks)</td>
                          <td>Very large, many free resources</td>
                      </tr>
                      <tr>
                          <td>GSAP</td>
                          <td>Low</td>
                          <td>Very High (optimized engine)</td>
                          <td>Advanced 2D/3D animations, UI/UX effects</td>
                          <td>Excellent</td>
                          <td>Yes (via plugins like Physics2D)</td>
                          <td>Seamless with Vue; Vue-specific plugins available</td>
                          <td>Large, rich resources, active forums</td>
                      </tr>
                      <tr>
                          <td>Framer Motion</td>
                          <td>Moderate (React focus)</td>
                          <td>High (React-optimized)</td>
                          <td>React animations, UI/UX in React apps</td>
                          <td>Good</td>
                          <td>Basic</td>
                          <td>Not designed for Vue; significant adjustments needed</td>
                          <td>Large for React, not for Vue</td>
                      </tr>
                      <tr>
                          <td>two.js</td>
                          <td>Low</td>
                          <td>High (2D focused)</td>
                          <td>Vector-based animations, artistic 2D</td>
                          <td>Excellent</td>
                          <td>Limited</td>
                          <td>Works in Vue lifecycle hooks (e.g., mounted)</td>
                          <td>Moderate, pretty niche, with good docs</td>
                      </tr>
                      <tr>
                          <td>three.js</td>
                          <td>High (requires 3D knowledge)</td>
                          <td>High (GPU-accelerated)</td>
                          <td>3D web animations, interactive graphics</td>
                          <td>Limited</td>
                          <td>Limited</td>
                          <td>Well-supported with libraries like vue-threejs</td>
                          <td>Very large, extensive tutorials and examples</td>
                      </tr>
                      <tr>
                          <td>Anime.js</td>
                          <td>Low</td>
                          <td>High</td>
                          <td>Artistic, timeline-based 2D animations</td>
                          <td>Excellent</td>
                          <td>No</td>
                          <td>Works well with Vue lifecycle hooks (e.g., mounted)</td>
                          <td>Moderate, good tutorials and examples</td>
                      </tr>
                  </tbody>
                </table>
                <h3>Installation methods</h3>
                <p class="list-header">GSAP has 3 popular installation methods:</p>
                <ul>
                  <li>CDN: Quick set-up for small projects without version control</li>
                  <li>NPM: Best for projects using frameworks like Vue, bigger community than Yarn</li>
                  <li>Yarn: Faster and more secure than NPM, but less resources</li>
                </ul>
                <p style="margin-top: 15px;">I chose NPM for its large community and compatibility with other dependencies in my project.</p>
            </div>
            <div class="section">
              <h2 class="prototype-title title typing-animation">Development</h2>
                <h3>Animations with Vue</h3>
                <p>I used Vue's built-in animation system for simple transitions (fades and slides)</p>
                <h3>Animation scripts used with GSAP</h3>
                <ul>
                  <li>gsap.from: Animating from defined starting state</li>
                  <li>gsap.to: Animating to a defined ending state</li>
                  <li>gsap.fromTo: Specifies both start and end state</li>
                  <li>gsap.set: immediately applies properties (like a hold keyframe)</li>
                  <li>ScrollTrigger: Triggers animations based on the user's scroll position</li>
                </ul>
                <h3>Animation techniques used with GSAP</h3>
                <ul>
                  <li>Easing: For more natural animations</li>
                  <li>Staggers: Adds delay when animating multiple elements with the same animation (e.g. the page with my works)</li>
                  <li>Timeline: Creating sequenced animations</li>
                </ul>
            </div>
            <div class="section">
              <h2 class="prototype-title title typing-animation">Challenges</h2>
              <table class="challenges-table">
                <thead>
                    <tr>
                        <th>Challenge</th>
                        <th>Resolution</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mobile menu animation not showing</td>
                        <td>Adjusted animation starting position using a larger value for <code>x</code> to fully hide elements off-screen.</td>
                    </tr>
                    <tr>
                        <td>SVG shapes not rendering</td>
                        <td>Implemented <code>viewBox</code> in SVG for proper scaling and visibility.</td>
                    </tr>
                    <tr>
                        <td>Responsiveness issues on small screens</td>
                        <td>Used <code>min-height</code> and adjusted container paddings for better alignment.</td>
                    </tr>
                    <tr>
                        <td>Overlapping text and shapes</td>
                        <td>Added margin between sections and tested scaling behavior.</td>
                    </tr>
                    <tr>
                        <td>Scroll-triggered animations appearing at incorrect times</td>
                        <td>Adjusted trigger points and animation end positions for natural flow.</td>
                    </tr>
                    <tr>
                        <td>Elements in group not staggered</td>
                        <td>Used <code>&gt; *</code> selector for child elements to apply GSAP stagger efficiently.</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div class="section">
              <h2 class="prototype-title title typing-animation">Reflection</h2>
              <p>This sprint allowed me to gain hands-on experience with GSAP, ScrollTrigger, and Vue’s animation system, refining both my technical skills and understanding of responsiveness.</p>
              <p>In the future, I want to further optimise my website’s performance and explore more advanced GSAP techniques.</p>
            </div>
          </div>
      </div>
  </main>
</template>

<style scoped>
ul{
  width: 100%;
}

p{
  margin-bottom: 15px;
  width: 100%;
}

.list-header{
  margin-top: 15px;
  margin-bottom: 0px !important;
}

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

.animations-libraries-table {
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    text-align: left;
}

.animations-libraries-table th,
.animations-libraries-table td {
    padding: 12px;
    border: 1px solid #ddd;
}

.animations-libraries-table th {
    background-color: #57378b;
}

.challenges-table {
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    text-align: left;
}

.challenges-table th,
.challenges-table td {
    padding: 12px;
    border: 1px solid #ddd;
}

.challenges-table th {
    background-color: #57378b;
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