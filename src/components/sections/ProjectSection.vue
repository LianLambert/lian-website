<template>
  <section id="experience" class="section centered" style="background-color: #ffffff">
    <div class="project-container row">
      <div><h1>Projects</h1></div>
      <ProjectEntry
        title="The Adventures of Super Cool Carrot Rocket Chessmaster Girl"
        link="https://lianl.itch.io/the-adventures-of-super-cool-carrot-rocket-chessmaster-girl"
        :image="lianImage"
        description="I did some stuff, hopefully you guys like it! What else do I write here? Seriously lol"
      />
    </div>
  </section>
</template>
<script setup>
import ProjectEntry from "../ProjectEntry.vue";

// to do: use correct images
import lianImage from "../../assets/lian.jpg";
</script>
<style scoped>
.project-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1100px;
}
</style>
