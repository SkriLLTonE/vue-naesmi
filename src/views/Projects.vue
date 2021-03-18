<template>
  <div>
    <div
      style="display: flex; justify-content: center"
      v-if="projects.length > 0"
    >
      <div
        style="max-width: 1200px; width: 100%; position: relative"
        ref="main_list"
      >
        <div
          class="project_cont"
          v-for="(project, index) in projects"
          :key="index"
        >
          <transition name="sliderleft" appear>
            <div
              data-aos="fade-up"
              style="display: flex; justify-content: center"
            >
              <div class="proj-image-cont">
                <img
                  class="project-image"
                  :src="project.image"
                  :alt="project.name"
                />
                <div class="project-date">
                  <div
                    style="
                      font-size: 50px;
                      color: #4493ff;
                      font-weight: bold;
                    "
                  >
                    {{ new Date(project.date).getFullYear() }}
                  </div>
                  <div
                    style="
                      font-size: 22px;
                      color: #000;
                      text-transform: lowercase;
                    "
                  >
                    {{ months[new Date(project.date).getMonth()] }}
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div class="project_full_disc">
            <transition name="topper" appear>
              <div
                style="
                  font-size: 30px;
                  font-weight: bold;
                  padding: 14px 24px 24px 0;
                  z-index: 11; " >
                {{ project.name }}
              </div>
            </transition>
            <transition name="sliderleft2" appear>
              <div class="project_disc">
                <span v-html="project.description"></span>
              </div>
            </transition>
            <br />
            <br />
            <transition name="fade" appear>
              <a
                v-if="project.url"
                :href="project.url"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button class="button-container">
                  <div style="font-weight: bold">Batafsil</div>
                </button></a
              >
            </transition>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade" appear>
      <div style="margin-top: 50px" class="lds-spinner" v-if="projects.length === 0">
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
  <br />
  <br />
</template>

<script>
export default {
  name: "Projects",
  created() {
    window.addEventListener("scroll", this.checkScroll);
    this.getProjects();
  },
  unmounted() {
    window.removeEventListener("scroll", this.checkScroll);
    clearTimeout(this.fetchTimeout);
  },
  methods: {
    getProjects() {
      fetch(
        `http://127.0.0.1:8000/projects/?ordering=-pub_date&limit=30&offset=${
          this.offset * 30
        }`
      )
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          if (this.offset === 0) {
            this.projects = json["results"];
          } else {
            this.projects = this.projects.concat(json["results"]);
          }
          if (json.count <= this.projects.length) {
            window.removeEventListener("scroll", this.checkScroll);
            if (this.fetchTimeout) clearTimeout(this.fetchTimeout);
          }
          this.offset++;
          // console.log("me");
          // console.log(json);
          // console.log(this.offset);
        });
    },
    checkScroll() {
      this.diff =
        document.documentElement.scrollTop + window.innerHeight >=
        this.$refs.main_list.offsetHeight;

      if (this.diff) {
        if (this.fetchTimeout) clearTimeout(this.fetchTimeout);
        this.fetchTimeout = setTimeout(() => {
          this.getProjects();
        }, 200);
      }
    },
    unmounted() {
      clearTimeout(this.fetchTimeout);
    },
  },
  data() {
    return {
      offset: 0,
      busy: false,
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
      projects: [
        // {
        //   id: 1,
        //   name: "",
        //   description: "",
        //   image: "",
        //   url: null,
        //   date: "",
        //   last_change: "",
        // },
      ],
    };
  },
};
</script>

<style scoped>
.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  padding-left: 20px;
}

.project-date {
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  text-align: start;
  padding-bottom: 16px;
  padding-right: 40px;
  margin-left: 15px;
}

.button-container {
  height: 50px;
  border-radius: 4px;
  padding: 0 20px;
  border: 1px solid #4493ff;
  transition: all 0.4s;
  color: #4493ff;
}

.button-container:hover {
  background-color: #4493ff;
  color: white;
}
.project_cont {
  display: flex;
  width: 100%;
  margin-top: 60px;
  justify-content: space-around;
}
.project_disc {
  font-size: 18px;
  line-height: 1.6em;
  color: gray;
}
.project_full_disc {
  width: 100%;
  text-align: start;
  padding: 0 65px;
}

.proj-image-cont {
  width: 300px;
  height: 450px;
  position: relative;
}
@media screen and (max-width: 768px) {
  .project_cont {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .project_full_disc {
    width: 80%;
    padding: 0;
  }
  .project_disc {
    font-size: 15px;
    line-height: 1.6em;
    color: gray;
  }
  .project-image {
    padding: 0;
    width: 100%;
  }

  .proj-image-cont {
    width: 70%;
    display: flex;
    justify-content: center;
  }
  .project-date {
    margin: 0;
  }
}
</style>