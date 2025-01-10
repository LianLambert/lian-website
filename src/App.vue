<template>
  <div id="app">
    <MainNavBar />
    <div id="sections-container">
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <AbilitySection />
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
import MainNavBar from "./components/MainNavBar.vue";
import AboutSection from "./components/sections/AboutSection.vue";
import ExperienceSection from "./components/sections/ExperienceSection.vue";
import ProjectSection from "./components/sections/ProjectSection.vue";
import AbilitySection from "./components/sections/AbilitySection.vue";
import ContactSection from "./components/sections/ContactSection.vue";
</script>
<style></style>
