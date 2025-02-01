<template>
  <section id="contact" class="section centered">
    <div id="contact-container" class="row">
      <div><h1 class="h1-light-bg" style="color: black">Contact</h1></div>
      <div class="d-flex align-items-center justify-content-center">
        <a class="icon-container" href="mailto:lian1lambert@gmail.com" target="_blank" alt="Email icon">
          <img src="../../images/email.svg" class="icon" />
        </a>
        <div class="icon-container" @click="copyPhoneNumber">
          <img src="../../images/phone.svg" class="icon" />
        </div>
        <a class="icon-container" href="https://www.linkedin.com/in/lian-lambert/" target="_blank" alt="LinkedIn icon">
          <img src="../../images/linkedin.svg" class="icon" />
        </a>
        <div v-if="notificationVisible" class="notification">Phone number copied!</div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const phoneNumber = "647-228-5779";
const notificationVisible = ref(true);

const copyPhoneNumber = () => {
  navigator.clipboard.writeText(phoneNumber).then(() => {
    notificationVisible.value = true;

    setTimeout(() => {
      notificationVisible.value = false;
    }, 2000);
  });
};
</script>
<style scoped lang="scss">
#contact {
  padding: 4vw 2vw;
  color: black;
}

#contact-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  padding: 20px 0px;
  height: 400;
  position: relative;
}

#lian-show {
  position: absolute;
  height: 70%;
  width: auto;
  left: 70%;
  bottom: 0%;
  transform: translateX(-70%);
  z-index: 100;

  &:hover {
    filter: brightness(110%);
  }

  &:hover ~ #text-container {
    transform: scale(1.1) rotate(-1.5deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 992px) {
    &:hover ~ #text-container {
      transform: scale(1.05) rotate(-1.5deg);
    }
  }

  @media (max-width: 767px) {
    height: auto;
    max-width: 65%;
    transform: translateX(-40%);
  }
}

.icon-container {
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}

.icon {
  filter: brightness(0) saturate(100%);
  width: auto;
  height: 10vw;
  margin: 4vw;
}

.notification {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
  opacity: 0;
  animation: fadeInOut 2s forwards;
}
</style>
