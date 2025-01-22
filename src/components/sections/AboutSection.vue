<template>
  <section id="about" class="section">
    <img id="lian-pose" :src="LianPose" />
    <div id="text-container">
      <span id="hey-there">Hey there! &nbsp;I'm Lian</span>
      <div class="row">
        <div class="col-12 col-md-4 details-group">
          <div class="details-label">About me:</div>
          <p>I'm a recent graduate from McGill with a double major in Software Engineering and Psychology. I love combining tech with an understanding of how people think and interact with design. I’m passionate about web development, game development and anything that lets me use my creativity!</p>
        </div>
        <div class="col-12 col-md-4"></div>
        <div class="col-12 col-md-4" style="padding: 0">
          <div class="details-group">
            <div class="details-label">Name:</div>
            <div>Lian Lambert</div>
          </div>
          <div class="details-group">
            <div class="details-label">Age:</div>
            <div id="myAge">{{ age }} years</div>
          </div>
          <div class="details-group">
            <div class="details-label">Location:</div>
            <div>Montreal, Québec, Canada</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import LianPose from "../../assets/lian-pose.png"

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
<style scoped lang="scss">
#about {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 10;
  padding: 5vw;
  background-image: url("../../assets/shapes00.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#lian-pose {
  position: absolute;
  height: 70%;
  bottom: -37px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  &:hover {
    filter: brightness(110%);
  }

  &:hover ~ #text-container {
    transform: scale(1.1) rotate(-2deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
}

#text-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  background-color: #331c52;
  border-radius: 10px;
  padding: 2vw;
  color: #e2b1e2;

  &:hover {
    transform: scale(1.1) rotate(-2deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
}

#hey-there {
  font-size: 7vw;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  padding-bottom: 2vw;
  
  &:hover {
    color: white;
  }
}

.details-group {
  padding: 0 4vw 2vw 4vw;
  font-size: 17px;
  color:#bf8cbf;
  text-align: start;

  &:hover {
    transform: scale(1.05);
    
    .details-label {
      color: #e2b1e2;
    }
  }
}

.details-label {
  font-size: 23px;
  font-weight: bold;
}

@media (max-width: 767px) {
  #lian-pose {
    height: auto;
    max-width: 40%;
    transform: translateX(-10%);
  }
}
</style>
