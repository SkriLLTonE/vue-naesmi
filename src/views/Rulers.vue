<template>
  <div>
    <transition name="topper" appear>
      <Header />
    </transition>
    <br />
    <br />
    <br />
    <div style="padding: 0 60px">
      <div
        :style="
          (index + 1) % 2 == 0
            ? 'flex-direction: row;'
            : 'flex-direction: row-reverse;'
        "
        class="human-wrapper"
        v-for="(human, index) in rulers"
        :key="index"
      >
        <div class="human-photo-wrapper">
          <transition name="scale" appear>
            <div class="human-photo-back"><div></div></div>
          </transition>
          <transition name="scale2" appear>
            <div>
              <img :src="human.img" :alt="human.name" />
            </div>
          </transition>
        </div>
        <div style="width: calc(100% - 480px)">
          <div>
            <div
              style="font-size: 60px; display: flex; flex-wrap: wrap"
              :style="
                (index + 1) % 2 == 0
                  ? 'flex-direction: row-reverse;'
                  : 'flex-direction: row;'
              "
            >
              <transition name="leftop" appear>
                <div
                  :style="
                    (index + 1) % 2 == 0
                      ? 'text-align: end;'
                      : 'text-align: start;'
                  "
                  style="
                    padding-right: 0.4em;
                    width: 100%;
                    font-weight: bold;
                    font-size: 45px;
                    line-height: 65px;
                  "
                >
                  {{ human.title }}
                </div>
              </transition>
              <transition name="topop" appear>
                <div style="padding-right: 0.4em">{{ human.name }}</div>
              </transition>
              <transition name="bottomop" appear>
                <div style="padding-right: 0.4em">{{ human.second_name }}</div>
              </transition>
              <transition name="topop" appear>
                <div style="padding-right: 0.4em">{{ human.third_name }}</div>
              </transition>
            </div>
          </div>
          <br />
          <br />
          <transition name="leftop" appear>
            <div
              style="text-align: start; font-size: 20px"
              :style="
                (index + 1) % 2 == 0
                  ? 'padding-right: 30px'
                  : 'padding-left: 30px'
              "
            >
              <div style="display: flex">
                <div
                  style="width: 100%; display: flex"
                  :style="
                    (index + 1) % 2 == 0
                      ? 'flex-direction: row-reverse; text-align: end;'
                      : 'flex-direction: row'
                  "
                >
                  <div
                    style="width: 60%; line-height: 1.4em; letter-spacing: 1px"
                  >
                    {{ human.description }}
                  </div>
                </div>
              </div>
            </div></transition
          >
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Rulers",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      rulers: [
        {
          title: "Председатель",
          img: "https://legacy.uz//media/1/author-firdavs.jpg",
          name: "Фирдавc",
          second_name: "Фридунович",
          third_name: "Абдухаликов",
          description: "С 2003 г. по настоящее время - председатель правления Национальной ассоциации электронных СМИ Узбекистана.",
        },
        {
          title: "Куратор",
          img:
            "https://cdn22.img.ria.ru/images/155359/22/1553592219_598:0:2493:1895_1440x0_80_0_0_fe7f98e89da13d2274b81adc76236741.jpg",
          name: "Инкогнито",
          second_name: "Смирновна",
          third_name: "Соболева",
          description: "С 2003 г. по настоящее время - председатель правления Национальной ассоциации электронных СМИ Узбекистана.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.human-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-between;
  align-items: center;
}

.human-photo-wrapper {
  width: 400px;
  height: 700px;
  position: relative;
  margin-right: 40px;
}

.human-photo-wrapper img {
  position: absolute;
  left: 0;
  height: 600px;
  object-fit: cover;
  width: 400px;
}

.human-photo-back {
  position: absolute;
  background-color: #4493ff;
  width: 100%;
  height: 640px;
  top: 0;
  left: 40px;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1), left 0.8s ease;
}

.scale-enter-from,
.scale-leave-to {
  height: 600px;
  left: 0;
}

.topop-enter-active,
.topop-leave-active {
  transition: all 0.6s ease, opacity 1s ease-in;
}

.topop-enter-from,
.topop-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}

.bottomop-enter-active,
.bottomop-leave-active {
  transition: all 0.8s ease, opacity 1s ease-in;
}

.bottomop-enter-from,
.bottomop-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

.scale2-enter-active,
.scale2-leave-active {
  transition: all 0.6s ease, opacity 0.4s ease;
}

.scale2-enter-from,
.scale2-leave-to {
  transform: scale(0.8);
  opacity: 0.6;
}

.leftop-enter-active,
.leftop-leave-active {
  transition: all 0.6s ease, opacity 1s ease-in;
}

.leftop-enter-from,
.leftop-leave-to {
  transform: translateX(-10%);
  opacity: 0;
}
</style>