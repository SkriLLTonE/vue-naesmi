<template>
  <div>

    <div>
      <div style="padding: 0 60px">
        <div style="width: 100%; height: auto; position: relative">

          <div
            style="
              width: 100%;
              height: 240px;
              display: flex;
              align-items: flex-end;
              padding-bottom: 120px;
              border-left: 12px solid #2d66b3;
            "
          >
            <transition name="sliderleft" appear>
              <div class="history-mark">ИСТОРИЯ</div>
            </transition>
            <div style="
                position: relative;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                transform: translateY(50px);
              ">
              <img
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                  position: relative;
                  background-color: white;
                "
                src="../assets/logo_uz.png"
                alt=""
              />
            </div>
          </div>
          <div
            v-for="(item, index) in history"
            :key="index"
            class="history-elem"
            :style="index + 1 === history.length ? 'border: none;' : ''"
          >
            <div
              v-if="index + 1 === history.length"
              style="
                top: 0;
                left: 0;
                position: absolute;
                height: 40px;
                width: 12px;
                background-color: #2d66b3;
              "
            ></div>
            <div
              class="history-dot"
              :style="
                index + 1 === history.length
                  ? 'transform: translateX(-19px);'
                  : ''
              "
            ></div>
            <div
              class="history-date"
              :style="index + 1 === history.length ? 'padding-left: 52px;' : ''"
            >
              {{ item.date }}
            </div>
            <div
              class="history-description"
              :style="index + 1 === history.length ? 'padding-left: 72px;' : ''"
            >
              <span v-html="item.description"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      history: [
        {
          date: "Апрель, 1995",
          description:
            "Национальная Ассоциация электронных средств массовой информации была основана в 2003 году. На сегодняшний день НАЭСМИ является крупнейшей негосударственной некоммерческой медиа-организацией, объединяющей более 100 негосударственных телерадиостанций и студий кабельного телевидения Узбекистана. НАЭСМИ ставит перед собой задачу по формированию цивилизованного рынка вещания, повышение качества и разнообразия контента эфира негосударственных телестанций, активизация телерадиовещателей в построении гражданского общества. Одним из направлений деятельности НАЭСМИ является повышение профессионального уровня творческих и технических работников СМИ путем проведения семинаров-тренингов с широким привлечение международных экспертов. На сегодняшний день НАЭСМИ объединяет 18 национальных телеканалов, 19 радиоканалов, около 100 электронных СМИ - членов кабельного телевидения Узбекистана (52 зарубежных канала). Среди членов НАЭСМИ – ведущие рейтинговые телеканалы страны – Sevimli TV, ZOR TV, MY5 и Uzreport TV, занимающие верхние строчки рейтингов, которые получили свое мощное развитие благодаря созданным в Новом Узбекистане условиям для развития СМИ. В целом, 76% телезрителей доверяют именно этим каналам.",
        },
        {
          date: "Май, 1995",
          description:
            "<p>Diam faucibus dignissimos hymenaeos, provident impedit eros dolor ex. Lorem.</p><p>Lacus saepe convallis magna ipsa primis. Nobis voluptates, imperdiet soluta.</p>",
        },
        {
          date: "Май, 1995",
          description:
            "<p>Possimus. Porta voluptas, magna egestas dicta sapien facere, iste debitis? Venenatis condimentum natoque vulputate? Sint ornare, ornare orci, taciti ligula.</p><p>Egestas id molestie arcu, deserunt facilisis iste posuere vitae neque in, semper! Dictumst? Quod, ratione cupiditate varius illum semper voluptates.</p>",
        },
      ],
    };
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 400px;
  background: url("../assets/history.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.history-mark {
  color: #2d66b3;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 50px;
  transform: rotate(90deg) translateY(2.1em);
}

.history-elem {
  display: flex;
  position: relative;
  width: 100%;
  padding: 40px 0;
  flex-direction: column;
  align-items: flex-start;
  border-left: 12px solid #2d66b3;
}

.history-dot {
  position: absolute;
  left: 0;
  top: 32px;
  height: 50px;
  width: 50px;
  background-color: #2d66b3;
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

.img-shadow {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #2d66b3;
  left: 20px;
  top: 20px;
}
</style>