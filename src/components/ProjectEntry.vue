<template>
  <div class="project-entry centered col-12 col-lg-6">
    <div class="project-entry-image-container centered">
      <img :src="image" class="project-entry-image" />
    </div>
    <div class="project-entry-details">
      <h3>
        <a :href="link">{{ title }}</a>
      </h3>
      <div>{{ description }}</div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    required: true,
    type: String,
  },
  link: {
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
});
</script>
<style scoped lang="scss">
.project-entry {
  margin: 15px 0;
}

.project-entry-image-container {
  padding: 10px;
}

.project-entry-image {
  width: 200px;
  height: 200px;
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
</style>
