<template>
  <section id="projects" class="section centered">
    <div id="project-container" class="row">
      <!-- Title -->
      <div><h1 class="h1-light-bg" style="background-color: var(--off-white); color: black">Projects</h1></div>
      <p class="quote-grey">"Your life is your biggest project - make it a masterpiece." - Unknown</p>
      <hr class="horizontal-divider" />

      <!-- Projects -->
      <ProjectEntry
        title="Lost At Sea"
        :image="LostAtSea"
        description="A minesweeper inspired game with a nautical twist! Use lighthouses to search the sea for lost boats - beware of sharks! Created for McGameJam 2025 and made with Unity/C# in < 48h."
        primaryLink="https://lianl.itch.io/lost-at-sea"
        demoLink="https://www.youtube.com/watch?v=FVWS2cOupnk&ab_channel=Lian"
        githubLink="https://github.com/LianLambert/Lost-At-Sea-McGameJam2025"
        otherLink="https://lianl.itch.io/lost-at-sea"
        :demo-video="LostAtSeaVideo"
      />
      <ProjectEntry
        title="Commit2Gather"
        :image="Commit2Gather"
        description="An appointment booking software to help McGill University students and staff manage office hours and meetings. Created for COMP 307 - Principles of Web Development using the MERN stack in Fall 2024."
        primaryLink="https://github.com/lil1an/commit2gather"
        demoLink="https://www.youtube.com/watch?v=-zRBUqTmG-U&t=3s&ab_channel=Lian"
        githubLink="https://github.com/lil1an/commit2gather"
        :demo-video="Commit2GatherVideo"
      />
      <ProjectEntry
        title="The Adventures of Super Cool Carrot Rocket Chessmaster Girl"
        :image="TASCCRCG"
        description="A 2D pixel art shoot’em up game following the theme 'Contraption'! Created for McGameJam 2024 and made with Unity/C# in < 48h."
        primaryLink="https://lianl.itch.io/the-adventures-of-super-cool-carrot-rocket-chessmaster-girl"
        demoLink="https://www.youtube.com/watch?v=ISyCelCeTNc&t=9s&ab_channel=Lian"
        githubLink="https://github.com/LianLambert/The-Adventures-of-Super-Cool-Carrot-Rocket-Chessmaster-Girl-McGameJam2024"
        otherLink="https://lianl.itch.io/the-adventures-of-super-cool-carrot-rocket-chessmaster-girl"
        :demo-video="TASCCRCGVideo"
      />
      <ProjectEntry
        title="Game Design Portfolio"
        :image="Portfolio"
        description="A portfolio highlighting my contributions to the ‘Don't Fall Down!' App (game design updates were released in Version 1.2) and featuring a Fall Guys-inspired level design concept."
        primaryLink="https://docs.google.com/presentation/d/1hII6qBH_dLbKPqPi4oqcR_595N9Twu2WiQ7Q0VdtBjU/edit#slide=id.gace710277d_0_491"
        otherLink="https://docs.google.com/presentation/d/1hII6qBH_dLbKPqPi4oqcR_595N9Twu2WiQ7Q0VdtBjU/edit#slide=id.gace710277d_0_491"
      />
      <ProjectEntry
        title="FPS Unity Practice"
        :image="FPSUnity"
        description="A unity project featuring free exploration, combat, canyon and goal zones as well as randomly generated safe and deadly paths. Built for COMP 521 - Modern Computer Games using Unity/C#."
        primaryLink="https://github.com/LianLambert/FPS-Unity-Assignment"
        githubLink="https://github.com/LianLambert/FPS-Unity-Assignment"
        demoLink="https://www.youtube.com/watch?v=5vyfgUvrMes&ab_channel=Lian"
        :demo-video="FPSUnityVideo"
      />
      <ProjectEntry
        title="Leaping Fish Verlets"
        :image="LeapingFishVerlets"
        description="A Unity/C# project built for COMP 521 - Modern Computer Games, featuring hand-coded physics and collisions, randomized fish trajectories, and Verlet integration for body movement."
        primaryLink="https://github.com/LianLambert/Leaping-Fish-Verlet-Assignment"
        githubLink="https://github.com/LianLambert/Leaping-Fish-Verlet-Assignment"
        demoLink="https://www.youtube.com/watch?v=V70TlsH6XvI&ab_channel=Lian"
        :demo-video="LeapingFishVerletsVideo"
      />
    </div>
  </section>
</template>
<script setup>
import ProjectEntry from "../ProjectEntry.vue";

// project images
import LostAtSea from "../../images/lost-at-sea.png";
import Commit2Gather from "../../images/Commit2Gather.png";
import TASCCRCG from "../../images/TASCCRCG.png";
import Portfolio from "../../images/portfolio.png";
import FPSUnity from "../../images/fps-unity.png";
import LeapingFishVerlets from "../../images/leaping-fish-verlets.png";

// project videos
import LostAtSeaVideo from "../../videos/LostAtSea-preview.mp4";
import Commit2GatherVideo from "../../videos/Commit2Gather-preview.mp4";
import TASCCRCGVideo from "../../videos/TASCCRCG-preview.mp4";
import FPSUnityVideo from "../../videos/FPSUnity-preview.mp4";
import LeapingFishVerletsVideo from "../../videos/LeapingFishVerlets-preview.mp4";
</script>
<style scoped lang="scss">
#projects {
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

.horizontal-divider {
  border-top: 3px solid var(--dark-grey);
  width: 100%;
  margin: 30px 0;
}
</style>
