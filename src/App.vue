<template>
  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
  />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>

html {
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: inherit;
}

@font-face {
  font-family: "NewCyrillicGoth";
  src: local("NewCyrillicGoth"),
    url(assets/fonts/NewCyrillicGoth.ttf) format("truetype");
}

@font-face {
  font-family: "Dr.Po";
  src: local("Dr.Po"), url(assets/fonts/Dr.Po.otf) format("truetype");
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

.button-container {
  user-select: none;
  outline: none;
  appearance: none;
  background-color: transparent;
  cursor: pointer;
}

.horizontal-dotted-border {
  position: relative;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(to right, gray 20%, rgba(0, 0, 0, 0) 0%);
  background-position: bottom;
  background-size: 8px 2px;
  background-repeat: repeat-x;
}

.vertical-dotted-border {
  height: 100%;
  width: 2px;
  background-image: linear-gradient(to bottom, gray 20%, rgba(255, 255, 255, 0) 0%);
  background-position: left;
  background-size: 2px 8px;
  background-repeat: repeat-y;
}

.fadebottom-enter-active,
.fadebottom-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease !important;
}

.fadebottom-enter-from,
.fadebottom-leave-to {
  transform: translateY(50%);
  opacity: 0;
}

.fadebottom-move {
  transition: all 1s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in !important;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.topper-enter-active,
.topper-leave-active {
  transition: transform 0.6s ease;
}

.topper-enter-from,
.topper-leave-to {
  transform: translateY(-100%);
  position: absolute;
}

.fadetop-enter-active,
.fadetop-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease !important;
}

.fadetop-enter-from,
.fadetop-leave-to {
  transform: translateY(-40%);
  opacity: 0;
}

.sliderleft-enter-active,
.sliderleft-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease !important;
}

.sliderleft-enter-from,
.sliderleft-leave-to {
  transform: translateX(-50%);
}

.sliderleft2-enter-active,
.sliderleft2-leave-active {
  transition: transform 1s ease, opacity 0.6s ease !important;
}

.sliderleft2-enter-from,
.sliderleft2-leave-to {
  transform: translateY(-40%);
  opacity: 0;
}

</style>
