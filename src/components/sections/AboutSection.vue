<template>
  <section id="about" class="section" style="background-color: #ffffff">About Section!</section>
</template>
<script setup>
import { ref, onMounted } from "vue";

const navbar = ref(null);
const aboutSection = ref(null);

onMounted(() => {
  // adjust section height to fill page
  navbar.value = document.getElementById("nav-all");
  aboutSection.value = document.getElementById("about");

  if (aboutSection.value && navbar.value) {
    const navbarHeight = navbar.value.offsetHeight;
    const viewportHeight = window.innerHeight;
    aboutSection.value.style.height = `${viewportHeight - navbarHeight}px`;
  }
});
</script>
<style scoped></style>
