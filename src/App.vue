<template>
  <div id="app">
    <MainNavBar />
    <div id="sections-container">
      <AboutSection />
      <section id="experience" class="section">Experience Section</section>
      <section id="projects" class="section" style="background-color: black">Projects Section</section>
      <section id="abilities" class="section">Abilities Section</section>
      <section id="contact" class="section">Contact Section</section>
    </div>
  </div>
</template>

<script setup>
import MainNavBar from "./components/MainNavBar.vue";
import AboutSection from "./components/AboutSection.vue";
</script>
<style>
.section {
  height: 400px;
}
</style>
