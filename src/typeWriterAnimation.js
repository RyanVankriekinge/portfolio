import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export function TypeWriterAnimation(elements) {
  elements.forEach((heading, index) => {
    const text = heading.textContent;
    heading.textContent = "";
    gsap.to(heading, {
      text: text,
      duration: text.length * 0.1,
      ease: "none",
      delay: index * 0.5,
    });
  });
}
