<template>
  <div>
    <div
      style="
        width: 100%;
        background: url('https://tvkinoradio.ru/upload/ckeditor/article/images/2016-05-26_RUS_MSK_TVKINORADIO_RT%28STUDIO%29-0017.jpg');
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
          width: 94%;
          margin-left: 3%;
          height: 100%;
          position: relative;
          z-index: 20;
        "
      >
        <div
          style="
            display: flex;
            padding-top: 50px;
            justify-content: space-between;
            align-items: center;
          "
        >
          <button class="button-container">
            <div style="font-weight: bold; color: white">
              Send an application
            </div>
          </button>
          <div style="display: flex">
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
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <div
            style="
              display: flex;
              justify-content: space-around;
              width: 100%;
              padding: 50px 0;
            "
          >
            <div>
              <div style="position: relative; margin-bottom: 30px">
                <div
                  style="
                    font-size: 30px;
                    font-weight: bold;
                    padding: 30px 0 10px 0;
                  "
                >
                  Contacts:
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
                Uzbekistan, 100106, Tashkent
                <p>Navoiu St., h. 15, r. 1</p>
              </div>
              <br />
              <div style="font-size: 18px; line-height: 1.5em">
                Phone: +998(99) 777-77-77
              </div>
              <div style="font-size: 18px; line-height: 1.5em">
                Fax: +998(99) 777-77-76
              </div>
              <div style="font-size: 18px; line-height: 1.5em">
                E-mail: info@naesmi.uz
              </div>
            </div>

            <div>
              <div style="position: relative; margin-bottom: 30px">
                <div
                  style="
                    font-size: 30px;
                    font-weight: bold;
                    padding: 30px 0 10px 0;
                  "
                >
                  About:
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
              <div class="route">History</div>
              <div class="route">State</div>
              <div class="route">Direction</div>
              <div class="route">Symbolics</div>
              <div class="route">Performance</div>
            </div>

            <div>
              <div style="position: relative; margin-bottom: 30px">
                <div
                  style="
                    font-size: 30px;
                    font-weight: bold;
                    padding: 30px 0 10px 0;
                  "
                >
                  Projects:
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
              <div class="route">NAEMM Academy</div>
              <div class="route">On Board!</div>
              <div class="route">Heroes of our time</div>
              <div class="route">Legacy</div>
              <div class="route">NAEMM Congress</div>
              <div class="route">First step</div>
              <div class="route">NAEMMEXPO</div>
            </div>
          </div>
        </div>

        <div
          style="
            font-weight: bold;
            text-align: start;
            padding: 20px 0;
            line-height: 1.8em;
          "
        >
          © 2004 - 2021. "National Association of Electronic Mass Media of
          <br />
          Uzbekistan" All rights reserved.
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
  transition: all 0.2s ease;
}

.route:hover {
  color: #4493ff;
}
</style>