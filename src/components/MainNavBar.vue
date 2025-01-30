<template>
  <b-navbar id="nav-all" toggleable="lg" variant="dark" style="background-color: black !important">
    <!-- Logo -->
    <b-navbar-brand id="nav-brand" href="#about">
      <img src="../images/LL.svg" alt="toggle" id="logo" />
    </b-navbar-brand>

    <!-- Toggle -->
    <b-navbar-toggle id="nav-toggle" target="navbar-content" @click="toggleNavbar">
      <img src="../images/hamburger.svg" alt="toggle" style="width: 30px; height: auto" />
    </b-navbar-toggle>

    <!-- Collapsible Section -->
    <b-collapse id="nav-content" is-nav v-model="isNavExpanded" v-on="isNavExpanded ? { mouseenter: openNavbar, mouseleave: closeNavbar } : {}">
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
          <a class="nav-icon-container" href="/Lian_Lambert_Resume_2025.pdf" target="_blank" alt="Resume icon">
            <img src="../images/resume.svg" class="nav-icon" />
          </a>
          <a class="nav-icon-container" href="https://github.com/LianLambert" target="_blank" alt="Github icon">
            <img src="../images/github.svg" class="nav-icon" />
          </a>
          <a class="nav-icon-container" href="https://www.linkedin.com/in/lian-lambert/" target="_blank" alt="LinkedIn icon">
            <img src="../images/linkedin.svg" class="nav-icon" />
          </a>
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

const handleResize = () => {
  if (window.innerWidth >= 992) {
    closeNavbar();
  }
}

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

  // close navbar when window screen is large prevents default open when small
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutsideNav);
});

window.addEventListener("scroll", () => {
  // find active section based on how scrolled down we are
  sectionElements.value.forEach((section) => {
    if (window.scrollY >= section.offsetTop - section.clientHeight / 3) {
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
      window.history.replaceState(null, null, `#${currentSection.value}`);
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
  font-size: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  transition: background-color 0.3s ease, filter 0.3s ease;
}

.nav-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 45px;
  height: 45px;
  margin: 10px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    background-color: white;

    .nav-icon {
      filter: brightness(0) saturate(100%);
    }
  }
}

.nav-icon {
  height: 30px;
  width: auto;
}

#nav-links-container > li > a {
  color: #ffffff80;
  font-weight: 1000;
  transition: all 0.2s;
  padding: 10px;
  width: 100%;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

  &:hover,
  &.active {
    color: white;
    transform: scale(1.05);
  }

  &.active {
    text-transform: uppercase;
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

@media (min-width: 992px) {
  #nav-brand {
    margin-left: 6vw;
    margin-right: 6vw;
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

#logo {
  height: 45px;
  width: 45px;
}

#nav-brand {
  color: white; 
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 35px;
  font-weight: 1000;
  transform: rotate(-1.5deg);
  border-radius: 5px;
  padding: 3px 8px;

  &:hover {
    transform: scale(1.1);
    background-color: white;

    #logo {
      filter: brightness(0) saturate(100%);
    }
  }
}
</style>
