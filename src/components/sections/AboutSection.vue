<template>
  <section id="about" class="section">
    <div id="text-container">
      <div id="hey-there">Hey there! &nbsp;I'm Lian</div>
      <div class="row text-start" style="flex-grow: 1;">
      <div class="col-12 col-md-4 details">
        <div><b>About me:</b></div>
        I'm a recent graduate from McGill with a double major in Software Engineering and Psychology. I love combining tech with an understanding of how people think and interact with design. I’m passionate about web development, game development and anything that lets me use my creativity!
      </div>
      <div class="col-12 col-md-4"></div>
      <div class="col-12 col-md-4 details d-flex flex-column justify-content-center">
        <div><b>Name:</b></div>
        <div class="mb-2">Lian Lambert</div>
        <div><b>Age:</b></div>
        <div id="myAge" class="mb-2">{{ age }} years</div>
        <div><b>Location:</b></div>
        <div class="mb-2">Montreal, Québec, Canada</div>
      </div>
    </div>
    </div>
    
    <img id="lian-pose" src="../../assets/lian-pose.png" />
  </section>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";

const navbar = ref(null);
const aboutSection = ref(null);

const birthYear = 2001;
const currentYear = new Date().getFullYear();
const age = computed(() => currentYear - birthYear);

onMounted(() => {
  // adjust section height to fill page
  navbar.value = document.getElementById("nav-all");
  aboutSection.value = document.getElementById("about");

  if (aboutSection.value && navbar.value) {
    const viewportHeight = window.innerHeight;
    aboutSection.value.style.height = `${viewportHeight - 35}px`;
  }
});
</script>
<style scoped>
#about {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  padding: 5vw;
  background-image: url("../../assets/shapes00.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#text-container {
  border-radius: 10px;
  padding: 2vw;
  background-color: rgba(135, 83, 135, 0.9);
  color: black;
}

#hey-there {
  font-size: 7vw;
  color: black;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

#lian-pose {
  position: absolute;
  height: 70%;
  bottom: -37px;
  left: 50%;
  transform: translateX(-50%);
}

.details {
  padding: 0 5vw 3vw 5vw;
  font-size: 17px;
}

@media (max-width: 768px) {
  #lian-pose {
    height: auto;
    max-width: 40%;
    transform: translateX(-10%);
  }
}
</style>
