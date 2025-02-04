<template>
  <section id="about" class="section">
    <!-- Image -->
    <img id="lian-pose" :src="LianPose" alt="Lian striking a pose" />

    <!-- Text-Container -->
    <div id="text-container" :class="{ showAnimationPulse: showAnimationPulse }">
      <!-- Hey There! -->
      <span id="hey-there">Hey there! &nbsp;I'm Lian</span>

      <!-- Other Text -->
      <div class="row">
        <!-- Bio -->
        <div class="col-12 col-md-4 details-group">
          <!-- eslint-disable-next-line -->
          <p>I'm a recent graduate from<br class="conditional-br"><b>McGill</b> with a double major in <b>Software&nbsp;Engineering</b> and <b>Psychology</b>. I love blending tech with human behavior to create designs that make an impact! I’m passionate about <b>web&nbsp;dev</b>, &nbsp;<b>game&nbsp;dev</b> and anything that lets me use my creativity!</p>
        </div>

        <!-- Spacer -->
        <div class="col-12 col-md-4"></div>

        <!-- Stats -->
        <div class="col-12 col-md-4" style="padding: 0">
          <div class="details-group">
            <span class="details-label">Name: &nbsp;</span>
            <span><b>Lian&nbsp;Lambert</b></span>
          </div>
          <div class="details-group">
            <span class="details-label">Age: &nbsp;</span>
            <span id="myAge">
              <b>{{ age }}&nbsp;years</b>
            </span>
          </div>
          <div class="details-group">
            <span class="details-label">Location: &nbsp;</span>
            <span><b>Montreal,&nbsp;QC</b></span>
          </div>

          <!-- Icons -->
          <div class="d-flex align-items-center details-group">
            <span class="details-label">Links: &nbsp;</span>
            <a class="icon-container" :href="RESUME_LINK" target="_blank" alt="Resume icon">
              <img :src="SVG_LINKS.resume" class="icon" />
            </a>
            <a class="icon-container" :href="GITHUB_LINK" target="_blank" alt="Github icon">
              <img :src="SVG_LINKS.github" class="icon" />
            </a>
            <a class="icon-container" :href="LINKEDIN_LINK" target="_blank" alt="LinkedIn icon">
              <img :src="SVG_LINKS.linkedin" class="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { RESUME_LINK, GITHUB_LINK, LINKEDIN_LINK, SVG_LINKS } from "@/constants";
import LianPose from "@/assets/images/lian-pose-edited.png";

const navbar = ref(null);
const aboutSection = ref(null);
const showAnimationPulse = ref(false);

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

  // pulse textbox on load
  setTimeout(() => {
    showAnimationPulse.value = true;

    setTimeout(() => {
      showAnimationPulse.value = false;
    }, 600);
  }, 1000);
});
</script>
<style scoped lang="scss">
* {
  transition: all 0.3s ease;
}

#about {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 10;
  padding: 5vw;
  background-image: url("@/assets/images/shapes.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#lian-pose {
  position: absolute;
  height: 70%;
  bottom: -37px;
  left: 50%;
  transform: translateX(-55%);
  z-index: 100;

  &:hover {
    filter: brightness(110%);
  }

  &:hover ~ #text-container {
    transform: scale(1.1) rotate(-1.5deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 992px) {
    &:hover ~ #text-container {
      transform: scale(1.05) rotate(-1.5deg);
    }
  }

  @media (max-width: 767px) {
    height: auto;
    max-width: 65%;
    transform: translateX(-40%);
  }
}

#text-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  background-color: var(--darkest-purple);
  border-radius: 10px;
  padding: 3vw;

  &:hover {
    transform: scale(1.1) rotate(-1.5deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 992px) {
    &:hover {
      transform: scale(1.05) rotate(-1.5deg);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }
  }
}

#hey-there {
  font-size: 7vw;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: var(--light-purple);

  &:hover {
    transform: scale(1.1);
    color: white;
  }
}

.details-group {
  padding: 1vw 3vw;
  font-size: 17px;
  color: var(--medium-purple);
  text-align: start;

  b {
    margin: 5px;
    margin-left: 0;
    font-size: 19px;
    border-radius: 5px;
  }

  &:hover {
    transform: scale(1.1);

    b {
      padding: 5px 10px;
      color: var(--dark-purple);
      background-color: var(--medium-purple);
    }

    .details-label {
      color: var(--lightest-purple);
    }

    .icon-container {
      padding: 0px;
      margin: 0 5px;
      border-radius: 5px;
      background-color: var(--medium-purple);
    }

    .icon {
      // var(--dark-purple)
      filter: brightness(0) saturate(100%) invert(14%) sepia(20%) saturate(3529%) hue-rotate(237deg) brightness(90%) contrast(100%);
    }
  }

  @media (max-width: 992px) {
    font-size: 15px;

    b {
      margin: 3px;
      font-size: 17px;
    }

    &:hover {
      transform: scale(1.05);

      b {
        padding: 3px 5px;
      }

      .icon-container {
        padding: 0px;
        margin: 0 3px;
      }
    }
  }
}

.icon-container:hover {
  transform: scale(1.1);
}

.icon {
  // var(--medium-purple)
  filter: brightness(0) saturate(100%) invert(91%) sepia(88%) saturate(7026%) hue-rotate(216deg) brightness(80%) contrast(84%);
  width: 25px;
  height: 25px;
  margin: 5px 10px;

  @media (max-width: 992px) {
    width: 21px;
    height: 21px;
    margin: 3px 6px;
  }
}

.details-label {
  font-size: 23px;
  font-weight: bold;
  color: var(--light-purple);

  @media (max-width: 992px) {
    font-size: 20px;
  }
}

.conditional-br {
  display: inline;
}

@media (max-width: 992px) {
  .conditional-br {
    display: none;
  }
}

.showAnimationPulse {
  animation: scaleAndTilt 0.6s ease-out;
}

@keyframes scaleAndTilt {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(-1.5deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}
</style>
