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
  components: {},
};
</script>

<style>
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

</style>
