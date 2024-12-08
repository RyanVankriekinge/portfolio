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
                  <div class="column">
                    <h2 class="prototype-title title typing-animation">Pagespeed optimalisation</h2>

                      <p>Optimalising the pagespeed of my portfolio website.</p><br>
                      <p style="display: inline;">Link to git repo:</p>
                      <a href="https://github.com/EHB-MCT/expertlab-pt4-RyanVankriekinge/" 
                      target="_blank" style="color: azure; font-family: 'Oswald', sans-serif; font-size: 16px;">Prototype: Pagespeed</a>
                      <h3>Goals:</h3>
                      <ul>
                          <li>Optimise page speed.</li>
                          <li>Find the best tools to investigate page speed.</li>
                          <li>Find out which methods are the best for page speed optimalisation.</li>
                      </ul>
                  </div>
                  <div class="column">
                      <img src="../../assets/img/prototypePagespeed/lighthouse.webp">
                  </div>
              </div>
              <div class="section">
                  <h2 class="prototype-title title typing-animation">Investigating page speed</h2>
                  <h3>Tools</h3>
                  <p>Before being able to improve my pagespeed, it was important to be able to see what the current pagespeed is and where the biggest issues lie. I researched which
                    tools are popular and chose one based on the different features of available tools.
                  </p>
                  <h3>Devtools</h3>
                  <p>Inside Devtools, there are some useful tabs which I have already used in the past. I'm already familiar with the Network tab, where all the requests are visible and their time can 
                    be compared. After some research, I also found out that there are several other tabs that can be used to evaluate or optimise the pagespeed:
                  </p>
                  <ul>
                    <li>Performance tab: This tab shows how good the website performes for the core web vitals.</li>
                    <li>Coverage tab: This tab shows how much unused code each script contains.</li>
                  </ul>
                  <h3>More advanced tools to measure and improve pagespeed</h3>
                  <p>There are more advanced tools that can be used to measure pagespeed. Some popular tools I found were:</p>
                  <ul>
                    <li>Google Lighthouse (In DevTools in Google chrome)</li>
                    <li>GTMetrix</li>
                    <li>Pingdom tools</li>
                    <li>WebPage Test</li>
                  </ul>
                  <p>I chose to use Google Lighthouse because it is very accesible (due to it not being a seperate tool or website, it is built in in Google chrome DevTools), because it gives
                    advice on how to improve the page speed, because it has the ability to test mobile performance and because it is free and open source. None of the other tools checked all these
                    boxes.
                  </p>
              </div>
              <div class="section">
                <h2>Examples of tests</h2>
                <div class="column">
                  <h3>Network</h3>
                  <img src="../../assets/img/prototypePagespeed/network.webp">
                  <h3>Lighthouse</h3>
                  <img src="../../assets/img/prototypePagespeed/lighthouse.webp">
                </div>
                <div class="column">
                  <h3>Performance</h3>
                  <img src="../../assets/img/prototypePagespeed/performance.webp">
                  <h3>Coverage</h3>
                  <img src="../../assets/img/prototypePagespeed/coverage.webp">
                </div>
              </div>
              <div class="section">
                <h2 class="prototype-title title typing-animation">How to improve pagespeed</h2>
                <p>When researching page speed optimalisation, I noticed the main focus is always on the three core web Vitals:
                </p>
                  <ul>
                    <li>LCP (Largest Contentful Paint): Loading time of the largest visible element on the page</li>
                    <li>FIP (First Input Delay): How fast the website reacts to user input</li>
                    <li>CLS (Cumulative Layout Shift): Visual stability of the elements</li>
                  </ul>
                  <p style="margin-top: 20px; margin-bottom: 0px;">Based on the tips I found to optimise these three, and  the advise that Google ligthouse gave, I implemented the following changes:</p>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Core Web Vital</th>
                      <th>Improvements Implemented</th>
                      <th>Effect/Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Largest Contentful Paint (LCP)</td>
                      <td>
                        - Minified CSS and JavaScript.<br>
                        - Lazy-loaded images and animations.<br>
                        - Compressed assets using Gzip.<br>
                        - Optimized image formats and sizes.<br>
                        - Preloaded fonts and stylesheets.
                      </td>
                      <td>
                        - Reduced loading time for the largest visible elements.<br>
                        - Improved initial render time, especially on mobile.<br>
                        - Prevented delays caused by late network requests.
                      </td>
                    </tr>
                    <tr>
                      <td>First Input Delay (FID)</td>
                      <td>
                        - Deferred and asynchronously loaded third-party JavaScript (e.g., GSAP’s ScrollTrigger).<br>
                        - Minimized JavaScript execution time by shortening animation timelines and reducing unused code.
                      </td>
                      <td>
                        - Reduced blocking time caused by heavy JavaScript execution.<br>
                        - Allowed faster interaction response times.
                      </td>
                    </tr>
                    <tr>
                      <td>Cumulative Layout Shift (CLS)</td>
                      <td>
                        - Assigned fixed sizes/aspect ratios to images and videos.<br>
                        - Set fixed heights for sections to stabilize layout.<br>
                        - Preloaded critical assets (fonts, styles).<br>
                        - Grouped and minimized CSS.
                      </td>
                      <td>
                        - Improved visual stability by preventing unexpected shifts during page load.<br>
                        - Reduced layout jumps caused by late asset rendering.
                      </td>
                    </tr>
                    <tr>
                      <td>Other Enhancements</td>
                      <td>
                        - Used Vite for faster builds and optimized production output.<br>
                        - Tested different tools (e.g., Lighthouse).<br>
                        - Experimented with throttling for scroll-triggered animations.<br>
                        - Investigated dynamic imports for lighter initial loads.
                      </td>
                      <td>
                        - Streamlined development and optimized code delivery for smaller bundles and faster site performance overall.<br>
                        - Limited resource-intensive scripts from overloading the browser.<br>
                        - Improved page performance for non-critical assets.
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  text-align: left;
  width: 100%;
}

h3{
  text-align: left;
  width: 100%;
  margin-top: 20px;
}

.table {
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    text-align: left;
}

.table th,
.table td {
    padding: 12px;
    border: 1px solid #ddd;
}

.table th {
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