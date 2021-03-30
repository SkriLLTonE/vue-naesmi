<template>
  <div class="wrap" v-if="main">
    <div>
      <transition name="fade" appear>
        <div class="container">
          <div class="all-content">
            <div class="news_content">
              <div class="news_date">
                <span
                  >{{ ("0" + new Date(main.pub_date).getDate()).substr(-2) }}.{{
                    ("0" + (new Date(main.pub_date).getMonth() + 1)).substr(-2)
                  }}.{{ new Date(main.pub_date).getFullYear() }}</span
                >
              </div>
              <div class="news_title">
                <span>
                  {{ main.title }}
                </span>
              </div>
            </div>
            <div class="news_img">
              <img
                :src="main.image"
                style="width: 100%; height: 100%; object-fit: cover"
                :alt="main.title"
              />
            </div>
          </div>
          <div class="news_disc">
            <span v-html="main.description"></span>
          </div>
        </div>
      </transition>
    </div>
    <div class="container_n">
      <div class="heading">
        <span>{{ $t('general.other_news') }}</span>
      </div>
    </div>
    <div>
      <div class="container-sing-card">
        <div
          data-aos="fade-up"
          v-for="(item, index) in main.read_also"
          :key="index"
          class="single-card"
        >
          <router-link :to="$i18nRoute({ name: 'NewsDetail', params: { id : item.id }})">
            <div>
              <img class="single-card-img" :src="item.image" />
            </div>
            <div class="card-content">
              <div
                class="main-card-meta"
                style="font-size: 14px; padding: 0 0 0 10px"
              >
                {{ item.category.name }}
              </div>

              <div
                style="
                  font-size: 24px;
                  padding: 0 0 0 10px;
                  line-height: 1.4em;
                  padding-top: 10px;
                  font-weight: bold;
                  overflow: hidden;
                  height: 4em;
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                "
              >
                {{ item.title }}
              </div>

              <div
                style="display: flex; align-items: center; padding: 16px 0 0 10px"
              >
                <div
                  style="
                    width: 4px;
                    height: 4px;
                    background-color: black;
                    border-radius: 50%;
                  "
                ></div>
                <div style="font-weight: bold; font-size: 14px; padding: 0 12px">
                  {{ months[new Date(item.pub_date).getMonth()] }}
                  {{ new Date(item.pub_date).getDate() }}
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <transition name="fade" appear>
    <div style="margin: 200px 0;" class="lds-spinner" v-if="!main">
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
</template>

<script>
export default {
  name: "NewsDetail",
  props: ["id"],
  created() {
    // setTimeout(() => this.getNewsDetail(this.id), 1000);
    this.getNewsDetail(this.id);
  },
  methods: {
    getNewsDetail(id) {
      this.main = null
      fetch(`https://api.oav.uz/${this.$i18n.locale}/news-det/${id}/`)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.main = json;
          document.title = this.main.title;
        });
    },
  },
  mounted() {
      this.$watch(
      "$route",
      (newLocale, oldLocale) => {
          if (newLocale.params.locale === oldLocale.params.locale) return;
          this.getNewsDetail(this.id);
      },
      )
  },
  watch: {
    id(param) {
      this.getNewsDetail(param);
    }
  },
  data() {
    return {
      // months: [
      //   "Янв",
      //   "Фев",
      //   "Мар",
      //   "Апр",
      //   "Май",
      //   "Июн",
      //   "Июл",
      //   "Авг",
      //   "Сен",
      //   "Окт",
      //   "Ноя",
      //   "Дек",
      // ],
      months: [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentyabr",
        "Oktyabr",
        "Noyabr",
        "Dekabr",
      ],
      main: false,
      // main: {
        // id: 2,
        // category: {
        //   id: 1,
        //   name: "",
        // },
        // read_also: [
        //   {
        //     id: 7,
        //     category: {
        //       id: 1,
        //       name: "",
        //     },
        //     title: "",
        //     image: "",
        //     pub_date: "",
        //     last_change: "",
        //   },
        // ],
        // title: "",
        // description: "",
        // image: "",
        // pub_date: "",
        // last_change: "",
      // },
    };
  },
};
</script>

<style scoped>
.container-sing-card {
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.wrap {
  width: 94%;
  padding-left: 3%;
}

.all-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 25px;
}

.container {
  width: 100%;
  text-align: left;
}

.news_content {
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  width: 35%;
}

.news_date {
  font-size: 20px;
  color: gray;
}

.news_title {
  font-size: 50px;
  font-family: "Montserrat-Regular", sans-serif;
  text-align: left;
  font-weight: bold;
}

.news_img {
  width: 60%;
}

.news_img img {
  width: 100%;
  height: 500px;
  object-fit: contain;
}

.news_title {
  width: 100%;
}

.news_disc {
  padding-top: 20px;
  font-size: 26px;
}

.heading {
  text-align: left;
  font-size: 36px;
  color: #111;
  font-weight: bold;
  padding-top: 50px;
}

.card_img img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
}

.single-card {
  width: 340px;
  height: 440px;
  max-width: 370px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 40px;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  cursor: pointer;
}

.single-card:hover .single-card-img {
  transform: scale(1.05);
}

.single-card:hover .card-content {
  transform: translateY(-30px) translateX(-20px);
  background-color: #2d66b3;
  color: white;
}

.single-card:hover .main-card-meta {
  color: white;
}

.single-card-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 6px;
  transition: all 0.4s ease;
}

.card-content {
  width: 90%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  padding-top: 20px;
  text-align: start;
  transition: all 0.6s ease;
  transform: translateY(-20px) translateX(-20px);
}

@media screen and (max-width: 1200px) {
  .all-content {
    flex-direction: column;
  }

  .news_content {
    padding: 20px 0;
    flex-direction: column;
    width: 100%;
    margin-left: 0;
  }

  .news_img {
    width: 100%;
  }

  .news_disc {
    padding: 30px 15px;
    font-size: 23px;
  }

  .heading {
    padding: 30px 20px;
    font-size: 50px;
  }

  .news_title {
    font-size: 30px;
  }

  .news_img img {
    height: auto;
  }
}

@media screen and (max-width: 768px) {
  .all-content {
    flex-direction: column;
    padding: 0 30px;
  }

  .container {
    padding: 0;
  }

  .news_content {
    padding: 20px 0px;
    flex-direction: column;
    width: 100%;
    margin-left: 0;
  }

  .news_img {
    width: 100%;
  }

  .news_disc {
    padding: 20px 30px;
    font-size: 23px;
  }

  .news_title {
    font-size: 30px;
  }

  .news_img img {
    height: auto;
  }

  .heading {
    font-size: 40px;
    padding: 0 15px;
  }

  .news_disc {
    font-size: 16px;
    padding: 30px;
  }
  .container-sing-card {
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-top: 20px;
  }
  .single-card {
    width: 320px;
  }
}

@media screen and (max-width: 576px) {
  .heading {
    font-size: 30px;
    padding: 0;
  }
}
</style>