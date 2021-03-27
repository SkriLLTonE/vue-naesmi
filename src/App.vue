<template>
  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
  />
  <transition name="topper" appear>
    <Header />
  </transition>
  <router-view />
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Header, Footer },
  watch: {
    $i18n() {
      document.title = this.$t('general.title')
      return this.$t('general.title')
    }
  },
  created() {
  }
};
</script>

<style>
html {
  overflow-x: hidden;
  font-family: Montserrat-Regular, sans-serif;
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
@font-face {
  font-family: "Montserrat-Regular";
  src: local("Montserrat-Regular"), url(assets/fonts/Montserrat-Regular.ttf) format("truetype");
}
  @font-face {
    font-family: "Montserrat-Bold";
    src: local("Montserrat-Bold"), url(assets/fonts/Montserrat-Bold.ttf) format("truetype");
  }
  @font-face {
    font-family: "Montserrat-SemiBold";
    src: local("Montserrat-SemiBold"), url(assets/fonts/Montserrat-SemiBold.ttf) format("truetype");
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
  font-family: Montserrat-Regular, Helvetica, Arial, sans-serif;
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
  background-image: linear-gradient(
    to bottom,
    gray 20%,
    rgba(255, 255, 255, 0) 0%
  );
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
.lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: gray;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
