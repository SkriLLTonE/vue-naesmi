<template>
  <div>
    <div
      :style="'background-image: url(' + background + ')'"
      style="
        width: 100%;
        background-size: cover;
        background-position: center;
        margin-top: 50px;
        color: white;
        text-align: start;
        position: relative;
      "
    >
      <div
        style="
          height: 100%;
          position: relative;
          z-index: 20;
          width: 92%;
          margin-left: 4%;
        "
      >
        <div class="footer_links">
          <button class="button-container" style="height: 60px">
            <div style="font-weight: bold; color: white; font-size: 20px">
              Отправить заявку
            </div>
          </button>
          <div class="social_network_block">
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
        </div>
        <div class="footer_nav">
          <div class="footer_nav">
            <div style="padding: 0px 30px">
              <div style="position: relative; margin-bottom: 30px">
                <div
                  style="
                    font-size: 30px;
                    font-weight: bold;
                    padding: 30px 0 10px 0;
                  "
                >
                  Контакты:
                </div>
                <div
                  style="
                    position: absolute;
                    background-color: #4493ff;
                    width: 40px;
                    height: 3px;
                    bottom: 0px;
                    left: 0;
                  "
                ></div>
              </div>
              <div style="font-size: 18px; line-height: 1.5em">
                Узбекистан, 100106, Ташкент
                <p>Навои, д. 15, к. 1</p>

                <br />
                <div style="font-size: 18px; line-height: 1.5em">
                  Тел: +998(99) 777-77-77
                </div>
                <div style="font-size: 18px; line-height: 1.5em">
                  Факс: +998(99) 777-77-76
                </div>
                <div style="font-size: 18px; line-height: 1.5em">
                  E-mail: info@naesmi.uz
                </div>
              </div>
            </div>

            <div style="padding: 0px 30px">
              <div style="position: relative; margin-bottom: 30px">
                <div
                  style="
                    font-size: 30px;
                    font-weight: bold;
                    padding: 30px 0 10px 0;
                  "
                >
                  О нас:
                </div>
                <div
                  style="
                    position: absolute;
                    background-color: #4493ff;
                    width: 40px;
                    height: 3px;
                    bottom: 0px;
                    left: 0px;
                  "
                ></div>
              </div>
              <div class="route">
                <div @click="routerHandler('/history')">История</div>
              </div>
              <div class="route">
                <div @click="routerHandler('/news')">Новости</div>
              </div>
              <div class="route">
                <div @click="routerHandler('/rulers')">Правление</div>
              </div>
              <div class="route">
                <div @click="routerHandler('/about')">Об Ассоциации</div>
              </div>
              <div class="route">
                <div @click="routerHandler('/events')">Ивенты</div>
              </div>
            </div>

            <div style="padding: 0px 30px">
              <div style="position: relative; margin-bottom: 30px">
                <div
                  style="
                    font-size: 30px;
                    font-weight: bold;
                    padding: 30px 0 10px 0;
                  "
                >
                  Проекты:
                </div>
                <div
                  style="
                    position: absolute;
                    background-color: #4493ff;
                    width: 40px;
                    height: 3px;
                    bottom: 0px;
                    left: 0;
                  "
                ></div>
              </div>
              <div
                class="route"
                v-for="(project, index) in projects"
                :key="index"
              >
                <a
                  :href="project.url"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {{ project.name }}</a
                >
              </div>
            </div>
          </div>
        </div>

        <div
          style="
            font-weight: bold;
            text-align: start;
            padding: 20px 30px;
            line-height: 1.8em;
          "
        >
          © 2004 - 2021. «Национальная ассоциация электронных СМИ Узбекистан.
          <br />
          Все права защищены.
        </div>
      </div>
      <div
        style="
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          top: 0;
          left: 0;
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "",
          description: "",
          image: "",
          url: null,
          last_change: "",
        },
      ],
    };
  },
  computed: {
    background() {
      return require("../assets/foot_bg.jpg");
    },
  },
  mounted: function () {
    this.getProjects();
  },
  watch: {},
  methods: {
    routerHandler(route) {
      this.$router.push(route);
      window.scrollTo(0, 0);
    },
    getProjects() {
      fetch("http://127.0.0.1:8000/projects/?limit=7&ordering=-last_change")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.projects = json["results"];
        });
    },
  },
};
</script>

<style scoped>
.footer_links {
  display: flex;
  padding-top: 50px;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
}

.social-network {
  border-radius: 30px;
  margin: 20px 0;
  margin-right: 30px;
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

.button-container {
  background-color: #4493ff;
  height: 50px;
  border-radius: 4px;
  padding: 0 20px;
}

.route {
  transition: all 0.2s ease;
  cursor: pointer;
  width: auto;
  margin-bottom: 20px;
  color: white;
  max-width: 320px;
  line-height: 1.5em;
  transition: all 0.2s ease;
}

.route:hover {
  color: #4493ff;
}

.social_network_block {
  display: flex;
}

.footer_nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 50px 0;
}

@media screen and (max-width: 768px) {
  .footer_links {
    display: block;
    text-align: center;
    padding-left: 0;
  }

  .social_network_block {
    display: block;
    padding: 0 40px;
  }

  .footer_nav {
    display: block;
  }

  .social-network {
    margin: 30px 0;
  }
}
</style>