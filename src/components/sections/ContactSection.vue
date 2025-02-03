<template>
  <section id="contact" class="section centered">
    <div id="contact-container" class="row">
      <!-- Title -->
      <div><h1 class="h1-light-bg" style="color: black">Contact</h1></div>
      <p class="quote-grey">"You'll never regret reaching out to connect with Lian Lambert" - Lian Lambert</p>
      <hr class="horizontal-divider" />

      <!-- to do: -->
      <div class="d-flex align-items-center justify-content-center">
        <a class="icon-container" href="mailto:lian1lambert@gmail.com" target="_blank" alt="Email icon">
          <img src="../../images/email.svg" class="icon" />
        </a>
        <div class="icon-container position-relative" @click="copyPhoneNumber">
          <img src="../../images/phone.svg" class="icon" />
          <div v-if="notificationVisible" class="notification">Phone number copied!</div>
        </div>
        <a class="icon-container" href="https://www.linkedin.com/in/lian-lambert/" target="_blank" alt="LinkedIn icon">
          <img src="../../images/linkedin.svg" class="icon" />
        </a>

      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const phoneNumber = "647-228-5779";
const notificationVisible = ref(false);

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

.icon-container {
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}

.icon {
  filter: brightness(0) saturate(100%);
  width: auto;
  height: 9vw;
  margin: 4vw;
}

.notification {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  transition: all 0.3s ease;
  animation: fadeInOut 2s forwards;
}

.horizontal-divider {
  border-top: 3px solid var(--dark-grey);
  width: 100%;
  margin: 30px 0;
}
</style>
