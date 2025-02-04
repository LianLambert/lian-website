<template>
  <section id="contact" class="section centered position-relative">
    <div id="contact-container" class="row">
      <!-- Title -->
      <div><h1 class="h1-light-bg" style="background-color: var(--off-white); color: black">Contact</h1></div>
      <p class="quote-grey">"You'll never regret reaching out to connect with Lian Lambert." - Lian Lambert</p>
      <hr class="horizontal-divider" />

      <div class="row mt-2">
        <!-- Icons -->
        <div class="d-flex align-items-start justify-content-center justify-content-sm-end col-sm-6 col-12">
          <a class="icon-container" :href="`mailto:${EMAIL}`" target="_blank" alt="Email icon">
            <img src="../../images/email.svg" class="icon" />
          </a>
          <div class="icon-container position-relative" @click="copyPhoneNumber">
            <img src="../../images/phone.svg" class="icon" />
            <div v-if="notificationVisible" class="notification">Phone number copied!</div>
          </div>
          <a class="icon-container" :href="LINKEDIN_LINK" target="_blank" alt="LinkedIn icon">
            <img src="../../images/linkedin.svg" class="icon" />
          </a>
        </div>

        <!-- Image -->
        <img id="wave" class="col-sm-6 col-12 d-block mx-auto" src="../../images/wave-edited.png">
      </div>
    </div>
    <!-- Ground (Black) -->
    <div id="black-ground"></div>
  </section>
</template>
<script setup>
import { EMAIL, LINKEDIN_LINK, PHONE_NUMBER } from "@/constants";
import { ref } from "vue";

const notificationVisible = ref(false);

const copyPhoneNumber = () => {
  navigator.clipboard.writeText(PHONE_NUMBER).then(() => {
    notificationVisible.value = true;

    setTimeout(() => {
      notificationVisible.value = false;
    }, 2000);
  });
};
</script>
<style scoped lang="scss">
#contact {
  width: 100%;
  padding-top: 3vw;
  color: black;
  background-color: var(--off-white);
}

#contact-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  position: relative;
}

.icon-container {
  cursor: pointer;
  margin: 10px;
  height: 110px;
  width: 110px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
    background-color: black;

    .icon {
      filter: brightness(0) saturate(100%) invert(98%) sepia(1%) saturate(3534%) hue-rotate(264deg) brightness(118%) contrast(83%);
    }
  }
}

.icon {
  filter: brightness(0) saturate(100%);
  height: auto;
  width: 70px;
}
.notification {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  transition: all 0.3s ease;
  animation: fadeInOut 0.5s ease;
}
.horizontal-divider {
  border-top: 3px solid var(--dark-grey);
  width: 100%;
  margin: 30px 0;
}

#black-ground {
  height: 90px;
  position: absolute;
  background-color: black;
  bottom: 0;
  width: 100%;
}

#wave {
  max-width: 400px;
  z-index: 5;

  &:hover {
    transform: rotate(-3deg);
  }
}
</style>
