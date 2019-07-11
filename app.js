
const app = function () {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".color-bubbles");
    const colors = [
      "#60d394",
      "#d36060",
      "#1d3829",
      "#6e0ea5",
      "#7b639b",
      "#4cc847"
    ];
  
    pads.forEach((pad, index) => {
      pad.addEventListener("click", function() {
        sounds[index].currentTime = 0;
        sounds[index].play();

        createBubble(index);
      });
    });
  
    const createBubble = index => {
      //Create bubbles
      const bubble = document.createElement("div");
      visual.appendChild(bubble);
      bubble.style.backgroundColor = colors[index];
      bubble.style.animation = `fly 1s ease`;
      bubble.addEventListener("animationend", function() {
        visual.removeChild(this);
      });
    };
 }

 app();