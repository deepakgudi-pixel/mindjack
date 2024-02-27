import Sketch from "./3Dmodule.js";

gsap.registerPlugin(ScrollTrigger);

let sketch = new Sketch({
    dom: document.getElementById("container"),
});

const lenis = new Lenis();
  
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ScrollTrigger.create({
    trigger: "wrap",
    // markers: true,
    start: "top top",
    scrub: 100,
    end: "bottom bottom",
    snap: 1/2,
    onUpdate: (self) => {
        sketch.model.rotation.y = 2 * Math.PI * self.progress;
        sketch.model.position.z = -1.5 * Math.sin(Math.PI * self.progress);
    }
});
