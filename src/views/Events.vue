<template>
  <div v-if="events.length > 0">
    <br />
    <br />
    <div data-aos="fade-up" class="container" v-for="(item, index) in events" :key="index">
      <div class="row">
        <div class="events_card">
          <div class="img">
            <img style="background-color: #193b6b" :src="item.image" :alt="item.title" />
          </div>
          <div class="text">
            <div class="heading">
              <p>{{ item.title }}</p>
            </div>
            <div class="date_place">
              <span
                >{{ ("0" + new Date(item.date).getDate()).substr(-2) }}.{{
                  ("0" + (new Date(item.date).getMonth() + 1)).substr(-2)
                }}.{{ new Date(item.date).getFullYear() }}&nbsp; / &nbsp;</span
              >
              <span> {{item.location}}</span>
            </div>
            <div class="discription">
              <span v-html="item.description"></span>
            </div>
            <div class="btn">
              <transition name="fade" appear>
                <a
                  v-if="item.url"
                  :href="item.url"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button class="button-container">
                    <div style="font-weight: bold">{{ $t('general.details')}}</div>
                  </button></a
                >
              </transition>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  </div>
  <transition name="fade" appear>
    <div style="margin-top: 50px" class="lds-spinner" v-if="events.length === 0">
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
  name: "Events",
  data() {
    return {
      events: [
        // {
        //   id: 1,
        //   title: "",
        //   description: "",
        //   location: "",
        //   image: "",
        //   date: "",
        //   url: null,
        // },
      ],
    };
  },
  created() {
    this.getEvents(30);
  },
  mounted() {
    document.title = this.$t("headers.events")
    this.$watch(
      "$route",
      (newLocale, oldLocale) => {
        console.log(newLocale)
        if (newLocale === oldLocale) {
          return
        }
        document.title = this.$t("headers.events")
        this.getEvents(30);
      },
    )
  },
  methods: {
    getEvents(limit) {
      fetch(`https://api.oav.uz/${this.$i18n.locale}/events/?ordering=-pub_date&limit=${limit}`)
        .then((res) => res.json())
        .then((resJSON) => {
          console.log(resJSON);
          this.events = resJSON["results"];
          console.log("asd", this.events);
          if (resJSON.count > limit) {
            console.log(resJSON.count);
            this.getGrants(resJSON.count);
          }
        });
    },
  },
};
</script>

<style scoped>
.container {
  width: 826px;
  margin: 0 auto;
}

.row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: auto;
}

.events_card:hover .img img {
  transform: scale(1.05);
}

.img {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.img img {
  width: 100%;
  height: 300px;
  transition: all 0.4s ease-in-out;
}

.heading {
  font-weight: bold;
  text-align: left;
  font-size: 24px;
  margin-top: 40px;
}

.date_place {
  text-align: left;
  color: gray;
  margin-top: 15px;
}

.discription {
  margin-top: 15px;
  font-size: 20px;
  text-align: left;
}

.btn {
  text-align: left;
  margin-top: 25px;
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

@media screen and (max-width: 991px) {
  .container {
    width: 768px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }

  .img {
    width: 100%;
    height: 100%;
  }

  .img img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  .text {
    padding: 0 15px;
  }
  .discription {
    font-size: 18px;
  }
}
</style>