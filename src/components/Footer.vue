<template>
  <div>
    <div
      style="
        width: 100%;
        background-color: #2d66b3;
        margin-top: 50px;
        color: white;
      "
    >
      <div style="width: 94%; margin-left: 3%;">
        <div style="display: flex; padding-top: 20px;">
          <div class="social-network">
            <i
              class="fab fa-telegram-plane"
              style="font-size: 26px; padding-right: 10px"
            ></i>
            Telegram
          </div>
          <div class="social-network">
            <i
              class="fab fa-youtube"
              style="font-size: 26px; padding-right: 10px"
            ></i>
            YouTube
          </div>
          <div class="social-network">
            <i
              class="fab fa-twitter"
              style="font-size: 26px; padding-right: 10px"
            ></i>
            Twitter
          </div>
        </div>

        <div style="font-weight: bold; text-align: start; padding: 20px 0">
          © 2004 - 2021. "National Association of Electronic Mass Media of
          Uzbekistan" All rights reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  mounted: function () {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
.social-network {
  border-radius: 30px;
  margin: 20px 0;
  margin-right: 20px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #fff;
  transition: all 0.2s ease;
}

.social-network:hover {
  background-color: #fff;
  color: black;
}
</style>