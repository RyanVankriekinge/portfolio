import{j as h,o as C,k as B,f as x,c as b,b as r,g as q,a as t,e as E,r as M}from"./index-K0O77jaj.js";import{T as N}from"./typeWriterAnimation-BwcthBjB.js";import{p as V}from"./prototypeSharedBites-DQscjoGV.js";import{p as $}from"./prototypeSkullfest-BCFwd5-v.js";import{p as z}from"./prototypeFlashQuiz-DIeuf4D6.js";const _={id:"eyeSVG",viewBox:"0 0 1000 1000"},F={__name:"EyeAnimationNoShape",setup(n){return C(()=>{const e=document.querySelector("#eyeSVG"),o=e.createSVGPoint(),c=m("#eye-left"),p=m("#eye-right");let a=null;const d=()=>{const i=o.matrixTransform(e.getScreenCTM().inverse());c.rotateTo(i),p.rotateTo(i),a=null},s=i=>{o.x=i.clientX,o.y=i.clientY,a||(a=requestAnimationFrame(d))};window.addEventListener("mousemove",s),B(()=>{window.removeEventListener("mousemove",s)});function m(i){const v=document.querySelector(i);return{rotateTo(u){const l=v.getBBox(),g=l.x+l.width/2,f=l.y+l.height/2,S=u.x-g,T=u.y-f,k=Math.atan2(T,S),w=v.querySelector(".pupil"),y=30,A=g+y*Math.cos(k),P=f+y*Math.sin(k);w.setAttribute("cx",A),w.setAttribute("cy",P)}}}}),(e,o)=>(x(),b("svg",_,o[0]||(o[0]=[r('<g id="eye-left" data-v-b5e84d69><circle class="eyeball" cx="250" cy="500" r="250" data-v-b5e84d69></circle><circle class="pupil" cx="250" cy="500" r="150" data-v-b5e84d69></circle></g><g id="eye-right" data-v-b5e84d69><circle class="eyeball" cx="750" cy="500" r="250" data-v-b5e84d69></circle><circle class="pupil" cx="750" cy="500" r="150" data-v-b5e84d69></circle></g>',2)])))}},G=h(F,[["__scopeId","data-v-b5e84d69"]]),I="/portfolio/assets/programmingTitle-Bs-HjnGm.webp",L={components:{EyeAnimationNoShape:G},methods:{goToPage(n){this.$router.push(n)}},mounted(){const n=document.querySelectorAll(".work-container");q.fromTo(n,{opacity:0,y:-50},{opacity:1,y:0,duration:1,stagger:.2,ease:"power3.out"});const e=document.querySelectorAll("h2.typing-animation");e.length>0&&N(e)}},W={class:"outer-wrapper"},j={class:"wrapper"},Q={class:"works-list"},X={class:"media-container eye-container"};function Y(n,e,o,c,p,a){const d=M("EyeAnimationNoShape");return x(),b("main",null,[t("div",W,[t("div",j,[e[12]||(e[12]=t("div",{class:"works-title-container"},[t("div",{class:"works-title-shape"}),t("h2",{class:"title typing-animation"},"Works")],-1)),t("div",Q,[t("div",{class:"work-container",onClick:e[0]||(e[0]=s=>a.goToPage("/sharedbites"))},e[6]||(e[6]=[r('<div class="media-container" data-v-8791a3f3><img src="'+V+'" alt="SharedBites" data-v-8791a3f3></div><div class="work-text-area" data-v-8791a3f3><h3 class="work-title" data-v-8791a3f3>SharedBites</h3><p class="work-description" data-v-8791a3f3>A recipe sharing website specifically designed to cook and share quick recipes.</p></div>',2)])),t("div",{class:"work-container",onClick:e[1]||(e[1]=s=>a.goToPage("/skullfest"))},e[7]||(e[7]=[r('<div class="media-container" data-v-8791a3f3><img src="'+$+'" alt="Skullfest" data-v-8791a3f3></div><div class="work-text-area" data-v-8791a3f3><h3 class="work-title" data-v-8791a3f3>Skullfest</h3><p class="work-description" data-v-8791a3f3>A mobile app design created for a fictional alternative music festival.</p></div>',2)])),t("div",{class:"work-container",onClick:e[2]||(e[2]=s=>a.goToPage("/programming-animation"))},e[8]||(e[8]=[r('<div class="media-container" data-v-8791a3f3><img src="'+I+'" alt="Programming animation" data-v-8791a3f3></div><div class="work-text-area" data-v-8791a3f3><h3 class="work-title" data-v-8791a3f3>Programming animation</h3><p class="work-description" data-v-8791a3f3>A 2D animation video about programming for children, made in a paper cut stop motion style. </p></div>',2)])),t("div",{class:"work-container",onClick:e[3]||(e[3]=s=>a.goToPage("/flashquiz"))},e[9]||(e[9]=[r('<div class="media-container" data-v-8791a3f3><img src="'+z+'" alt="FlashQuiz" data-v-8791a3f3></div><div class="work-text-area" data-v-8791a3f3><h3 class="work-title" data-v-8791a3f3>FlashQuiz</h3><p class="work-description" data-v-8791a3f3>A full-stack web app that allows users to host or play pre-made quizzes instantly.</p></div>',2)])),t("div",{class:"work-container",onClick:e[4]||(e[4]=s=>a.goToPage("/gsap-animations"))},[t("div",X,[E(d)]),e[10]||(e[10]=t("div",{class:"work-text-area"},[t("h3",{class:"work-title"},"Animations and transitions"),t("p",{class:"work-description"},"Researching the use of animations with text and shapes on a responsive website and using transitions in Vue.js")],-1))]),t("div",{class:"work-container",onClick:e[5]||(e[5]=s=>a.goToPage("/page-speed"))},e[11]||(e[11]=[t("div",{class:"media-container"},null,-1),t("div",{class:"work-text-area"},[t("h3",{class:"work-title"},"Page speed improvement"),t("p",{class:"work-description"},"Maximising web page speed based on the 3 core web vitals: CLS, LCP and INP.")],-1)]))])])])])}const K=h(L,[["render",Y],["__scopeId","data-v-8791a3f3"]]);export{K as default};
