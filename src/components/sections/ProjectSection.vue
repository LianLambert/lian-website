<template>
  <section id="project" class="section centered" style="background-color: #ffffff">
    <div id="project-container" class="row">
      <div><h1 class="h1-light-bg">Projects</h1></div>
      <ProjectEntry
        title="Lost At Sea"
        link="https://lianl.itch.io/lost-at-sea"
        :image="LostAtSea"
        description="A minesweeper inspired game with a nautical twist! Use lighthouses to find the lost boats but beware of sharks! Created for McGameJam 2025 and made with Unity (C#) in < 48h."
      />
      <ProjectEntry
        title="Commit2Gather"
        link="https://github.com/lil1an/commit2gather/tree/main"
        :image="Commit2Gather"
        description="A booking software to help McGill University students and staff schedule and manage their appointments. Created for COMP 307 - Principles of Web Development."
      />
      <ProjectEntry
        title="The Adventures of Super Cool Carrot Rocket Chessmaster Girl"
        link="https://docs.google.com/presentation/d/1hII6qBH_dLbKPqPi4oqcR_595N9Twu2WiQ7Q0VdtBjU/edit"
        :image="TASCCRCG"
        description="A 2D pixel art shoot’em up game! Created for McGameJam 2024 and made with Unity (C#) in < 48h."
      />
      <ProjectEntry
        title="Game Design Portfolio"
        link="https://lianl.itch.io/the-adventures-of-super-cool-carrot-rocket-chessmaster-girl"
        :image="Portfolio"
        description="Applied game design principles to enhance Don't Fall Down! in collaboration with the developer, with updates featured in Version 1.2 and designed a level inspired by Fall Guys."
      />
    </div>
  </section>
</template>
<script setup>
import ProjectEntry from "../ProjectEntry.vue";

// to do: use correct images
import LostAtSea from "../../assets/lost-at-sea_v.jpg";
import Commit2Gather from "../../assets/Commit2Gather_v.jpg";
import TASCCRCG from "../../assets/TASCCRCG_v.jpg";
import Portfolio from "../../assets/portfolio_v.jpg";

</script>
<style scoped lang="scss">
#project {
  padding: 4vw 2vw;
}

#project-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1100px;
}
</style>
