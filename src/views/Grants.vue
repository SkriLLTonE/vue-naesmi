<template>
  <div class="grants" v-if="grants.length > 0">
    <div class="container">
      <div class="row">
        <div
          :data-aos="(index + 1) % 2 === 0 ? 'fade-right' : 'fade-left'"
          class="about_grant"
          v-for="(item, index) in grants"
          :key="index"
        >
          <div class="grants-content">
            <div
              class="grants-img"
              :data-aos="(index + 1) % 2 === 0 ? 'fade-right' : 'fade-left'"
            >
              <img :src="item.image" alt="" />
            </div>
            <div
              class="grants-title"
              :data-aos="(index + 1) % 2 === 0 ? 'fade-right' : 'fade-left'"
            >
              <div class="heading">
                <div>
                  <span>{{ item.title }}</span>
                </div>
              </div>
              <div class="grants-date">
                <div>
                  <span>
                    {{ ("0" + new Date(item.date).getDate()).substr(-2) }}.{{
                      ("0" + (new Date(item.date).getMonth() + 1)).substr(-2)
                    }}.{{ new Date(item.date).getFullYear() }}
                  </span>
                </div>
              </div>
              <div class="grants_given">
                <span> Получатели</span>
              </div>
              <div class="grants-fio">
                <span>{{ item.pers_name }}</span>
              </div>
              <div class="grants-about">
                <div>
                  <span>Награда за </span>
                </div>
              </div>
              <div class="grants-about-disc">
                <div>
                  <span v-html="item.what"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="grants-full-disc">
            <span v-html="item.description"> </span>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
  <transition name="fade" appear>
    <div
      style="margin-top: 50px"
      class="lds-spinner"
      v-if="grants.length === 0"
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
</template>
<script>
export default {
  name: "Grants",
  data() {
    return {
      grants: [
        // {
        //   id: "",
        //   title: "",
        //   date: "",
        //   pers_name: "",
        //   what: "",
        //   description: "",
        //   image: "",
        // },
      ],
    };
  },
  created() {
    this.getGrants(20);
  },
  methods: {
    getGrants(limit) {
      fetch(`http://127.0.0.1:8000/grants/?ordering=-pub_date&limit=${limit}`)
        .then((res) => res.json())
        .then((resJSON) => {
          console.log(resJSON);
          this.grants = resJSON["results"];
          console.log("asd", this.grants);
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
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.grants-img img {
  width: 350px;
  height: 450px;
  object-fit: cover;
  border-radius: 10px;
}

.grants-content {
  padding: 20px 0;
  display: flex;
  justify-content: flex-start;
}

.grants-title {
  text-align: left;
  margin-left: 40px;
}

.heading {
  font-size: 40px;
}

.grants-fio {
  font-size: 20px;
  line-height: 30px;
}

.grants-date {
  font-size: 24px;
  color: gray;
  padding: 10px 0;
}

.grants_given {
  font-size: 30px;
  padding: 20px 0;
}

.about_grant {
  margin-top: 30px;
  width: 100%;
}

.grants-about {
  font-size: 30px;
  padding: 20px 0;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 2px solid lightgray;
  margin-top: 20px;
}

.grants-about-disc {
  font-size: 20px;
}

.grants-full-disc {
  padding: 20px 0;
  font-size: 20px;
  text-align: left;
}

@media screen and (max-width: 1200px) {
  .container {
    width: 991px;
    margin-right: auto;
    margin-left: auto;
  }

  .grants-content {
    padding: 20px 40px;
  }

  .grants-full-disc {
    padding: 30px 40px;
  }
}

@media screen and (max-width: 991px) {
  .container {
    width: 768px;
    margin-right: auto;
    margin-left: auto;
  }

  .grants-img img {
    width: 300px;
    object-fit: none;
  }

  .grants-title {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .container {
    width: 90%;
  }

  .grants-content {
    flex-direction: column;
    padding: 0;
  }

  .grants-title {
    margin-top: 20px;
  }

  .grants-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }

  .grants-title {
    margin: 20px 0;
  }

  .grants-full-disc {
    padding: 0;
  }
}

@media screen and (max-width: 576px) {
  .heading {
    font-size: 30px;
  }

  .grants-about-disc {
    font-size: 18px;
  }

  .grants-full-disc {
    font-size: 18px;
  }

  .grants-date {
    font-size: 20px;
    color: gray;
    padding: 10px 0;
  }

  .grants-img img {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

@media screen and (max-width: 360px) {
  .heading {
    font-size: 25px;
  }

  .grants-about-disc {
    font-size: 18px;
  }

  .grants-full-disc {
    font-size: 18px;
  }
}
</style>