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
      <div class="naesmi" ref="naesmi">
        <router-link to="/">НАЭСМИ</router-link>
      </div>
      <div v-if="isDesktop" class="nav-control">
        <div>
          <div @click="routerHandler('/rulers')">boshqaruv </div>
        </div>
        <div>
          <router-link to="/about">Uyushma haqida</router-link>
        </div>
        <div>
          <router-link to="/news">yangiliklar</router-link>
        </div>
        <div>
          <router-link to="/events">Tadbirlar</router-link>
        </div>
        <div
          style="position: relative"
          class="more-btn"
          tabindex="0"
          @mousedown="open.sheet = !open.sheet"
          v-click-outside="closeTab"
        >
          qo'shimcha
          <i
            class="fas fa-chevron-down"
            style="padding-left: 8px; font-size: 12px; padding-top: 2px"
          ></i>
          <transition name="topopac" appear>
            <div v-show="open.sheet" class="open-sheet">
              <router-link to="/history">
                <div>Tarix</div>
              </router-link>
              <div>
                <a @click="routerHandler('/docs')" target="_blank">Hujjatlar</a>
              </div>
              <router-link to="/grants">
                <div>Grantlar</div>
              </router-link>
              <!-- <div>Исследования и отчеты</div> -->
              <router-link to="/projects">
                <div>Loyihalar</div>
              </router-link>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <div>
      <div class="social-net">
        <div style="display: flex">
          <div v-if="!isMini" class="social-net-item">
            <a href="https://t.me/oavuzbekistan" target="_blank">
              <i class="fab fa-telegram-plane"
              style="font-size: 26px; margin-right: 4px"></i>
            </a>
          </div>
          <div v-if="!isMini" class="social-net-item">
            <a href="https://www.instagram.com/oavuz/" target="_blank">
            <i class="fab fa-instagram" style="font-size: 26px"></i>
            </a>
          </div>
          <div v-if="!isMini" class="social-net-item">
            <a href="https://www.facebook.com/oavuz" target="_blank">
            <i class="fab fa-facebook-f" style="font-size: 26px"></i>
            </a>
          </div>
          <div
            class="social-net-item-g"
            v-if="!isDesktop"
            @click="open.drawer = !open.drawer"
          >
            <i class="far fa-bars" style="font-size: 26px"></i>
          </div>
        </div>
        <form @submit.prevent="searchHandler()" class="search-bar" v-if="isDesktop">
          <button type="submit" class="search-btn">
            <i class="far fa-search" style=""></i>
          </button>
          <input v-model="search" placeholder="Qidirish" class="search-input" />
          <div
            style="
              width: 70px;
              pointer-events: none;
              height: 100%;
              position: relative;
            "
          ></div>
        </form>
      </div>
    </div>
    <div
      v-if="!isDesktop"
      :class="{ open: open.drawer }"
      class="drawer-wrapper"
    >
      <div class="inner-wrapper">
        <div>
          <div class="icon_close" style="cursor: pointer" @click="open.drawer = !open.drawer">
            <span><i class="fal fa-times"></i></span>
          </div>
        </div>
        <div class="nav-menu">
          <div class="nav_menu_item">
            <div class="nav_menu_item_link">
              <div @click="routerHandler('/rulers')">Boshqaruv</div>
            </div>
          </div>
          <div class="nav_menu_item">
            <div class="nav_menu_item_link">
              <div @click="routerHandler('/about')">Uyushma Haqida</div>
            </div>
          </div>
          <div class="nav_menu_item">
            <div class="nav_menu_item_link">
              <div @click="routerHandler('/news')">Yangiliklar</div>
            </div>
          </div>
          <div class="nav_menu_item">
            <div class="nav_menu_item_link" @click="routerHandler('/events')">
              <!-- <router-link to="/events">Ивенты</router-link>-->
              Tadbirlar
            </div>
          </div>
          <div
            :class="
              expandedList === 'about'
                ? 'nav_menu_item active'
                : 'nav_menu_item'
            "
          >
            <div
              class="nav_menu_item_link"
              @click="expandedList = expandedList !== 'about' ? 'about' : ''">
              Qo'shimcha
              <i class="fas fa-chevron-down down"> </i>
            </div>
            <div class="sub_menu">
              <div class="sub_menu_item">
                <div class="sub_menu_item_link">
                  <div @click="routerHandler('/history')">Tarix</div>
                </div>
              </div>
              <!-- TODO -->
              <div class="sub_menu_item">
                <div class="sub_menu_item_link">
                  <a @click="routerHandler('/docs')" target="_blank">Hujjatlar</a>
                </div>
              </div>
              <div class="sub_menu_item">
                <div class="sub_menu_item_link">
                  <div @click="routerHandler('/grants')">Grantlar</div>
                </div>
              </div>

              <div class="sub_menu_item">
                <div class="sub_menu_item_link">
                  <div @click="routerHandler('/projects')">Loyihalar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <form @submit.prevent="searchHandler()" class="search_bar">
          <button type="submit" class="search_btn">
            <i class="far fa-search" style=""></i>
          </button>
          <input v-model="search" placeholder="Qidirish" class="second_search_input" />
          <div
            style="
              color: black;
              pointer-events: none;
              height: 100%;
              position: relative;
            "
          ></div>
        </form>
        <br />
        <br />

        <div style="display: flex; justify-content: space-around">
          <div class="social-net-item-drawer">
            <a href="https://t.me/oavuzbekistan" target="_blank">
            <i
              class="fab fa-telegram-plane"
              style="font-size: 26px; margin-right: 4px"></i>
            </a>
          </div>
          <div class="social-net-item-drawer">
            <a href="https://www.instagram.com/oavuz/" target="_blank">
            <i class="fab fa-instagram" style="font-size: 26px"></i>
            </a>
          </div>
          <div class="social-net-item-drawer">
            <a href="https://www.facebook.com/oavuz" target="_blank">
            <i class="fab fa-facebook-f" style="font-size: 26px"></i>
            </a>
          </div>
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
    return {
      expandedList: "",
      // user: {
      //   username: "DAD",
      //   avatar:
      //     "https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380",
      // },
      isMini: false,
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      search: "",
      open: {
        sheet: false,
        drawer: false,
      },
    };
  },
  created() {
    window.addEventListener("resize", this.checkResponsive);
  },
  unmounted() {
    window.removeEventListener("resize", this.checkResponsive);
  },
  watch: {},
  mounted: function () {
    this.checkResponsive();
  },
  methods: {
    routerHandler(route) {
      this.$router.push(route);
      window.scrollTo(0, 0);
      this.open.drawer = false;
      this.open.sheet = false;
    },
    searchHandler() {
      this.$router.push(`/search/${this.search}`)
      this.open.drawer = false
      return false
    },
    checkResponsive() {
      this.isMini = window.innerWidth <= 600;
      this.isMobile = window.innerWidth <= 800 && window.innerWidth > 600;
      this.isTablet = window.innerWidth <= 1540 && window.innerWidth > 800;
      this.isDesktop = window.innerWidth > 1540;
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
  margin-right: 50px;
}

.search_bar {
  position: relative;
  height: 40px;
  width: 100%;
  border: 2px solid #6a96d4;
  border-radius: 4px;
  display: flex;
  transition: all 0.2s;
}

.search-input {
  background-color: #2d66b3;
  padding-left: 15px;
  color: #fff;
  transition: all 0.2s;
  width: 100%;
  height: 100%;
}

.second_search_input {
  padding-left: 15px;
  color: #000;
  transition: all 0.2s;
  width: 100%;
  height: 100%;
}

.search-input::placeholder {
  color: #6a96d4;
}

.search_btn {
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
  color: #2d66b3;
  border-radius: 0 2px 2px 0;
  transition: all 0.2s;
  background-color: #fff;
}

.search_btn:hover {
  color: white;
  background-color: #2d66b3;
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
.social-net-item-g {
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

.social-net-item-drawer {
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  margin: 0 8px;
  color: #000;
}

.social-net-item-drawer:hover {
  background-color: #2d66b3;
  color: #fff;
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

.drawer-wrapper {
  position: fixed;
  height: 100%;
  width: 400px;
  background-color: white;
  top: 0;
  right: 0;
  z-index: 100;
  transform: translateX(100%);
  transition: all 0.4s ease-in-out;
}

.drawer-wrapper.open {
  transform: none;
}

.inner-wrapper {
  padding: 40px;
}

.icon_close {
  text-align: right;
  font-size: 30px;
  color: black;
}

.nav-menu {
  color: black;
  float: left;
  text-align: left;
}

.nav_menu_item {
  line-height: 30px;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 5px 0;
}

.nav_menu_item:hover {
  color: lightgray;
}

.sub_menu {
  transition: all 0.3s ease-in-out 0s;
  height: 0;
  position: relative;
  list-style: none;
  opacity: 0;
  pointer-events: none;
  padding: 14px 0 30px 20px;
}

.nav_menu_item.active .sub_menu {
  height: 100%;
  pointer-events: all;
  opacity: 1;
}

.sub_menu {
  transition: all 0.3s ease-in-out 0s;
  height: 0;
  position: relative;
  list-style: none;
  opacity: 0;
  pointer-events: none;
  padding-left: 20px;
  color: black;
}

.sub_menu_item {
  line-height: 1.5em;
}

.sub_menu_item:hover {
  color: lightgray;
}
.social-net{
  position: relative;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1200px) {
  .nav-control{
    display: none;
  }
}
@media screen and (max-width: 991px) {

}

@media screen and (max-width: 768px) {
  .drawer-wrapper {
    width: 420px;
  }
}
@media screen and (max-width: 576px) {
  .drawer-wrapper {
    width: 100%;
  }
  .social-net-item{
    display: none;
  }
}
</style>