<template>
  <div class="col-12 col-sm-6 col-lg-4 p-0">
    <div class="project-entry">
      <div class="">
        <!-- media -->
        <div>
          <a :href="props.demoLink" target="_blank" rel="noopener noreferrer">
            <img :src="image" class="project-image" />
          </a>
        </div>

        <!-- details -->
        <div class="project-details">

          <!-- title and description -->
          <h3 class="project-title"><a :href="props.primaryLink">{{ title }}</a></h3>
          <p>{{ description }}</p>

          <!-- links -->
          <div class="d-flex">
            <a  v-if="props.demoLink" :href="props.demoLink" target="_blank" class="project-link centered">
              Watch Demo
            </a>
            <a v-if="props.githubLink" :href="props.githubLink" target="_blank" class="project-link centered">
              <img src="../images/github_white.svg" alt="github"  class="project-entry-icon"/>
            </a>
            <a v-if="props.otherLink" :href="props.otherLink" target="_blank" class="project-link centered">
              <img src="../images/link_white.svg" alt="link"  class="project-entry-icon"/>
            </a>
          </div>
        </div>
      </div>
<!-- maybe bring back one day
      <div class="hashtags">
        <span style="color: var(--dark-purple)"> #unity </span>
        <span style="color: var(--darkest-purple)"> #gamedev </span>
      </div> 
-->
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    required: true,
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
  primaryLink: {
    required: false,
    type: String,
  },
  githubLink: {
    required: false,
    type: String,
  },
  demoLink: {
    required: false,
    type: String,
  },
  otherLink: {
    requied: false,
    type: String,
  },
  demoVideo: {
    requied: false,
    type: String,
  }
});
</script>
<style scoped lang="scss">
.project-entry {
  margin: 15px;
  padding: 20px;
  border-radius: 10px;
  border: 4px solid var(--dark-grey);
  color: var(--dark-grey);

  &:hover {
    background-color: var(--dark-grey);
    transform: scale(1.01) translateY(-10px);
    color: var(--off-white);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);

    .project-link {
      color: var(--dark-grey);
      background-color: var(--off-white);
    }

    .project-link img {
      filter: brightness(0) saturate(100%) invert(21%) sepia(0%) saturate(4%) hue-rotate(223deg) brightness(102%) contrast(86%);
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
}

.project-image {
  margin: 10px;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10%;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }
}

.project-details {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: left;
}

.project-title {
  margin-bottom: 5px;

  &:hover {
    background-color: var(--off-white);
    color: var(--dark-grey);
    margin: 7px;
    padding: 7px 20px;
    border-radius: 7px;
    transform: scale(1.05);
  }
}

.project-link {
  margin-right: 10px;
  border-radius: 7px;
  color: var(--off-white);
  font-weight: 700;
  padding: 5px 12px;
  background-color: var(--dark-grey);
  min-height: 35px;

  &:hover {
    transform: scale(1.1);
  }
}

.project-entry-icon {
  height: 20px;
  width: auto;
}

</style>
