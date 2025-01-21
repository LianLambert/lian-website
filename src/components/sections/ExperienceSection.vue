<template>
  <section id="experience" class="section centered">
    <div class="experience-container">
      <h1>Experience</h1>
      <ExperienceEntry
        company="Hivestack by Perion"
        :startDate="new Date('2024-05-01')"
        :endDate="new Date('2024-12-31')"
        position="Frontend Intern"
        description="Contributed to the development of Hivestack's Digital Out of Home (DOOH) ad tech platform using VueJS, emphasizing user experience and adhering to agile methodologies."
        location="Montreal, QB"
        linkText="Hivestack by Perion"
        link="https://www.hivestack.com/"
      />
      <ExperienceEntry
        company="Stocate"
        :startDate="new Date('2024-01-01')"
        :endDate="new Date('2024-05-01')"
        position="Usability Engineer Intern"
        description="Worked closely with users, gathering and integrating their feedback throughout the entire CI/CD pipeline. Conducted codesign sessions and usability testing to capture insights, and developed Figma prototypes to ensure stakeholder alignment. Iteratively implemented feedback on the Stocate app and website using React, React Native, C#, and PostgreSQL, ensuring seamless deployment and integration across the pipeline."
        location="Montreal, QB"
        linkText="Stocate"
        link="https://www.stocate.com/"
      />
      <ExperienceEntry
        company="IMMO SQUARE"
        :startDate="new Date('2023-06-01')"
        :endDate="new Date('2023-08-01')"
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
<style scoped>
#experience {
  background-color: #331c52;
}

.experience-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  color: rgb(241, 241, 241);
  text-align: center;
}
</style>
