<template>
  <div>
    <Header />
    <div class="banner">
      <div
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(#000, transparent);
          z-index: 0;
        "
      ></div>
      <div
        style="
          font-size: 60px;
          font-weight: bold;
          color: white;
          position: relative;
        "
      >
        О НАЭСМИ
      </div>
    </div>
    <br />
    <br />
    <br />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
export default {
  components: { Header, Footer },
  data() {
    return {};
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 400px;
  background: url("../assets/history.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>