<template>
  <div class="col-12 col-lg-6 p-0">
    <a :href="linkToOpen" target="_blank" class="project-entry centered">
      <div class="project-entry-image-container">
        <img :src="image" class="project-entry-image" />
      </div>
      <div class="project-entry-details">
        <h3 class="mb-2 grow-on-hover">{{ title }}</h3>
        <div class="grow-on-hover">{{ description }}</div>
        <div 
          v-if="props.demoLink" 
          class="watch-demo" 
          @mouseenter="onWatchDemoEnter" 
          @mouseleave="onWatchDemoExit"
          @touchstart="onWatchDemoEnter" 
          @touchend="onWatchDemoExit">
          Watch Demo
        </div>
      </div>
    </a>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  link: {
    required: true,
    type: String,
  },
  demoLink: {
    required: false,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
});

import { ref } from "vue";

const linkToOpen = ref(props.link);

// to do: fix this for mobile too
function onWatchDemoEnter() {
  linkToOpen.value = props.demoLink;
}

function onWatchDemoExit() {
  linkToOpen.value = props.link;
}

</script>
<style scoped lang="scss">
.project-entry {
  margin: 15px;
  padding: 10px;
  border-radius: 10px;
  border: 4px solid black;
  color: var(--dark-purple);
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
  

  &:hover {
    background-color: black;
    transform: scale(1.01) translateY(-10px);
    color: var(--medium-purple);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);

    .watch-demo {
      margin-top: 10px;
      border-radius: 5px;
      padding: 5px 15px;
      color: var(--dark-purple);
      background-color: var(--medium-purple);
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
}

.project-entry-image-container {
  padding: 10px;

  &:hover {
    transform: scale(1.05);
  }
}

.project-entry-image {
  width: 200px;
  height: auto;
  object-fit: cover;
  border-radius: 10%;
  overflow: hidden;
}

.project-entry-details {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: left;
}

.grow-on-hover:hover {
  transform: scale(1.05);
}

.watch-demo {
  font-size: 17px;
  font-weight: 700;
  color: black;
  padding: 5px 0;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
