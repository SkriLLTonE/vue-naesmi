<template>
  <div class="app-bar">
    <div
      style="
        position: relative;
        display: flex;
        align-items: flex-end;
        height: 68px;
      "
    >
      <!-- <img class="logo" src="../assets/logo2_white.png" /> -->
      <div class="naesmi" ref="naesmi">
        <router-link to="/">НАЭСМИ</router-link>
      </div>
      <div v-if="isDesktop" class="nav-control">
        <div><router-link to="/rulers">правление</router-link></div>
        <div><router-link to="/about">Об ассоциации</router-link></div>
        <div><router-link to="/news">новости</router-link></div>
        <div><router-link to="/events">ивенты</router-link></div>
        <div
          style="position: relative"
          class="more-btn"
          tabindex="0"
          @mousedown="open.sheet = !open.sheet"
          v-click-outside="closeTab"
        >
          другое
          <i
            class="fas fa-chevron-down"
            style="padding-left: 8px; font-size: 12px; padding-top: 2px"
          ></i>
          <transition name="topopac" appear>
            <div v-show="open.sheet" class="open-sheet">
              <router-link to="/history"><div>История</div></router-link>
              <div>Устав</div>
              <div>Гранты</div>
              <div>Исследования и отчеты</div>
              <router-link to="/projects"><div>Проекты</div></router-link>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <div>
      <div style="position: relative; display: flex; align-items: center">
        <div style="display: flex; margin-right: 40px">
          <div v-if="!isMini" class="social-net-item">
            <i
              class="fab fa-telegram-plane"
              style="font-size: 26px; margin-right: 4px"
            ></i>
          </div>
          <div v-if="!isMini" class="social-net-item">
            <i class="fab fa-youtube" style="font-size: 26px"></i>
          </div>
          <div v-if="!isMini" class="social-net-item">
            <i class="fab fa-twitter" style="font-size: 26px"></i>
          </div>
          <div class="social-net-item" v-if="!isDesktop">
            <i class="far fa-bars" style="font-size: 26px"></i>
          </div>
        </div>
        <div class="search-bar" v-if="isDesktop ">
          <div class="search-btn">
            <i class="far fa-search" style=""></i>
          </div>
          <input placeholder="search" class="search-input" />
          <div
            style="
              width: 70px;
              pointer-events: none;
              height: 100%;
              position: relative;
            "
          ></div>
        </div>

        <!-- <div class="user-card">
          <div class="username">{{ user.username }}</div>
          <div class="avatar">
            <img
              :src="user.avatar"
              style="width: 100%; height: 100%; object-fit: cover"
            />
          </div>
          <i
            class="fas fa-chevron-down"
            style="padding-left: 8px; font-size: 12px; padding-top: 2px"
          ></i>
        </div> -->

        <!-- <div class="last-btn">
          <span
            style="
              font-weight: bold;
              line-height: 1.5em;
              z-index: 13;
              pointer-events: none;
            "
            >SUBSCRIBE</span
          >
          <span
            style="
              font-size: 0.9em;
              color: lightgrey;
              z-index: 12;
              pointer-events: none;
            "
            >Grab articles just for you</span
          >
          <div
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(45, 102, 179, 0.34);
              z-index: 10;
            "
          ></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      // user: {
      //   username: "DAD",
      //   avatar:
      //     "https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380",
      // },
      isMini: false,
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      open: {
        sheet: false,
      },
    };
  },
  created() {
    window.addEventListener("resize", this.checkResponsive);
  },
  unmounted() {
    window.removeEventListener("resize", this.checkResponsive());
  },
  watch: {},
  mounted: function () {
    this.checkResponsive();
  },
  methods: {
    checkResponsive() {
      this.isMini = window.innerWidth <= 600;
      this.isMobile = window.innerWidth <= 800 && window.innerWidth > 600;
      this.isTablet = window.innerWidth < 1540 && window.innerWidth > 800;
      this.isDesktop = window.innerWidth >= 1540;
      // console.log(window.innerWidth);
      // console.log("desktop ", this.isDesktop);
      // console.log("mobile ", this.isMobile);
      // console.log("tablet ", this.isTablet);
    },
    closeTab() {
      this.open.sheet = false;
    },
  },
};
</script>

<style scoped>
.app-bar {
  position: relative;
  width: 100%;
  height: 68px;
  background-color: #2d66b3;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  cursor: pointer;
  height: 100%;
  padding: 0 50px;
}

.nav-control > div {
  text-transform: uppercase;
  font-weight: bold;
  height: 39px;
  display: flex;
  justify-content: center;
  padding: 0 18px;
  letter-spacing: 2px;
  border-right: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-control > div:hover {
  color: lightgray;
}

.nav-control {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  align-items: flex-end;
}

.nav-control div:last-child {
  border-right: none;
}

.search-bar {
  position: relative;
  height: 40px;
  width: 240px;
  border: 2px solid #6a96d4;
  border-radius: 4px;
  display: flex;
  transition: all 0.2s;
  display: flex;
  margin-right: 50px;
}

.search-input {
  margin-left: 10px;
  background-color: #2d66b3;
  border-radius: 4px;
  color: #fff;
  transition: all 0.2s;
  width: 100%;
  height: 100%;
}

.search-input::placeholder {
  color: #6a96d4;
}

.search-bar:focus-within {
  outline: none !important;
  border: 2px solid #4992f7;
  box-shadow: 0 0 10px #719ece;
}

.search-input:focus {
  outline: none !important;
  transition: all 0.2s;
}

.search-btn {
  position: absolute;
  top: 50%;
  right: 0;
  height: 100%;
  width: 54px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #2d66b3;
  color: white;
  border-radius: 0 2px 2px 0;
  transition: all 0.2s;
}

.search-btn:hover {
  color: black;
  background-color: white;
}

.user-card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}

.username {
  font-weight: bold;
  padding: 0 10px;
}

.avatar {
  position: relative;
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.last-btn {
  height: 68px;
  position: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  background: url("../assets/bg.jpg");
  /* background: url("https://www.edureka.co/blog/wp-content/uploads/2018/03/top-reasons-to-selenium1.png"); */
  background-size: cover;
}

.naesmi {
  font-family: "NewCyrillicGoth";
  margin: 0 40px;
  height: 100%;
  font-size: 30px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  text-transform: capitalize;
  cursor: pointer;
}

.social-net-item {
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  margin: 0 8px;
}

.social-net-item:hover {
  background-color: white;
  color: #000;
}

.open-sheet {
  position: absolute;
  background-color: white;
  bottom: 0;
  left: -1px;
  transform: translateY(100%);
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #2d66b3;
  transition: all 0.4s ease-in;
}

.more-btn:focus-within {
  outline: none;
}

.open-sheet div {
  padding: 18px 30px;
  text-align: start;
  background-color: white;
  transition: all 0.2s ease;
  line-height: 1.4em;
}

.open-sheet div:hover {
  text-align: start;
  background-color: #2d66b3;
  color: white;
}

.topopac-enter-active,
.topopac-leave-active {
  transition: all 0.4s ease;
}

.topopac-enter-from,
.topopac-leave-to {
  opacity: 0;
}
</style>