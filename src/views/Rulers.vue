<template>
  <div>
    <br />
    <br />
    <br />
    <div class="human_warp">
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
            <div class="human-photo-back">
              <div></div>
            </div>
          </transition>
          <transition name="scale2" appear>
            <div>
              <img :src="human.image" :alt="human.name" />
            </div>
          </transition>
        </div>
        <div class="human_width">
          <div>
            <div
              class="human_desc"
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
                    font-size: 40px;
                    line-height: 65px;
                  "
                >
                  {{ human.title }}
                </div>
              </transition>
              <template v-if="(index + 1) % 2 == 0">
                <transition name="topop" appear>
                  <div style="padding-right: 0.4em">{{ human.last_name }}</div>
                </transition>
                <transition name="bottomop" appear>
                  <div style="padding-right: 0.4em">{{ human.first_name }}</div>
                </transition>
                <transition name="topop" appear>
                  <div style="padding-right: 0.4em">{{ human.name }}</div>
                </transition>
              </template>
              <template v-else>
                <transition name="topop" appear>
                  <div style="padding-right: 0.4em">{{ human.name }}</div>
                </transition>
                <transition name="bottomop" appear>
                  <div style="padding-right: 0.4em">{{ human.first_name }}</div>
                </transition>
                <transition name="topop" appear>
                  <div style="padding-right: 0.4em">{{ human.last_name }}</div>
                </transition>
              </template>
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
                  <div class="discription">
                    <span v-html="human.description"></span>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rulers",
  created() {
    this.getRulers();
  },
  methods: {
    getRulers() {
      fetch("http://127.0.0.1:8000/people/")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.rulers = json["results"];
        });
    },
  },
  data() {
    return {
      rulers: [
        {
          title: "",
          image: "",
          name: "",
          first_name: "",
          last_name: "",
          description: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.human_warp {
  padding: 0 60px;
}

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

.human_width {
  width: calc(100% - 480px);
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 300px;
}

.human_desc {
  font-size: 60px;
  display: flex;
  flex-wrap: wrap;
}

.discription {
  width: 60%;
  line-height: 1.4em;
  letter-spacing: 1px;
}
@media screen and (max-width: 1200px) {
  .human_desc {
    margin: 0 20px;
    font-size: 30px;
    display: flex;
    flex-wrap: wrap;
  }
  .discription {
    width: 80%;
    margin-bottom: 60px;
  }
}
@media screen and (max-width: 991px) {
  .human_desc {
    margin: 0 20px;
    font-size: 30px;
    display: flex;
    flex-wrap: wrap;
  }
  .discription {
    width: 100%;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 576px) {
  .human-photo-wrapper {
    margin: 0;
    width: 290px;
    height: 550px;
  }

  .human_warp {
    padding: 0 15px;
  }

  .human-photo-back {
    display: none;
  }

  .human-photo-wrapper img {
    width: 290px;
    height: 500px;
  }

  .human_desc {
    margin: 0 20px;
    font-size: 25px;
    display: flex;
    flex-wrap: wrap;
  }

  .discription {
    width: 100%;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 360px) {
  .human-photo-wrapper img {
    width: 290px;
    height: 500px;
  }
  .human_width {
    width: 100%;
  }
}
</style>