<template>
  <div style="width: 100%; display: flex; justify-content: center" ref="main_wrapper">
    <div style="width: 100%; max-width: 1200px">
      <br />
      <br />
      <br />
      <div
        style="
          font-size: 40px;
          text-align: start;
          position: relative;
          margin: 20px 0;
          padding: 0 10px;
          height: 60px;
          display: flex;
          align-items: center;
        "
      >
        <div
          style="
            position: absolute;
            height: 100%;
            width: 50px;
            top: 0;
            left: 0;
            background-color: rgba(68, 147, 255, 0.6);
          "
        ></div>
        <div style="position: relative ;font-family: Montserrat-Bold,sans-serif">Yangiliklar</div>
      </div>
      <div data-aos="fade-up" class="main-card-wrapper" @click="routerHandler(`/news/${news[0].id}`)" v-if="news.length > 0">
        <div>
          <div class="main-news-img">
            <img
             :src="news[0].image"
              class="main-card-wrapper-img"
            />
          </div>
        </div>
        <div class="main-card">
          <div class="card_st">
            <div
              class="main-card-meta"
              style="font-size: 14px; padding: 0 0 0 10px"
            >
              {{ news[0].category.name}}
            </div>
            <div
              style="
                font-size: 30px;
                padding: 0 0 0 10px;
                line-height: 1.4em;
                padding-top: 10px;
                font-weight: bold;
                max-height: 4em;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              "
            >
              {{ news[0].title}}
            </div>
            <div
              class="main-card-meta"
              style="
                font-size: 14px;
                padding: 14px 0 0 10px;
                line-height: 2em;
                max-height: 5.5em;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
              "
            >
            </div>
            <div style="display: flex; align-items: center; padding: 16px 0 0 16px">
              <div style="font-weight: bold; font-size: 14px; padding: 0 12px;">
                {{ months[new Date(news[0].pub_date).getMonth()] }}
                {{ new Date(news[0].pub_date).getDate() }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="
          margin-top: 50px; display: flex;flex-wrap: wrap; position: relative;justify-content: center;" class="single-card-holder" v-if="news.length > 0">
        <div data-aos="fade-up" @click="routerHandler(`/news/${item.id}`)" v-for="(item, index) in news" :key="index" class="single-card">
            <img
              class="single-card-img"
              :src="item.image"/>
              :alt="item.title"/>
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
                <div style="font-weight: bold; font-size: 14px">
                  {{ months[new Date(item.pub_date).getMonth()] }}
                  {{ new Date(item.pub_date).getDate() }}
                </div>
              </div>
            </div>
          </div>
      </div>
      <transition name="fade" appear>
        <div style="margin-top: 50px" class="lds-spinner" v-if="news.length === 0">
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
    </div>
  </div>

<!--  <div class="pagination">-->
<!--    <div class="pagination-list">-->
<!--      <a href="#">-->
<!--        <i class="fas fa-chevron-left"> </i>-->
<!--      </a>-->
<!--      <a href="#">1</a>-->
<!--      <a href="#" class="active">2</a>-->
<!--      <a href="#">3</a>-->
<!--      <a href="#">4</a>-->
<!--      <a href="#">5</a>-->
<!--      <a href="#">6</a>-->
<!--      <a href="#">-->
<!--        <i class="fas fa-chevron-right"> </i>-->
<!--      </a>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
export default {
  name: "News",
  components: {},
  data() {
    return {
      isMini: false,
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      open: {
        sheet: false,
      },
      offset: 0,
      diff: true,
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
      news: [
        // {
        //   title: "The Latest: Officer in Canada prime minister motorcade hurt",
        //   category: "INTERNATIONAL",
        //   description:
        //     "The Latest: Officer in Canada prime minister motorcade hurt",
        //   time: "Янв 25",
        // },
      ],
    };
  },
  created() {
    window.addEventListener("resize", this.checkResponsive);
    window.addEventListener("scroll", this.checkScroll);
    this.getNews();
  },
  unmounted() {
    window.removeEventListener("resize", this.checkResponsive());
    window.removeEventListener("scroll", this.checkScroll);
    clearTimeout(this.fetchTimeout);
  },
  watch: {},
  mounted: function () {
    this.checkResponsive();
  },
  methods: {
    checkResponsive() {
      this.isMini = window.innerWidth <= 600;
      this.isMobile = window.innerWidth <= 800 && window.innerWidth > 600;
      this.isTablet = window.innerWidth < 1444 && window.innerWidth > 800;
      this.isDesktop = window.innerWidth >= 1444;
      // console.log(window.innerWidth);
      // console.log("desktop ", this.isDesktop);
      // console.log("mobile ", this.isMobile);
      // console.log("tablet ", this.isTablet);
    },
    routerHandler(route) {
      this.$router.push(route);
      window.scrollTo(0, 0);
    },
    getNews() {
      fetch(
              `http://127.0.0.1:8000/news2/?ordering=-pub_date&limit=4&offset=${
                      this.offset * 4
              }`
      )
              .then((res) => {
                return res.json();
              })
              .then((json) => {
                if (this.offset === 0) {
                  this.news = json["results"];
                } else {
                  this.news = this.news.concat(json["results"]);
                }
                if (json.count <= this.news.length) {
                  window.removeEventListener("scroll", this.checkScroll);
                  if (this.fetchTimeout) clearTimeout(this.fetchTimeout);
                }
                this.offset++;
                console.log("me");
                console.log(json);
                console.log(this.offset);
              });
    },
    checkScroll() {
      this.diff =
              document.documentElement.scrollTop + window.innerHeight >=
              this.$refs.main_wrapper.offsetHeight;

      if (this.diff) {
        if (this.fetchTimeout) clearTimeout(this.fetchTimeout);
        this.fetchTimeout = setTimeout(() => {
          this.getNews();
        }, 200);
      }
    },
  },
};
</script>

<style scoped>
.main-news-img {
  width: 610px;
  height: 330px;
  overflow: hidden;
  border-radius: 6px;
}
.main-card-wrapper {
  display: flex;
  height: 330px;
  flex-shrink: 1;
  flex-basis: auto;
  overflow: hidden;
  cursor: pointer;
}

.main-card-wrapper-img {
  width: 610px;
  height: 100%;
  background-color: #2d66b3;
  border-radius: 6px;
  object-fit: cover;
  overflow: hidden;
  transition: all 0.2s ease;
}

.main-card-wrapper:hover .main-card-wrapper-img {
  transform: scale(1.1);
}

.main-card-wrapper:hover .main-card {
  transform: translate(-80px, 34px);
  color: white !important;
  background-color: #2d66b3;
}

.main-card-wrapper:hover .main-card-meta {
  color: white !important;
}

.main-card {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background-color: white;
  transform: translate(-60px, 34px);
  transition: transform 0.2s ease, all 0.6s ease;
}

.main-card-meta {
  color: gray;
  transition: all 1s ease;
  pointer-events: none;
}

.single-card-holder .single-card:first-child{
  display: none;
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
.card_st {
  margin: 20px 0 0 20px;
  text-align: start;
}

.pagination-list {
  display: flex;
  justify-content: center;
  padding: 0 5px;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 10px;
  text-decoration: none;
  transition: background-color 0.3s;
  border-radius: 50%;
  margin: 0 5px;
}

.pagination a:hover {
  background-color: #2d66b3;
  color: white;
}

.active {
  background-color: #2d66b3;
}
.active {
  color: white !important;
}

@media screen and (max-width: 1200px) {
  .main-news-img {
    width: 500px;
  }
  .main-card-wrapper {
    padding: 0 30px;
  }
  .main-card-wrapper-img {
    width: 500px;
  }
  .main-card {
    width: 600px;
  }
}

@media screen and (max-width: 991px) {
  .main-news-img {
    width: 400px;
  }
  .main-card-wrapper {
    padding: 0 30px;
  }
  .main-card-wrapper-img {
    width: 400px;
  }
}
@media screen and (max-width: 768px) {
  .main-card {
    padding: 40px;
    transform: translate(0px, 20px);
  }
  .main-card-wrapper {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: auto;
  }

  .main-card-wrapper:hover .main-card {
    transform: translate(0, -36px);
    color: white !important;
    background-color: #2d66b3;
  }

  .main-card-wrapper:hover .main-card-meta {
    color: white !important;
  }
}
@media screen and (max-width: 576px) {
  .main-news-img {
    width: 400px;
  }
  .main-card-wrapper {
    padding: 0 30px;
  }
  .main-card-wrapper-img {
    width: 400px;
  }
  .main-card {
    width: 360px;
    padding: 33px;
  }
}
@media screen and (max-width: 360px) {
  .main-card {
    width: 320px;
    padding: 15px;
  }
}
</style>