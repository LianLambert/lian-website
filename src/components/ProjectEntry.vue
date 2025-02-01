<template>
  <div class="col-12 col-sm-6 col-lg-4 p-0">
    <div class="project-entry" @mouseover="isHovering = true" @mouseleave="isHovering = false" @mousedown="pauseAllProjectVideos">
      <div class="">
        <!-- media -->
        <div @onClick="isHovering = false" class="project-media centered">
          <!-- Show image or video based on hover -->
          <a :href="props.demoLink || props.primaryLink" target="_blank" rel="noopener noreferrer" class="centered w-100">
            <img v-if="!isHovering || !props.demoVideo" :src="image" class="project-image" />
            <video v-else :src="props.demoVideo" class="project-video" autoplay playsinline></video>
          </a>
        </div>

        <!-- details -->
        <div class="project-details">
          <!-- title and description -->
          <h3 class="project-title">
            <a :href="props.primaryLink">{{ title }}</a>
          </h3>
          <div>{{ description }}</div>

          <!-- links -->
          <div class="project-links-container">
            <a v-if="props.demoLink" :href="props.demoLink" target="_blank" class="project-link centered">Watch Demo</a>
            <a v-if="props.githubLink" :href="props.githubLink" target="_blank" class="project-link centered">
              <img src="../images/github.svg" alt="github" class="project-entry-icon" />
            </a>
            <a v-if="props.otherLink" :href="props.otherLink" target="_blank" class="project-link centered">
              <img src="../images/link.svg" alt="link" class="project-entry-icon" />
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
import { ref } from "vue";

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
  },
});

window.addEventListener("load", equalizeProjectHeights);
window.addEventListener("resize", equalizeProjectHeights);

const isHovering = ref(false);

function pauseAllProjectVideos() {
  const videos = document.querySelectorAll(".project-video");
  videos.forEach((video) => {
    video.pause();
  });
}

function equalizeProjectHeights() {
  const projectEntries = document.querySelectorAll(".project-entry");
  if (projectEntries.length === 0) {
    return;
  }

  let maxHeight = 0;

  // find tallest height
  projectEntries.forEach((entry) => {
    entry.style.minHeight = "";
    const height = entry.offsetHeight;
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  // apply tallest height to all
  projectEntries.forEach((entry) => {
    entry.style.minHeight = `${maxHeight}px`;
  });
}
</script>
<style scoped lang="scss">
.project-entry {
  margin: 15px;
  padding: 40px;
  border-radius: 10px;
  border: 4px solid var(--dark-grey);
  background-color: white;
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
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10%;
  overflow: hidden;
}

.project-details {
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: left;
}

.project-title {
  margin-bottom: 5px;

  /* to do: decide if I want this   &:hover {
    background-color: var(--off-white);
    color: var(--dark-grey);
    margin: 7px;
    padding: 7px 20px;
    border-radius: 7px;
    transform: scale(1.05);
  } */
}

.project-links-container {
  display: flex;
  margin-top: 10px;
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

.project-media {
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.project-image,
.project-video {
  height: 150px;
  width: 100%;
}

.project-image {
  object-fit: cover;
  border-radius: 10px;
}

.project-video {
  object-fit: contain;
  display: block;
  opacity: 1;
}
</style>
