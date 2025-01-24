<template>
  <section id="project" class="section centered">
    <div id="project-container" class="row">
      <div><h1 class="h1-light-bg" style="color: black">Projects</h1></div>
      <ProjectEntry
        title="Lost At Sea"
        link="https://lianl.itch.io/lost-at-sea"
        demo-link="https://www.sunnypatel.net/#projects"
        :image="LostAtSea"
        description="A minesweeper inspired game with a nautical twist!Created for McGameJam 2025 and made with Unity (C#) in < 48h."
      />
      <ProjectEntry
        title="Commit2Gather"
        link="https://github.com/lil1an/commit2gather/tree/main"
        :image="Commit2Gather"
        description="An appointment booking software to help McGill University students and staff. Created for COMP 307 - Principles of Web Development."
      />
      <ProjectEntry
        title="The Adventures of Super Cool Carrot Rocket Chessmaster Girl"
        link="https://lianl.itch.io/the-adventures-of-super-cool-carrot-rocket-chessmaster-girl"
        :image="TASCCRCG"
        description="A 2D pixel art shoot’em up game! Created for McGameJam 2024 and made with Unity (C#) in < 48h."
      />
      <ProjectEntry
        title="Game Design Portfolio"
        link="https://docs.google.com/presentation/d/1hII6qBH_dLbKPqPi4oqcR_595N9Twu2WiQ7Q0VdtBjU/edit"
        :image="Portfolio"
        description="A portfolio highlighting my contributions to the ‘Don't Fall Down!' App with game design updates in Version 1.2 and a Fall Guys-inspired level design."
      />
    </div>
  </section>
</template>
<script setup>
import ProjectEntry from "../ProjectEntry.vue";

import LostAtSea from "../../images/lost-at-sea.png";
import Commit2Gather from "../../images/Commit2GatherRed.png";
import TASCCRCG from "../../images/TASCCRCG.png";
import Portfolio from "../../images/portfolio.png";
</script>
<style scoped lang="scss">
#project {
  padding: 4vw 2vw;
  background-color: #f2f2f2;
}

#project-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1100px;
  padding: 20px 0px;
}
</style>
