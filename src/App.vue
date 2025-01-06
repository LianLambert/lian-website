<template>
  <div id="app">
    <MainNavBar />
    <div id="main-container">
      <section id="about-section" style="height: 300px">About Section</section>
      <section id="experience-section" style="height: 300px">
        Experience Section
      </section>
      <section id="projects-section" style="height: 300px">Projects Section</section>
      <section id="abilities-section" style="height: 300px">Abilities Section</section>
      <section id="contact-section" style="height: 300px">Contact Section</section>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
