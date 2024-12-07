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
                    <div class="column">
                      <h2 class="prototype-title title typing-animation">SharedBites</h2>
                    <h4>"A Spoonful of Sharing and a Plate Full of Joy"</h4>
                        <p>SharedBites is a recipe sharing website that focuses on people who don't have a lot of time to cook and people who want to share
                           their quick recipes in an online cooking community.
                        </p><br>
                        <p style="display: inline;">Link to git repo:</p>
                        <a href="https://github.com/EHB-MCT/expertlab-pt2-RyanVankriekinge/" 
                        target="_blank" style="color: azure; font-family: 'Oswald', sans-serif; font-size: 16px;">Prototype: SharedBites</a>
                        <h3>Objectives:</h3>
                        <ul>
                            <li>Creating a user authentication system with login and registration functionality</li>
                            <li>Uploading recipes that are linked to user accounts</li>
                            <li>Overview page with all recipes that can be filtered on assigned tags, like 'Gluten-free'</li>
                            <li>Detail page for each recipe that displays an image, general information, ingredients and instructions</li>
                        </ul>
                        <h3>Used technologies:</h3>
                        <ul>
                            <li>Python: Core programming language for the project</li>
                            <li>Django: Python web framework</li>
                        </ul>
                    </div>
                    <div class="column">
                        <img class="work-top-image" src="../../assets/img/prototypeSharedBites/breakfast.webp">
                    </div>
                </div>
                <div class="section">
                    <h2 class="prototype-title title typing-animation">Concept</h2>
                    <h3>Problem</h3>
                      <p>In today’s busy world, people are increasingly seeking quick, easy, and affordable meal ideas. While there are numerous recipe sites online, they often come with barriers such as subscription fees, excessive ads, or lack of community features. Many of these recipes contain a lot of unnecessary information. It's almost like you have to read an entire backstory for each dish before you can get to the actual recipe. This makes it challenging to find recipes for home cooks with limited time on their hands.
                      </p>
                    <h3>Research</h3>
                    <p style="width: 100%;">The research for this project consists of two main things:</p>
                    <ul>
                      <li>What do users look for in a recipe app?</li>
                      <li>How can I make the recipe app as appealing and user friendly as possible?</li>
                    </ul><br>
                    <p style="margin-top: 20px;">The most important thing I found, is that people usually prioritise the ingredients and instructions, and not much attention is paid to the backstory or extra information. Because of this, I want users to be able to upload recipes without the extensive backstory. I will only include the key elements for a recipe page: An image, the ingredients, the instructions and a title. Because users have different dietary needs, I will also create the option to use tags for the recipes which they can also be filtered on.
                    </p><br>
                    <p>I also researched how people prefer to read their recipes. My conclusion is that a lot of people prefer using desktop over using their phone, because a phone screen turns off quickly. While cooking, their hands can get dirty or wet, which can be inconvenient when they have to unlock their phone regularly. A lot of people prefer using desktop or printing their recipes on paper. 
                    </p>
                    <img src="../../assets/img/prototypeSharedBites/sharedBitesRecipePage.webp">
                </div>
                <div class="section">
                  <h2 class="prototype-title title typing-animation">Process: Design</h2>
                  <p>For the design of the webpage, I wanted to create something that puts a spotlight on the recipes themselves, but also with a typical culinary vibe. To achieve this, I analysed several other websites for recipes, restaurants, or other food related platforms and saw which elements create the typical look and feel of a culinary website. To match the mission of the website, which is to find recipes quick and easily without any unnecessary information or distractions, I created a minimalistic UI and lay-out, that really focusses on the recipes without any distracting website elements.
                  </p>
                  <img src="../../assets/img/prototypeSharedBites/homepageDesign.webp">
                </div>
                <div class="section">
                    <div class="column">
                        <h2 class="prototype-title title typing-animation">Process: Development</h2>
                        <h3>Classes</h3>
                        <p>I created a class diagram (UML) in draw.io and made sure to include all the important classes that are needed to have users, recipes and tags that
                          can be used to classify and filter the recipes.
                        </p>
                        <h3>MVT (Model - View - Template) design pattern</h3>
                        <p>A commonly used design pattern in Django is the MVT (Model-View-Template) pattern, which is similar to the MVC model (which I have used before, in Node.js with Express). The Model handles the database structure and data logic, interacting with database using ORM. The View contains the business logic, processing user requests and fetching the necessary data. Finally, the Template is responsible for showing the data to users through HTML-rendered web pages.</p>
                        <h3>Authentication in Django</h3>
                        <p>For SharedBites, I used Django's built-in authentication system to manage user login, registration, and password handling. The admin interface allowed me to test and manage users directly in the browser. To have a consistent design across the entire website, I created custom forms and templates for authentication pages like login, registration, and password change (which can be automatically generated by Django, but didn't provide the necessary form fields and web page style that I was looking for.).</p>
                    </div>
                    <div class="column">
                        <img src="../../assets/img/prototypeSharedBites/classdiagram.webp">
                        <img src="../../assets/img/prototypeSharedBites/admin.webp">
                    </div>
                </div>
                <div class="section">
                  <h2 class="prototype-title title typing-animation">Reflection</h2>
                  <h3>Challenges and next steps</h3>
                  <table class="challenges-table">
                      <thead>
                          <tr>
                              <th>Challenge</th>
                              <th>Resolution</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Default sign-up form missing email field</td>
                              <td>Created a custom form to include the email field.</td>
                          </tr>
                          <tr>
                              <td>Default authentication form styling doesn't fit my website's design</td>
                              <td>Designed custom templates to replace Django’s default admin-style forms.</td>
                          </tr>
                          <tr>
                              <td>Django admin only shows User table</td>
                              <td>Added my own tables to admin.py , which causes them to be displayed in the admin.</td>
                          </tr>
                          <tr>
                              <td>Static files not loading correctly</td>
                              <td>Disabled CSS caching and verified static file configurations.</td>
                          </tr>
                          <tr>
                              <td>Tag iteration issues in templates</td>
                              <td>Iterating over a many-to-many field is different than iterating over a regular array, I had to append <code>.all()</code> in the template loop.</td>
                          </tr>
                          <tr>
                              <td>Migration issues after changing fields from Recipe app</td>
                              <td>The types of some fields from the old recipes were different from the new ones. I had to clear the database of old recipes and 
                                create some new ones that had the correct types of fields.
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  <h3>Future improvements</h3>
                  <ul>
                      <li>Using another database management system, because SQLite doesn't scale well.</li>
                      <li>Creating a mobile version.</li>
                  </ul>
                  <img src="../../assets/img/prototypeSharedBites/overview.webp">
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

h4{
  width: 100%;
  font-family: 'Oswald', sans-serif;
  font-style: italic;
  color: #B9A2CE;
  margin-bottom: 10px;
  margin-top: 0px
}

.section {
  opacity: 0;
  transform: translateY(50px);
}

.section img {
  opacity: 0;
  transform: translateY(50px);
}

ul{
  width: 100%;
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
</style>
