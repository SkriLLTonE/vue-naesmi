<template>
  <div>
    <Header />
    <div class="top-wrapper">
      <div class="weather-block">
        <div class="weather-inner">
          <div class="headline">Headlines</div>
          <div class="weekday">Saturday</div>
          <div class="date">10 February 2021</div>
          <hr />
          <div style="position: relative; width: 100%">
            <div class="today-weather">
              <i
                class="fal fa-cloud"
                style="font-size: 50px; padding-right: 20px"
              ></i>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                "
              >
                <span style="font-weight: bold; font-size: 25px">26 C</span>
                <span style="font-size: 0.9em; color: grey">Heavy Rain</span>
              </div>
            </div>
            <div style="text-align: start; padding: 20px 0; font-weight: bold">
              Miami
            </div>
            <div style="position: relative; height: auto; width: 100%">
              <div
                class="horizontal-dotted-border"
                style="position: absolute; top: 0; left: 0"
              ></div>
              <div
                class="vertical-dotted-border"
                style="
                  position: absolute;
                  top: 6px;
                  left: 50%;
                  transfrom: translateX(-50%);
                "
              ></div>
              <div
                style="
                  position: relative;
                  display: flex;
                  justify-content: space-around;
                  width: 100%;
                "
              >
                <div class="weather-elem">
                  <div style="color: gray; line-height: 1.4em">18:00</div>
                  <div
                    style="
                      font-size: 1.4em;
                      font-weight: bold;
                      line-height: 1.4em;
                    "
                  >
                    26 C
                  </div>
                  <i
                    class="far fa-sun-cloud"
                    style="font-size: 40px; padding: 10px 0"
                  ></i>
                </div>

                <div class="weather-elem">
                  <div
                    style="font-size: 0.9em; color: gray; line-height: 1.4em"
                  >
                    24:00
                  </div>
                  <div
                    style="
                      font-size: 1.4em;
                      font-weight: bold;
                      line-height: 1.4em;
                    "
                  >
                    26 C
                  </div>
                  <i
                    class="fal fa-thunderstorm"
                    style="font-size: 40px; padding: 10px 0"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="middle-block">
        <div class="carousel" ref="main_carousel">
          <div
            v-for="(item, index) in lastNews"
            :key="index"
            style="position: relative; height: 100%"
            ref="carousel_item_bar"
          >
            <div class="carousel-item" ref="carousel_item">
              <div
                :style="
                  index === active_carousel_index ? 'width: 100%' : 'width: 0'
                "
                style="
                  position: relative;
                  height: 100%;
                  background-color: #274467;
                  transition: all 0.8s ease;
                "
              ></div>
              <img
                class="carousel-item-img"
                :src="item.backdrop"
                :alt="item.title"
              />
              <div class="carousel-meta">
                <div class="carousel-headline">{{ item.headline }}</div>
                <div class="carousel-meta-title">{{ item.title }}</div>
              </div>
            </div>
          </div>

          <div>
            <div style="width: 320px; height: 100%"></div>
          </div>

        </div>

        <div class="carousel-read-also">
          <span
            style="
              text-align: start;
              font-size: 18px;
              font-weight: bold;
              color: lightgray;
            "
            >READ ALSO</span
          >
          <div
            style="
              position: relative;
              width: 100%;
              height: auto;
              display: flex;
              padding-top: 30px;
            "
          >
            <transition-group name="fadebottom" appear>
              <div
                class="read-also-rec"
                v-for="(rec, index) in lastNews[active_rec_index].readAlso"
                :key="index"
                v-show="showRec"
              >
                <img
                  :src="rec.backdrop"
                  :alt="rec.title"
                  style="
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border-radius: 4px;
                  "
                />
                <div class="read-also-title">
                  {{ rec.title }}
                </div>
              </div>
            </transition-group>
          </div>
        </div>
        <div
          style="
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            pointer-events: none;
          "
        >
          <div>
            <div
              ref="gradient_bar"
              style="
                width: 300px;
                height: 100%;
                background-color: #274467;
                transition: all 0.2s ease;
              "
            ></div>
          </div>
          <div class="carousel-gradient"></div>
        </div>
      </div>

      <div
        style="
          width: 320px;
          height: 100%;
          position: absolute;
          top: 0;
          right: 0;
          backdrop-filter: blur(10px) grayscale(70%);
        "
      ></div>

      <div class="carousel-control left" @click="handleScroll(-1)">
        <i class="far fa-angle-left"></i>
      </div>

      <div class="carousel-control right" @click="handleScroll(1)">
        <i class="far fa-angle-right"></i>
      </div>
    </div>

    <div style="position: relative; height: 160px; width: 100%; display: flex;">
      <div style="height: 100%; width: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center">
        <span style="font-size: 36px; font-weight: bold">Trending</span>
        <span style="font-size: 20px; color: gray">Hashtags</span>
      </div>
      <div style="width: 100%;height: 100%; display: flex; overflow: hidden;">
        <div v-for="index in [20]" :key="index">
          <div style="width: 300px; height: 100%; background-color: black; margin: 0 10px;"></div>
        </div>
      </div>
    </div>

    <div style="height: 1px; width: 94%; background-color: lightgray; margin-left: 3%; margin-top: 20px;"></div>
    <div style="height: 1px; width: 94%; background-color: lightgray; margin-left: 3%; margin-top: 5px;"></div>
    
    <div style="position: relative; width: 94%; margin-left: 3%;display: flex; flex-wrap: wrap;">
      <div style="width: 70%; position: relative;">
        
      </div>
      <div style="width: 30%; position: relative;"></div>
    </div>

  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      showRec: true,
      active_carousel_index: 0,
      active_rec_index: 0,
      lastNews: [
        {
          title:
            "The country may have found $2 billion to extend Metritrail. But there's a catch",
          backdrop:
            "https://mediacdn.acciona.com/media/0gbk5wai/acciona-metro-quito.jpg",
          headline: "South Florida",
          readAlso: [
            {
              title:
                "Cras convallis nostra, iaculis ipsam aut veritatis consequuntur, ante, inventore.",
              backdrop:
                "https://cdn1.img.sputniknews-uz.com/images/07e4/09/0e/14970398.jpg",
              headline: "South Florida",
            },
            {
              title: "Orci ac atque! Nostrum, tempor eligendi nonummy montes.",
              backdrop:
                "https://ichef.bbci.co.uk/news/1024/cpsprodpb/1418C/production/_107461328_index.jpg",
              headline: "South Florida",
            },
          ],
        },
        {
          title:
            "Turpis, ligula scelerisque voluptatem integer consectetur orci tenetur alias incididunt.",
          backdrop:
            "https://jaxenter.com/wp-content/uploads/2019/12/shutterstock_437705467.jpg",
          headline: "South Florida",
          readAlso: [
            {
              title:
                "Cras convallis nostra, iaculis ipsam aut veritatis consequuntur, ante, inventore.",
              backdrop:
                "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2020/03/BuyGun-2621.jpg",
              headline: "Tashkent",
            },
            {
              title: "Orci ac atque! Nostrum, tempor eligendi nonummy montes.",
              backdrop:
                "https://images.theconversation.com/files/350234/original/file-20200729-31-3i8ett.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
              headline: "South Florida",
            },
          ],
        },
        {
          title:
            "Quibusdam. In aliquid irure quaerat, dicta pretium architecto! Diamlorem sequi laoreet magna augue.",
          backdrop:
            "http://www.bu.edu/files/2018/12/social-iStock-588258692.jpg",
          headline: "South Florida",
          readAlso: [
            {
              title:
                "Cras convallis nostra, iaculis ipsam aut veritatis consequuntur, ante, inventore.",
              backdrop:
                "https://images-na.ssl-images-amazon.com/images/I/61RTtsq2YzL._AC_SL1200_.jpg",
              headline: "Tashkent",
            },
            {
              title: "Orci ac atque! Nostrum, tempor eligendi nonummy montes.",
              backdrop:
                "https://images.theconversation.com/files/350234/original/file-20200729-31-3i8ett.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
              headline: "South Florida",
            },
          ],
        },
        {
          title:
            "Quibusdam. In aliquid irure quaerat, dicta pretium architecto! Diamlorem sequi laoreet magna augue.",
          backdrop:
            "http://www.bu.edu/files/2018/12/social-iStock-588258692.jpg",
          headline: "South Florida",
          readAlso: [
            {
              title:
                "Cras convallis nostra, iaculis ipsam aut veritatis consequuntur, ante, inventore.",
              backdrop:
                "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2020/03/BuyGun-2621.jpg",
              headline: "Tashkent",
            },
            {
              title: "Orci ac atque! Nostrum, tempor eligendi nonummy montes.",
              backdrop:
                "https://images.theconversation.com/files/350234/original/file-20200729-31-3i8ett.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
              headline: "South Florida",
            },
          ],
        },
      ],
    };
  },
  mounted: function () {
      this.$refs.gradient_bar.style.width = `${
        this.$refs.main_carousel.childNodes[1].children[0].children[0]
          .offsetWidth
      }px`;

  },
  watch: {},
  methods: {
    handleScroll(dir) {

      if (this.carousel_timer) clearTimeout(this.carousel_timer);

      this.showRec = false

      this.carousel_timer = setTimeout(() => {
        this.showRec = true
        this.active_rec_index = this.active_carousel_index
      }, 500);


      this.scroll = (this.$refs.main_carousel.offsetWidth / 1.5) * dir;
      this.$refs.main_carousel.scrollBy({ left: this.scroll });

      if (
        this.active_carousel_index + dir >= 0 &&
        this.active_carousel_index + dir <= this.lastNews.length - 1
      ) {
        this.active_carousel_index = this.active_carousel_index + dir;
        console.log(this.active_carousel_index);
      }

      this.index = this.active_carousel_index + 1;

      this.new_width =
        this.$refs.carousel_item.offsetWidth -
        this.$refs.main_carousel.childNodes[this.index].children[0].children[1]
          .offsetWidth;

      // this.$refs.gradient_bar.style.width = `${
      //   this.$refs.main_carousel.childNodes[this.index].children[0].children[0]
      //     .offsetWidth
      // }px`;

      this.$refs.gradient_bar.style.width = `${this.new_width}px`;
    },
  },
};
</script>

<style scoped>
.top-wrapper {
  position: relative;
  width: 100%;
  height: 600px;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 0 8px rgba(100, 100, 100, 0.1);
  display: flex;
}

.weather-block {
  position: relative;
  width: 320px;
  height: 100%;
  background-color: white;
}

.weather-inner {
  margin: 40px;
  margin-top: 50px;
  width: 240px;
}

.headline {
  text-align: start;
  font-size: 34px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
}

.weekday {
  margin-top: 4px;
  font-weight: bold;
  padding-top: 10px;
  text-align: start;
  border-top: 1px solid lightgray;
}

.date {
  color: red;
  font-weight: 600;
  text-align: start;
  font-size: 0.96em;
  line-height: 2em;
}

.today-weather {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.weather-elem {
  width: 50%;
  height: auto;
  padding-top: 20px;
}

.middle-block {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #274467;
  display: flex;
  overflow: hidden;
}

.carousel {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #274467;
  display: flex;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  overflow: hidden;
}

.carousel-gradient {
  width: 80%;
  height: 100%;
  background-image: linear-gradient(to right, #274467, rgba(0, 0, 0, 0));
}

.carousel-control {
  width: 50px;
  height: 50px;
  background-color: white;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #434343;
}

.carousel-control:hover {
  color: white;
  background-color: #2d66b3;
}

.carousel-control.left {
  top: 50%;
  left: 320px;
  transform: translate(-50%, -50%);
}

.carousel-control.right {
  top: 50%;
  right: 320px;
  transform: translate(50%, -50%);
}

.carousel-item {
  position: relative;
  background-color: lightgray;
  height: 100%;
  width: calc(100vw - 640px);
  display: flex;
  scroll-snap-align: start;
}

.carousel-item-img {
  position: relative;
  height: 100%;
  object-fit: contain;
}

.carousel-meta {
  position: absolute;
  top: 50px;
  left: 8%;
  width: 50%;
  height: 500px;
  z-index: 12;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.carousel-headline {
  text-transform: uppercase;
  color: white;
  background-color: #4493ff;
  padding: 10px 24px;
  font-weight: bold;
  border-radius: 8px;
}

.carousel-meta-title {
  padding-top: 38px;
  color: white;
  font-weight: bold;
  text-align: start;
  font-size: 40px;
  line-height: 1.4em;
  max-height: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.carousel-read-also {
  z-index: 13;
  position: absolute;
  top: 300px;
  left: 6%;
  width: 40%;
  margin-top: 20px;
  padding-top: 30px;
  border-top: 1px solid rgba(129, 129, 129, 0.8);
  display: flex;
  flex-direction: column;
}

.read-also-rec {
  position: relative;
  width: 50%;
  height: auto;
  display: flex;
  cursor: pointer;
  transition: color 0.2s;
}

.read-also-rec:hover .read-also-title {
  color: #4493ff;
}

.read-also-title {
  text-align: start;
  color: white;
  transition: all 0.2s;
  font-weight: bold;
  padding: 0 24px;
  max-height: 4em;
  line-height: 1.4em;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>