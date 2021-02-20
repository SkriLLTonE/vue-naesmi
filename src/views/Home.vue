<template>
  <div>
    <transition name="topper" appear>
      <Header />
    </transition>
    <div class="top-wrapper">
      <div class="weather-block">
        <div class="weather-inner">

          <transition name="fadetop" appear>
            <div class="headline">Headlines</div>
          </transition>
          <transition name="sliderleft" appear>
            <div class="weekday">Saturday</div>
          </transition>
          <transition name="sliderleft" appear>
            <div class="date">10 February 2021</div>
          </transition>
          <transition name="sliderleft" appear>
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
            </transition>
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
                <transition name="sliderleft2" appear>
                <div class="carousel-headline">{{ item.headline }}</div>
                </transition>
                <transition name="sliderleft2" appear>
                <div class="carousel-meta-title">{{ item.title }}</div>
                </transition>
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

    <div
      style="
        position: relative;
        height: 160px;
        width: 100%;
        display: flex;
        padding-top: 20px;
      "
    >
      <div>
        <div
          style="
            height: 100%;
            width: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: white;
          "
        >
          <span style="font-size: 36px; font-weight: bold">Trending</span>
          <span style="font-size: 20px; color: gray">Hashtags</span>
        </div>
      </div>
      <div
        style="
          width: 100%;
          height: 100%;
          display: flex;
          overflow: hidden;
          scroll-behavior: smooth;
        "
        ref="brand_scroll"
        @scroll="handleBrandsScrollIndicator"
      >
        <div
          ref="brand_carousel"
          style="
            width: auto;
            height: 100%;
            display: flex;
            transition: all 0.2s ease;
            transform: translateX(0);
          "
        >

          <transition-group name="fade" appear>
            <div v-for="(brand, index) in organizations" :key="index">
              <div class="brand-wrapper">
                <div class="brand-wrapper-grayscale"></div>
                <img
                  style="width: 100%; height: 100%; object-fit: scale-down"
                  :src="brand.img"
                  :alt="brand.name"
                />
              </div>
            </div>
          </transition-group>
        </div>
        <transition name="fade">
          <div
            @click="handleBrandsScroll(-1)"
            v-show="showBrandControls.all && showBrandControls.left"
            class="brand-control left"
          >
            <i class="far fa-angle-left" style=""></i>
          </div>
        </transition>
        <transition name="fade">
          <div
            @click="handleBrandsScroll(1)"
            v-show="showBrandControls.all && showBrandControls.right"
            class="brand-control right"
          >
            <i class="far fa-angle-right"></i>
          </div>
        </transition>
      </div>
    </div>

    <div
      style="
        height: 1px;
        width: 94%;
        background-color: lightgray;
        margin-left: 3%;
        margin-top: 20px;
      "
    ></div>
    <div
      style="
        height: 1px;
        width: 94%;
        background-color: lightgray;
        margin-left: 3%;
        margin-top: 5px;
      "
    ></div>

    <div class="content-wrapper">
      <div
        style="
          width: 67%;
          position: relative;
          display: flex;
          flex-direction: column;
          alight-items: flex-start;
        "
      >
        <div
          style="
            position: relative;
            width: 100%;
            border-bottom: 1px solid lightgray;
            display: flex;
            justify-content: space-between;
          "
        >
          <div class="header-highlight"></div>
          <div
            style="
              font-size: 30px;
              font-weight: bold;
              padding: 14px 24px 14px 14px;
              z-index: 11;
              border-right: 1px solid lightgray;
            "
          >
            Stories for you, dad
          </div>
          <div style="display: flex; align-items: center; position: relative">
            <div class="tab-btn active">Latest News</div>
            <div class="tab-btn">Featured</div>
            <div class="tab-btn-indicator"></div>
          </div>
        </div>

        <div class="main-card-wrapper">
          <div>
            <div
              style="
                width: 610px;
                height: 330px;
                overflow: hidden;
                border-radius: 6px;
              "
            >
              <img
                src="https://www.uzdaily.uz/storage/img/september2020/3c54fa25-10bc-38ff-a068-234ab71c8389.jpg"
                class="main-card-wrapper-img"
              />
            </div>
          </div>
          <div class="main-card">
            <div style="margin: 20px 0 0 20px; text-align: start">
              <div
                class="main-card-meta"
                style="font-size: 14px; padding: 0 0 0 10px"
              >
                INTERNATIONAL
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
                The Latest: Officer in Canada prime minister motorcade hurt
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
                <!-- TODO max-height -->
                Nulla animi aperiam mattis. Malesuada. Architecto. Mauris quod
                montes ipsam! Esse vitae, adipisicing fugiat molestiae
                accusantium, rerum, conubia laboriosam volutpat sit, nostra eum
                delectus? Platea! Sed. Diamlorem. Eros, primis, anim.
              </div>
              <div
                style="
                  display: flex;
                  align-items: center;
                  padding: 16px 0 0 16px;
                "
              >
                <img
                  style="
                    height: 34px;
                    width: 34px;
                    object-fit: cover;
                    border-radius: 50%;
                  "
                  src="https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg"
                  alt=""
                />
                <div
                  style="font-weight: bold; font-size: 14px; padding: 0 12px"
                >
                  Ben The Journalist
                </div>
                <div
                  style="
                    width: 4px;
                    height: 4px;
                    background-color: black;
                    border-radius: 50%;
                  "
                ></div>
                <div
                  style="font-weight: bold; font-size: 14px; padding: 0 12px"
                >
                  Jan 5
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style="
            margin-top: 50px;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            justify-content: space-between;
          "
        >
          <div class="single-card">
            <img
              class="single-card-img"
              src="https://cdnb.artstation.com/p/assets/images/images/011/449/401/large/febri-ferdian-b-x177c.jpg?1529631793"
            />
            <div class="card-content">
              <div
                class="main-card-meta"
                style="font-size: 14px; padding: 0 0 0 10px"
              >
                INTERNATIONAL
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
                The Latest: Officer in Canada prime minister motorcade hurt
              </div>

              <div
                style="
                  display: flex;
                  align-items: center;
                  padding: 16px 0 0 10px;
                "
              >
                <img
                  style="
                    height: 34px;
                    width: 34px;
                    object-fit: cover;
                    border-radius: 50%;
                  "
                  src="https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg"
                  alt=""
                />
                <div
                  style="font-weight: bold; font-size: 14px; padding: 0 12px"
                >
                  Ben The Journalist
                </div>
                <div
                  style="
                    width: 4px;
                    height: 4px;
                    background-color: black;
                    border-radius: 50%;
                  "
                ></div>
                <div
                  style="font-weight: bold; font-size: 14px; padding: 0 12px"
                >
                  Jan 5
                </div>
              </div>
            </div>
          </div>
          <div class="single-card">
            <img
              class="single-card-img"
              src="https://cdnb.artstation.com/p/assets/images/images/011/449/401/large/febri-ferdian-b-x177c.jpg?1529631793"
            />
            <div class="card-content">
              <div
                class="main-card-meta"
                style="font-size: 14px; padding: 0 0 0 10px"
              >
                INTERNATIONAL
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
                The Latest: Officer in Canada prime minister motorcade hurt
              </div>

              <div
                style="
                  display: flex;
                  align-items: center;
                  padding: 16px 0 0 10px;
                "
              >
                <img
                  style="
                    height: 34px;
                    width: 34px;
                    object-fit: cover;
                    border-radius: 50%;
                  "
                  src="https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg"
                  alt=""
                />
                <div
                  style="font-weight: bold; font-size: 14px; padding: 0 12px"
                >
                  Ben The Journalist
                </div>
                <div
                  style="
                    width: 4px;
                    height: 4px;
                    background-color: black;
                    border-radius: 50%;
                  "
                ></div>
                <div
                  style="font-weight: bold; font-size: 14px; padding: 0 12px"
                >
                  Jan 5
                </div>
              </div>
            </div>
          </div>
          <div class="single-card">
            <img
              class="single-card-img"
              src="https://cdnb.artstation.com/p/assets/images/images/011/449/401/large/febri-ferdian-b-x177c.jpg?1529631793"
            />
            <div class="card-content">
              <div
                class="main-card-meta"
                style="font-size: 14px; padding: 0 0 0 10px"
              >
                INTERNATIONAL
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
                The Latest: Officer in Canada prime minister motorcade hurt
              </div>

              <div
                style="
                  display: flex;
                  align-items: center;
                  padding: 16px 0 0 10px;
                "
              >
                <img
                  style="
                    height: 34px;
                    width: 34px;
                    object-fit: cover;
                    border-radius: 50%;
                  "
                  src="https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg"
                  alt=""
                />
                <div
                  style="font-weight: bold; font-size: 14px; padding: 0 12px"
                >
                  Ben The Journalist
                </div>
                <div
                  style="
                    width: 4px;
                    height: 4px;
                    background-color: black;
                    border-radius: 50%;
                  "
                ></div>
                <div
                  style="font-weight: bold; font-size: 14px; padding: 0 12px"
                >
                  Jan 5
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="width: 100%; height: 200px"></div>
      </div>

      <div style="width: 30%; position: relative">
        <div class="right-container">
          <div style="height: auto; padding: 30px">
            <div
              style="
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
              "
            >
              <div
                style="
                  font-size: 26px;
                  font-weight: bold;
                  line-height: 2.4em;
                  border-bottom: 1px solid lightgray;
                "
              >
                Top Stories
              </div>

              <div
                class="right-card-wrapper"
                v-for="(story, index) in topStories"
                :key="index"
              >
                <div>
                  <div
                    style="
                      width: 160px;
                      height: 100%;
                      overflow: hidden;
                      border-radius: 4px;
                    "
                  >
                    <img
                      class="right-card-img"
                      :src="story.url"
                      :alt="story.title"
                    />
                  </div>
                </div>
                <div class="right-card-meta">
                  {{ story.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      showBrandControls: {
        all: true,
        left: true,
        right: true,
      },
      organizations: [
        {
          name: "Kamolot",
          img:
            "https://www.gazeta.uz/media/img/2013/01/8CjGwf13587025540229_m.jpg",
        },
        {
          name: "OzYosh",
          img: "https://yoshlarittifoqi.uz/assets/public/images/logo_uz.png",
        },
        {
          name: "Legacy",
          img:
            "http://stv.uz/uploads/posts/2018-06/1527835094_anrje7en6ladsfyotlgq-3pcde_cbeze.png",
        },
        {
          name: "Journalist",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxCaK11bM5BXQINBds8eB2f-GGGHuFBq1xA&usqp=CAU",
        },
        {
          name: "Nimfogo",
          img:
            "https://lh3.googleusercontent.com/proxy/S1-hRGemEU647HAhKLkKYK-O8WVAssdYgJAhqnyAXmJwc3xR_JX6wYhWJQO-X9rZXD3SU6XMHbX_EY4W897vnE7GeYHe3YOsNdU",
        },
        {
          name: "Fundngouz",
          img:
            "https://parliament.gov.uz/upload/resize_cache/iblock/164/577_354_1/3kpcOH2YuOLzG7CLJ5bZ2qgibTQ8R4gY.jpg",
        },
      ],
      topStories: [],
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
    this.$refs.gradient_bar.style.width = `${this.$refs.main_carousel.childNodes[1].children[0].children[0].offsetWidth}px`;
    this.fetchData();
    // this.brandsCarouselHendler();
    this.handleBrandsScrollIndicator();
  },
  watch: {},
  methods: {
    handleBrandsScroll(dir) {
      this.$refs.brand_scroll.scrollBy({
        left: this.$refs.brand_scroll.offsetWidth * dir,
      });
    },
    handleBrandsScrollIndicator() {
      this.showBrandControls.all =
        this.$refs.brand_carousel.offsetWidth >= window.innerWidth - 300;

      this.showBrandControls.left = this.$refs.brand_scroll.scrollLeft !== 0;

      this.maxScrollLeft =
        this.$refs.brand_scroll.scrollWidth -
        this.$refs.brand_scroll.clientWidth;

      this.showBrandControls.right =
        this.$refs.brand_scroll.scrollLeft < this.maxScrollLeft;
    },
    // brandsCarouselHendler() {
    //   // console.log(this.$refs.brand_carousel.offsetWidth)
    //   this.translate = parseInt(this.$refs.brand_carousel.style.transform.replace(/[^\d.]/g, ''))
    //   if (this.translate + 10  ) {
    //     this.$refs.brand_carousel.style.transform = `translateX(-${this.translate + 10}px)`
    //   }
    //   console.log(this.translate)
    //   // setTimeout(this.brandsCarouselHendler(), 100);
    // },
    fetchData() {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.topStories = json.splice(0, 10);
        });
    },
    handleScroll(dir) {
      if (this.carousel_timer) clearTimeout(this.carousel_timer);

      this.showRec = false;

      this.carousel_timer = setTimeout(() => {
        this.showRec = true;
        this.active_rec_index = this.active_carousel_index;
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

.content-wrapper {
  position: relative;
  width: 94%;
  margin-left: 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 50px;
}

.header-highlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 3em;
  height: 100%;
  background-color: rgba(68, 147, 255, 0.6);
  z-index: 10;
}

.tab-btn {
  padding: 20px 30px;
  cursor: pointer;
  font-size: 18px;
  color: gray;
  font-weight: bold;
  transition: all 0.4s ease;
}

.tab-btn.active {
  padding: 20px 30px;
  font-size: 18px;
  color: black;
  font-weight: bold;
}

.tab-btn-indicator {
  position: absolute;
  bottom: 0;
  left: 30px;
  width: 100px;
  height: 3px;
  background-color: #4493ff;
}

.main-card-wrapper {
  display: flex;
  padding-top: 50px;
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
}

.single-card {
  width: 340px;
  height: 440px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-right: 30px;
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

.right-container {
  width: 100%;
  height: auto;
  position: relative;
  background-color: #f7f7f7;
  text-align: start;
}

.right-card-wrapper {
  height: 100px;
  width: 100%;
  display: flex;
  margin-top: 24px;
  cursor: pointer;
}

.right-card-wrapper:hover .right-card-img {
  transform: scale(1.05);
}

.right-card-wrapper:hover .right-card-meta {
  color: #4493ff;
}

.right-card-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.2s;
}

.right-card-meta {
  margin-left: 14px;
  transition: all 0.2s;
  font-weight: bold;
  max-height: 5.5em;
  line-height: 1.4em;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.brand-wrapper {
  position: relative;
  width: 300px;
  height: 100%;
  margin: 0 10px;
  cursor: pointer;
}

.brand-wrapper:hover .brand-wrapper-grayscale {
  backdrop-filter: none;
  background-color: transparent;
}

.brand-wrapper {
  position: relative;
  width: 300px;
  height: 100%;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.brand-wrapper-grayscale {
  pointer-events: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  transition: all 0.4s ease;
  backdrop-filter: grayscale(80%);
}

.brand-control {
  position: absolute;
  width: 60px;
  height: 100%;
  backdrop-filter: blur(8px);
  transition: all 0.4s ease;
  text-align: center;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.brand-control:hover {
  background-color: #2d66b3;
  color: white;
}

.brand-control:active {
  background-color: rgba(255, 255, 255, 0.8);
}

.brand-control.left {
  left: 300px;
  top: 0;
}

.brand-control.right {
  right: 0;
  top: 0;
}
</style>