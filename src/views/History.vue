<template>
  <div>
    <transition name="fade" appear>
      <div v-if="history.length > 0">
        <div style="padding: 0 40px">
          <div style="width: 100%; height: auto; position: relative">
            <div
              style="
                width: 100%;
                height: 240px;
                display: flex;
                align-items: flex-end;
                padding-bottom: 120px;
                border-left: 12px solid #193c6b;
              "
            >
              <transition name="sliderleft" appear>
                <div class="history-mark" :style="{ transform: 'rotate(90deg) translateY(' + $t('history.move') + ')'}">{{ $t("headers.history") }}</div>
              </transition>
              <div class="history_img" style="">
                <img
                  class="history_img_pos"
                  src="../assets/logo_uz.png"
                  alt=""
                />
              </div>
            </div>
            <div
              v-for="(item, index) in history"
              :key="index"
              class="history-elem"
              :style="
                index + 1 === history.length
                  ? 'border-left: 12px solid transparent;'
                  : ''
              "
            >
              <div
                v-if="index + 1 === history.length"
                style="
                  top: 0;
                  left: 0;
                  position: absolute;
                  height: 40px;
                  width: 12px;
                  background-color: #193c6b;
                  transform: translateX(-12px);
                "
              ></div>
              <div class="history-dot"></div>
              <div class="history-date">
                {{ months[new Date(item.date).getMonth()] }}
                {{ new Date(item.date).getFullYear() }}
              </div>
              <div class="history-description">
                <span v-html="item.description"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade" appear>
      <div
        style="margin-top: 50px"
        class="lds-spinner"
        v-if="history.length === 0"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </transition>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  created() {
    this.getHistory(30);
  },
  computed: {
    months() {
      return [
        this.$t('months.january'),
        this.$t('months.february'),
        this.$t('months.march'),
        this.$t('months.april'),
        this.$t('months.may'),
        this.$t('months.june'),
        this.$t('months.july'),
        this.$t('months.august'),
        this.$t('months.september'),
        this.$t('months.october'),
        this.$t('months.november'),
        this.$t('months.december'),
      ]
    }
  },
  mounted() {
    document.title = this.$t("headers.history")
    this.$watch(
      "$route",
      (newLocale, oldLocale) => {
        if (newLocale === oldLocale) {
          return
        }
        document.title = this.$t("headers.history")
        this.getHistory(30);
      },
    )
  },
  methods: {
    getHistory(limit) {
      fetch(`https://api.oav.uz/${this.$i18n.locale}/history/?ordering=-date&limit=${limit}`)
        .then((res) => res.json())
        .then((resJSON) => {
          console.log(resJSON);
          this.history = resJSON["results"];
          console.log("asd", this.history);
          if (resJSON.count > limit) {
            console.log(resJSON.count);
            this.getHistory(resJSON.count);
          }
        });
    },
  },
  data() {
    return {
      history: [
        // {
        //   date: "",
        //   description: "",
        // },
      ],
    };
  },
};
</script>

<style scoped>
/*.banner {
  position: relative;
  width: 100%;
  height: 400px;
  background: url("../assets/history.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}*/

.history-mark {
  color: #193c6b;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 50px;
  transform: rotate(90deg) translateY(56px);
}

.history-elem {
  display: flex;
  position: relative;
  width: 100%;
  padding: 40px 0;
  flex-direction: column;
  align-items: flex-start;
  border-left: 12px solid #193c6b;
}

.history-dot {
  position: absolute;
  left: 0;
  top: 32px;
  height: 50px;
  width: 50px;
  background-color: #193c6b;
  border-radius: 50%;
  transform: translateX(-31px);
}

.history-date {
  font-weight: bold;
  font-size: 30px;
  padding-left: 40px;
}

.history-description {
  padding-left: 60px;
  padding-top: 20px;
  line-height: 1.6em;
  text-align: start;
  font-size: 22px;
}

/*.img-shadow {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #193c6b;
  left: 20px;
  top: 20px;
}*/
.history_img {
  width: 100%;
  height: 100%;
  background-size: cover;
  transform: translateY(50px);
}
.history_img_pos {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: relative;
  background-color: white;
}
@media screen and (max-width: 768px) {
  .history-description {
    font-size: 20px;
    line-height: 1em;
    padding-left: 40px;
  }
  .history-date {
    padding-left: 30px;
  }
  .history-elem {
    padding: 29px 0;
  }
}
@media screen and (max-width: 768px) {
  .history-description {
    font-size: 16px;
    line-height: 1em;
    padding-left: 20px;
  }
  .history_img {
    display: none;
  }
}
</style>