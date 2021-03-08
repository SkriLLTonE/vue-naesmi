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
              Ariza yuborish
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
                  Biz bilan ulanish:
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
                O'zbekiston, 100106, Toshkent

                <p>Н Navoiy, 15-uy, 1-uy</p>

                <br />
                <div style="font-size: 18px; line-height: 1.5em">
                  Tel: +998(99) 777-77-77
                </div>
                <div style="font-size: 18px; line-height: 1.5em">
                  Faks: +998(99) 777-77-76
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
                  Biz haqimizda:
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
                <div @click="routerHandler('/history')">Tarix</div>
              </div>
              <div class="route">
                <div @click="routerHandler('/news')">Yangiliklar</div>
              </div>
              <div class="route">
                <div @click="routerHandler('/rulers')">Boshqaruv</div>
              </div>
              <div class="route">
                <div @click="routerHandler('/about')">Uyushma Haqida</div>
              </div>
              <div class="route">
                <div @click="routerHandler('/events')">Tadbirlar</div>
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
                  Loyihalar:
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
          © 2004 - {{ new Date().getFullYear() }} "O'zbekiston elektron ommaviy
          axborot vositalari milliy assotsiatsiyasi.
          <br />
          Barcha huquqlar himoyalangan.
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
  <div class="modal">
    <div class="modal-content">
      <div class="container">
        <form>
          <div style="display: flex; flex-direction: row-reverse">
            <div class="social-net-item">
              <i
                class="far fa-times"
                style="font-size: 26px;"
              ></i>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="fname">Tashkilot nomi</label>
            </div>
            <div class="col-75">
              <input type="text" id="fname" name="firstname" placeholder="" />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Aloqa uchun shaxs</label>
            </div>
            <div class="col-75">
              <input type="text" id="lname" name="lastname" placeholder="" />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="country">Telefon raqami</label>
            </div>
            <div class="col-75">
              <input type="text" id="lname" name="lastname" placeholder="" />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="country">Email</label>
            </div>
            <div class="col-75">
              <input type="text" id="lname" name="lastname" placeholder="" />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="subject">Xabar</label>
            </div>
            <div class="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder=""
                style="height: 200px"
              ></textarea>
            </div>
          </div>
          <div class="row">
            <input type="submit" value="Yuborish" />
          </div>
        </form>
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
      form: {
        title: "",
        face: "",
        phone: "",
        email: "",
        message: "",
      },
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
* {
  box-sizing: border-box;
}

.row {
  padding: 20px 0;
}

input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type="submit"] {
  background-color: #2d66b3;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type="submit"]:hover {
  background-color: #2d66b3;
}

.container {
  border-radius: 5px;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fff;
  margin: 0 auto;
  padding: 20px;
  margin-top: 100px;
  border-radius: 8px;
  max-width: 800px;
  width: auto;
}

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
  background-color: #4493ff;
  color: #fff;
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