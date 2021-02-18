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
      <div class="naesmi">NAEMM</div>
      <div class="nav-control">
        <div>news</div>
        <div>sports</div>
        <div>business</div>
        <div>
          more
          <i
            class="fas fa-chevron-down"
            style="padding-left: 8px; font-size: 12px; padding-top: 2px"
          ></i>
        </div>
      </div>
    </div>
    <div>
      <div style="position: relative; display: flex; align-items: center">
        <div class="search-bar">
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

        <div class="user-card">
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
        </div>

        <div class="last-btn">
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
      user: {
        username: "DAD",
        avatar:
          "https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380",
      },
    };
  },
  mounted: function () {},
  watch: {},
  methods: {},
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
  background-color: white;
  color: black;
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
  font-family: 'NewCyrillicGoth';
  padding: 0 40px;
  height: 100%;
  font-size: 30px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  text-transform: capitalize;
}
</style>