<template>
  <section id="project" class="section centered">
    <div id="project-container" class="row">
      <div><h1 class="h1-light-bg" style="color: black">Projects</h1></div>
      <ProjectEntry
        title="Lost At Sea"
        :image="LostAtSea"
        description="A minesweeper inspired game with a nautical twist!Created for McGameJam 2025 and made with Unity (C#) in < 48h."
        primaryLink="https://lianl.itch.io/lost-at-sea"
        demoLink="https://www.youtube.com/watch?v=FVWS2cOupnk&ab_channel=Lian"
        githubLink="https://github.com/LianLambert/Lost-At-Sea-McGameJam2025"
        otherLink="https://lianl.itch.io/lost-at-sea"
      />
      <ProjectEntry
        title="Commit2Gather"
        :image="Commit2Gather"
        description="An appointment booking software to help McGill University students and staff. Created for COMP 307 - Principles of Web Development."
        primaryLink="https://github.com/lil1an/commit2gather"
        demoLink="https://www.youtube.com/watch?v=-zRBUqTmG-U&t=3s&ab_channel=Lian"
        githubLink="https://github.com/lil1an/commit2gather"
      />
      <ProjectEntry
        title="The Adventures of Super Cool Carrot Rocket Chessmaster Girl"
        :image="TASCCRCG"
        description="A 2D pixel art shoot’em up game! Created for McGameJam 2024 and made with Unity (C#) in < 48h."
        primaryLink="https://lianl.itch.io/the-adventures-of-super-cool-carrot-rocket-chessmaster-girl"
        demoLink="https://www.youtube.com/watch?v=ISyCelCeTNc&t=9s&ab_channel=Lian"
        githubLink="https://github.com/LianLambert/The-Adventures-of-Super-Cool-Carrot-Rocket-Chessmaster-Girl-McGameJam2024"
        otherLink="https://lianl.itch.io/the-adventures-of-super-cool-carrot-rocket-chessmaster-girl"
        
      />
      <ProjectEntry
        title="Game Design Portfolio"
        :image="Portfolio"
        description="A portfolio highlighting my contributions to the ‘Don't Fall Down!' App with game design updates in Version 1.2 and a Fall Guys-inspired level design."
        primaryLink="https://docs.google.com/presentation/d/1hII6qBH_dLbKPqPi4oqcR_595N9Twu2WiQ7Q0VdtBjU/edit#slide=id.gace710277d_0_491"
        otherLink="https://docs.google.com/presentation/d/1hII6qBH_dLbKPqPi4oqcR_595N9Twu2WiQ7Q0VdtBjU/edit#slide=id.gace710277d_0_491"
        
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
  background-color: var(--off-white);
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
