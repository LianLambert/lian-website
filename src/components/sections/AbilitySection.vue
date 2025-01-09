<template>
  <section id="ability" class="section centered flex-column" style="background-color: #ffffff">
    <h1>Abilities</h1>
    <div v-for="(category, index) in categories" :key="index" class="ability-category mb-4">
      <h2>{{ category.title }}</h2>
      <div class="row" style="padding: 0; margin: 0">
        <div v-for="(rating, skill) in category.items" :key="skill" class="col-12 col-md-6">
          <AbilityRating :ability="skill" :rating="rating" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AbilityRating from "../AbilityRating.vue";

const categories = [
  {
    // to do: consider adding sass
    title: "Skills",
    items: {
      "JavaScript/TypeScript": 5,
      "HTML/CSS": 5,
      "Vue.js": 5,
      Bootstrap: 5,
      "React.js": 5,
      Python: 5,
      SQL: 4,
      "C#": 4,
      MongoDB: 3,
      Java: 4,
      Ruby: 2,
      Php: 1,
    },
  },
  {
    title: "Tools",
    items: {
      Git: 5,
      Zoom: 5,
      VSCode: 5,
      Slack: 5,
      Figma: 5,
      Atlassian: 5,
      FileZilla: 5,
      Postman: 4,
      Unity: 4,
      Cypress: 3,
      IntelliJ: 3,
      Blender: 2,
    },
  },
  {
    title: "Languages",
    items: {
      English: 5,
      French: 3,
      Spanish: 2,
      "Klingon (qapla’)": 1,
    },
  },
];
</script>

<style scoped>
.ability-category {
  width: 100%;
  max-width: 900px;
  text-align: center;
}

@media (max-width: 768px) {
  .ability-category {
    max-width: 450px;
  }
}
</style>
