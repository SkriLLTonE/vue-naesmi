<template>
  <div style="width: 100%; display: flex; justify-content: center">
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
      <div style="position: absolute; height: 100%; width: 50px;top: 0; left: 0; background-color: rgba(68, 147, 255, 0.6);"></div>
        <div style="position: relative;">Новости</div>
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
              Nulla animi aperiam mattis. Malesuada. Architecto. Mauris quod
              montes ipsam! Esse vitae, adipisicing fugiat molestiae
              accusantium, rerum, conubia laboriosam volutpat sit, nostra eum
              delectus? Platea! Sed. Diamlorem. Eros, primis, anim.
            </div>
            <div
              style="display: flex; align-items: center; padding: 16px 0 0 16px"
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
              <div style="font-weight: bold; font-size: 14px; padding: 0 12px">
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
              <div style="font-weight: bold; font-size: 14px; padding: 0 12px">
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
          justify-content: center;
        "
      >
        <div v-for="(item, index) in news" :key="index" class="single-card">
          <img
            class="single-card-img"
            src="https://cdnb.artstation.com/p/assets/images/images/011/449/401/large/febri-ferdian-b-x177c.jpg?1529631793"
          />
          <div class="card-content">
            <div
              class="main-card-meta"
              style="font-size: 14px; padding: 0 0 0 10px"
            >
              {{ item.category }}
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
                {{ item.time }}
              </div>
            </div>

            <!-- <div
              style="display: flex; align-items: center; padding: 16px 0 0 10px"
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
              <div style="font-weight: bold; font-size: 14px; padding: 0 12px">
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
              <div style="font-weight: bold; font-size: 14px; padding: 0 12px">
                Jan 5
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
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
      news: [
        {
          title: "The Latest: Officer in Canada prime minister motorcade hurt",
          category: "INTERNATIONAL",
          description:
            "The Latest: Officer in Canada prime minister motorcade hurt",
          time: "Янв 25",
        },
        {
          title: "The Latest: Officer in Canada prime minister motorcade hurt",
          category: "INTERNATIONAL",
          description:
            "The Latest: Officer in Canada prime minister motorcade hurt",
          time: "Янв 25",
        },
        {
          title: "The Latest: Officer in Canada prime minister motorcade hurt",
          category: "INTERNATIONAL",
          description:
            "The Latest: Officer in Canada prime minister motorcade hurt",
          time: "Янв 25",
        },
        {
          title: "The Latest: Officer in Canada prime minister motorcade hurt",
          category: "INTERNATIONAL",
          description:
            "The Latest: Officer in Canada prime minister motorcade hurt",
          time: "Янв 25",
        },
        {
          title: "The Latest: Officer in Canada prime minister motorcade hurt",
          category: "INTERNATIONAL",
          description:
            "The Latest: Officer in Canada prime minister motorcade hurt",
          time: "Янв 25",
        },
        {
          title: "The Latest: Officer in Canada prime minister motorcade hurt",
          category: "INTERNATIONAL",
          description:
            "The Latest: Officer in Canada prime minister motorcade hurt",
          time: "Янв 25",
        },
        {
          title: "The Latest: Officer in Canada prime minister motorcade hurt",
          category: "INTERNATIONAL",
          description:
            "The Latest: Officer in Canada prime minister motorcade hurt",
          time: "Янв 25",
        },
      ],
    };
  },
  created() {
    window.addEventListener("resize", this.checkResponsive);
  },
  unmounted() {
    window.removeEventListener("resize", this.checkResponsive());
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
  },
};
</script>

<style scoped>
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
</style>