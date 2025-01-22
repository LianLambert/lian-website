<template>
  <b-navbar id="nav-all" toggleable="lg" variant="dark" style="background-color: black !important">
    <!-- Logo -->
    <b-navbar-brand href="#about">
      <img src="/logo-white.png" id="logo" alt="logo" />
    </b-navbar-brand>

    <!-- Toggle -->
    <b-navbar-toggle id="nav-toggle" target="navbar-content" @click="toggleNavbar">
      <img src="../assets/hamburger-icon.png" alt="toggle" style="width: 30px; height: auto" />
    </b-navbar-toggle>

    <!-- Collapsible Section -->
    <b-collapse id="nav-content" is-nav v-model="isNavExpanded" @mouseenter="openNavbar" @mouseleave="closeNavbar">
      <b-navbar-nav class="centered w-100">
        <!-- Navbar Links -->
        <div id="nav-links-container" class="centered flex-lg-row flex-column">
          <b-nav-item class="nav-link" href="#about" @click="closeNavbar" active>about</b-nav-item>
          <b-nav-item class="nav-link" href="#experience" @click="closeNavbar">experience</b-nav-item>
          <b-nav-item class="nav-link" href="#project" @click="closeNavbar">projects</b-nav-item>
          <b-nav-item class="nav-link" href="#ability" @click="closeNavbar">abilities</b-nav-item>
          <b-nav-item class="nav-link" href="#contact" @click="closeNavbar">contact</b-nav-item>
        </div>

        <!-- Social Icons -->
        <div id="nav-icons-container" class="centered">
          <div class="nav-icon-container">
            <a href="/Lian_Lambert_Resume_2025.pdf" target="_blank">
              <img src="../assets/resume-white.png" alt="Resume" />
            </a>
          </div>
          <div class="nav-icon-container">
            <a href="https://github.com/LianLambert" target="_blank">
              <img src="../assets/github-white.png" alt="GitHub" />
            </a>
          </div>
          <div class="nav-icon-container">
            <a href="https://www.linkedin.com/in/lian-lambert/" target="_blank">
              <img src="../assets/linkedin-white.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const navbar = ref(null);
const isNavExpanded = ref(false);

// used to update active tags during scroll
const navLinkElements = ref(null);
const sectionElements = ref(null);
const currentSection = ref(null);

const toggleNavbar = () => {
  isNavExpanded.value = !isNavExpanded.value;
};

const openNavbar = () => {
  isNavExpanded.value = true;
};

const closeNavbar = () => {
  isNavExpanded.value = false;
};

const handleClickOutsideNav = (event) => {
  if (navbar.value && !navbar.value.contains(event.target)) {
    closeNavbar();
  }
};

onMounted(() => {
  navbar.value = document.getElementById("nav-all");
  navLinkElements.value = document.querySelectorAll(".nav-link");
  sectionElements.value = document.querySelectorAll(".section");

  // prevents fixed navbar position from hiding content
  if (navbar.value) {
    document.documentElement.style.scrollPaddingTop = `${navbar.value.offsetHeight}px`;
  }

  // closes navbar if user clicks outside it
  document.addEventListener("click", handleClickOutsideNav);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutsideNav);
});

window.addEventListener("scroll", () => {
  // find active section based on how scrolled down we are
  sectionElements.value.forEach((section) => {
    if (window.scrollY >= section.offsetTop - section.clientHeight / 2) {
      currentSection.value = section.id;
    }
  });

  // clear previous active tag then set to currect section
  navLinkElements.value.forEach((navLink) => {
    if (navLink && navLink.href && navLink.href.includes(currentSection.value)) {
      const activeNavLink = document.querySelector(".active");
      if (activeNavLink) {
        activeNavLink.classList.remove("active");
      }
      navLink.classList.add("active");
    }
  });
});
</script>
<style lang="scss">
#nav-all {
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
  margin: 15px;
  transition: all 0.2s;
  
  &:hover {
    filter: brightness(70%);
    transform: scale(1.05);
  }
}

.nav-icon-container > a > img {
  height: 30px;
  width: auto;
  transform: scale(1.10);
}

#nav-links-container > li > a {
  color: #ffffff80;
  font-weight: 1000;
  transition: all 0.2s;
  padding: 10px;
  width: 100%;

  &:hover,
  &.active {
    color: white;
    transform: scale(1.05);
  }
}

#nav-toggle {
  outline: none;
  border: none;
  box-shadow: none;
  padding: 5px 10px;
  padding-left: 50px;
  height: 70px;

  &:hover {
    transform: scale(1.05);
  }
}

#logo {
  width: auto;
  height: 40px;
  margin: 10px;
  transition: margin 0.4s;
  
  &:hover {
    filter: brightness(70%);
    transform: scale(1.05);
  }
}

@media (min-width: 992px) {
  #logo {
    margin-left: 7vw;
    margin-right: 7vw;
  }

  #nav-links-container {
    margin-right: 4vw;
  }
}

@media (max-width: 991px) {
  #nav-links-container li:hover {
    background-color: #202020;
  }

  #nav-links-container,
  #nav-links-container > li,
  #nav-links-container > li > a {
    width: 100%;
  }

  #nav-links-container > li,
  #nav-links-container > li > a {
    height: 70px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
