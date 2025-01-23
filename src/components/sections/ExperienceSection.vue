<template>
  <section id="experience" class="section centered">
    <div id="experience-container">
      <h1 class="mb-3 h1-dark-bg" style="background-color: var(--dark-purple);">Experience</h1>
      <hr class="horizontal-divider">
      <div class="d-flex"><h2 class="heading">Education</h2></div>
      <ExperienceEntry
        company="McGill University"
        :startDate="new Date('September 1, 2019')"
        :endDate="new Date('December 31, 2024')"
        position="Double Major Software Engineering & Psychology, Minor in Educational Psychology"
        description="Notable courses include: Principles of Web Development, Software Design, Modern Computer Games, Database Systems and Algorithms and Data Structures."
        location="Montreal, QB"
        :showTimeAtPosition="false"
      />
      <hr class="horizontal-divider">
      <div class="d-flex"><h2 class="heading">Work</h2></div>
      <ExperienceEntry
        company="Hivestack by Perion"
        :startDate="new Date('May 1, 2024')"
        :endDate="new Date('December 31, 2024')"
        position="Frontend Intern"
        description="Contributed to the development of Hivestack's Digital Out of Home (DOOH) ad tech platform using VueJS, emphasizing user experience and adhering to agile methodologies."
        location="Montreal, QB"
        linkText="Hivestack by Perion"
        link="https://www.hivestack.com/"
      />
      <ExperienceEntry
        company="Stocate"
        :startDate="new Date('January 1, 2024')"
        :endDate="new Date('May 1, 2024')"
        position="Usability Engineer Intern"
        description="Worked closely with users, gathering and integrating their feedback throughout the entire CI/CD pipeline. Conducted codesign sessions and usability testing to capture insights, and developed Figma prototypes to ensure stakeholder alignment. Iteratively implemented feedback on the Stocate app and website using React, React Native, C#, and PostgreSQL, ensuring seamless deployment and integration across the pipeline."
        location="Montreal, QB"
        linkText="Stocate"
        link="https://www.stocate.com/"
      />
      <ExperienceEntry
        company="IMMO SQUARE"
        :startDate="new Date('June 1, 2023')"
        :endDate="new Date('August 1, 2023')"
        position="Junior Web Developer"
        description="As a junior web developer at IMMO SQUARE, I learned the basics of web development including HTML, CSS, Bootstrap and JavaScript. I was also introduced to Ruby on Rails and Sequel. During my time at IMMO SQUARE I helped to develop and maintain highly functional and visually appealing web pages."
        location="Montreal, QB"
        linkText="IMMO SQUARE"
        link="https://immosquare.com/"
      />
    </div>
  </section>
</template>
<script setup>
import ExperienceEntry from "../ExperienceEntry.vue";
</script>
<style scoped lang="scss">
#experience {
  background-color: var(--dark-purple);
  padding: 4vw 2vw;
}

#experience-container {
  padding: 20px 0px;
  width: 100%;
  max-width: 900px;
  text-align: center;
}

.heading:hover {
    padding: 10px 35px;
    background-color: var(--medium-purple);
    color: white;
}

.horizontal-divider {
  border-top: 3px solid var(--lightest-purple);
  width: 100%;
  margin: 20px 0;
}
</style>
