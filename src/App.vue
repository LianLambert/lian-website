<template>
  <div id="app">
    <MainNavBar />
    <div id="sections-container">
      <section id="about" class="section">About Section</section>
      <section id="experience" class="section">Experience Section</section>
      <section id="projects" class="section" style="background-color: black">Projects Section</section>
      <section id="abilities" class="section">Abilities Section</section>
      <section id="contact" class="section">Contact Section</section>
    </div>
  </div>
</template>

<script>
import MainNavBar from "./components/MainNavBar.vue";

export default {
  name: "App",
  components: {
    MainNavBar,
  },
};
</script>
<style>
.section {
  height: 400px;
}
</style>
