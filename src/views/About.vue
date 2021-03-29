<template>
  <div>
    <div class="banner">
      <div
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(#000, transparent);
          z-index: 0;
        "
      ></div>
      <div class="banner_header">
        {{ $t("general.about_title") }}
      </div>
    </div>

    <div style="display: flex; justify-content: center">
      <div
        style="
          max-width: 1200px;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          margin-top: 70px;
          margin-bottom: 50px;
        "
      >
        <span
          style="
            font-size: 18px;
            text-align: start;
            line-height: 30px;
            padding: 0 20px;
          "
          ><br />
          <span style="font-weight: bold; font-size: 32px">{{
            t("who_we_are")
          }}</span>
          <br /><br />
          {{ t("who_we_are_t") }}
          <br />
          <br />
          <span style="font-weight: bold; font-size: 32px">{{
            t("aims")
          }}</span>
          <br /><br />
          <span v-html="t('aims_t')"></span>
          <br /><br />
          <span
            style="font-weight: bold; font-size: 32px"
            v-html="t('members')"
          ></span>
          <br /><br />
          <span v-html="t('members_t')"></span><br /><br />
          <span style="font-weight: bold; font-size: 32px">{{
            t("cooperation")
          }}</span>
          <br />
          <br /><span v-html="t('cooperation_t')"></span><br />
          <br
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  data() {
    return {};
  },
  mounted() {
    document.title = this.$t("headers.about")
    this.$watch(
      "$route",
      (newLocale, oldLocale) => {
        console.log(newLocale)
        if (newLocale === oldLocale) {
          return
        }
        document.title = this.$t("headers.about")
      },
    )
  },
  setup() {
    const { t } = useI18n({
      // inheritLocale: true,
      // useScope: 'local'
    });

    return { t };
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 500px;
  background: url("../assets/bghist.jpg");
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
}

.banner_header {
  font-size: 60px;
  font-weight: bold;
  color: white;
  position: relative;
}

@media screen and (max-width: 1200px) {
  .banner {
    background-position: center;
  }
}

@media screen and (max-width: 768px) {
  .banner_header {
    font-size: 30px;
  }
}
</style>

<i18n>
{
  "en": {
    "who_we_are": "Who we are?",
    "who_we_are_t": "The National Association of Electronic Mass Media of Uzbekistan was established in 2003. Today NAEMM is the largest non-governmental non-profit media organization in Uzbekistan, which includes non-governmental television and radio channels and cable television studios.",
    "aims": "Objectives",
    "aims_t": "The NAEMM has set itself the task of creating a contemporary television and radio broadcasting market, providing a variety of content for non-state television channels, and increasing the activity of broadcasters in building a civil society.<br><br>Another area of NAEMM’s activity is to improve the professional level of the creative and technical personnel of the national media through seminars and trainings with the participation of international experts.",
    "members": "Members",
    "members_t": "Today NAEMM includes 18 national television channels, 19 radio channels and 100 electronic media (including 52 foreign channels), which are part of the Uzbek cable television. The NAEMM includes leading television channels such as Sevimli TV, ZOR TV, MY5 and Uzreport TV, which are highly rated due to the enormous opportunities created for the development of mass media in the new Uzbekistan. In general, 76% of all viewers trust these channels.<br><br>The NAEMM also pays great attention to the development of international cooperation. The goal of NAEMM is to ensure cooperation and solidarity with foreign and international organizations, cultural centers, embassies and consulates of different countries, large media structures, first of all, attracting foreign trainers to the national media, improving the skills of young creative and technical personnel, exchanging content, implementing joint media projects.",
    "cooperation": "International cooperation",
    "cooperation_t": "The agreement was signed in October 2017 with the international news agency “Tomson Reuters” with the support of the British Embassy in Uzbekistan. As a result of the partnership, in 9 months’ period it received a package of the freshest and most relevant news on the international arena.<br><br>For 9 months, 80 issues of the “Uzbekistan-online” news program were prepared for the “My Country” television channel. Each program aired over 10 “Reuters” reports. 125 issues of the “Foreign News” program have been prepared. A total of 750 foreign messages were displayed on them. In addition, 15095 international news were presented for the “Zamon 120” program.<br><br>In addition, the UNESCO representative office in Uzbekistan, in cooperation with NAEMM and the BBC has developed a media project “Building the capacity of the media in Uzbekistan to ensure monitoring of public interests”. In 2018-2019, more than 250 seminars and trainings were held with the participation of experts from the BBC Academy, where more than 250 creative and technical employees of non-state television channels were trained.<br><br>In addition, a number of documentaries, such as “Nukus. Unknown collections”, “Uzbekistan. Discovered artifacts”, “Uzbekistan. Legends of Love”, “Uzbekistan. Time lost in the sands” were shot in conjunction with the television channel “Russia – Culture”. Meanwhile, a number of new films are being shot in cooperation with Russian partners.<br><br>Currently, cooperation with European experts continues. In particular, in cooperation with the Goethe Institute in Uzbekistan, the study and digitization of samples of the Uzbek musical heritage stored in the phonogram archive in Berlin is being carried out, as well as the publication of books and volumes on this topic.<br>Also, creative contacts have been established with the Turkish Television and Radio Company TRT. We are currently working with Turkish partners on a joint project dedicated to the legacy of our great ancestors and their contribution to world civilization.<br><br>Currently, negotiations are underway on partnership with the German media brand \"Deutsche Welle\" (“German Wave”). "
  },
  "ru": {
    "who_we_are": "Кто мы?",
    "who_we_are_t": "Национальная ассоциация электронных СМИ Узбекистана создана в 2003 году. Сегодня НАЭСМИ является крупнейшей негосударственной некоммерческой медиа-организацией в Узбекистане, в которую входят негосударственные телерадиоканалы и студии кабельного телевидения.",
    "aims": "Цели",
    "aims_t": "НАЭСМИ поставила перед собой задачу создать современный рынок телерадиовещания, обеспечить разнообразие контента негосударственных телеканалов, повысить активность вещателей в построении гражданского общества.<br><br>Еще одно направление деятельности НАЭСМИ – повышение профессионального уровня творческого и технического персонала национальных СМИ посредством семинаров и тренингов с участием международных экспертов.",
    "members": "Члены",
    "members_t": "Сегодня НАЭСМИ включает 18 национальных телеканалов, 19 радиоканалов и 100 электронных СМИ (в том числе 52 иностранных канала), входящих в состав Узбекского кабельного телевидения. В состав НАЭСМИ входят ведущие телеканалы, такие как Sevimli TV, ZOR TV, MY5 и Uzreport TV, которые имеют высокий рейтинг благодаря огромным возможностям, созданным для развития СМИ в новом Узбекистане. В целом этим каналам доверяют 76% всех зрителей.<br><br>НАЭСМИ также уделяет большое внимание развитию международного сотрудничества. Целью НАЭСМИ является обеспечение сотрудничества и солидарности с зарубежными и международными организациями, культурными центрами, посольствами и консульствами разных стран, крупными медийными структурами, в первую очередь, привлечение иностранных тренеров в национальные СМИ, повышение квалификации молодых творческих и технических кадров, обмен контентом, реализация совместных медиапроектов.",
    "cooperation": "Международное сотрудничество",
    "cooperation_t": "Соглашение было подписано в Октябре 2017 года с международным информационным агентством «Tomson Reuters» при поддержке посольства Великобритании в Узбекистане. В результате партнерства за 9 месяцев он получил пакет самых свежих и актуальных новостей на международной арене.<br><br>За 9 месяцев для телеканала «Моя страна» было подготовлено 80 выпусков информационной программы «Узбекистан-онлайн». В каждой программе было передано более 10 репортажей «Reuters». Подготовлено 125 номеров программы «Зарубежные новости». Всего на них было отображено 750 иностранных сообщений. Кроме того, для программы «Zamon 120» было представлено 15095 международных новостей.<br><br>Кроме того, представительство ЮНЕСКО в Узбекистане в сотрудничестве с НАЭСМИ и BBC разработало медиа-проект «Наращивание потенциала СМИ в Узбекистане для обеспечения мониторинга общественных интересов». В 2018-2019 годах было проведено более 250 семинаров и тренингов с участием экспертов Академии BBC, где прошли обучение более 250 творческих и технических сотрудников негосударственных телеканалов.<br><br>Кроме того, совместно с телеканалом «Россия – Культура» был снят ряд документальных фильмов, таких как, «Нукус. Неизвестная коллекция», «Узбекистан. Обнаруженные находки», «Узбекистан. Легенды о любви», «Узбекистан. Время, затерянное в песках». Между тем ряд новых фильмов снимаются в сотрудничестве с Российскими партнерами.",
  },
  "uz": {
    "who_we_are": "Biz kimmiz?",
    "who_we_are_t": "O‘zbekiston Elektron ommaviy axborot vositalari milliy assotsiatsiyasi 2003 yilda tashkil etilgan. Bugungi kunda O‘zEOAVMA O‘zbekistondagi nodavlat teleradiokanallar, kabel televideniyasi studiyalarini qamrab olgan eng yirik nodavlat notijorat media tashkiloti hisobalnadi.",
    "aims": "Maqsadlar:",
    "aims_t": "O‘zEOAVMA o‘z oldiga teleradioeshittirishlarning zamonaviy bozorini shakllantirish, nodavlat telestansiyalar efiri kontentining xilma-xiligini ta’minlash, teleradiouzatuvchilarning fuqarolik jamiyatini qurishdagi faolligini oshirish singari vazifalarni qo‘ygan. O‘zEOAVMA faoliyati yo‘nalishlaridan yana biri xalqaro ekspertlar ishtirokidagi seminar-treninglar vositasida milliy OAVning ijodiy va texnik xodimlari professional darajasini oshirish hisoblanadi.",
    "members": "A’zolar:",
    "members_t": "Bugungi kunda O‘zEOAVMA 18 ta milliy telekanal, 19 ta radiokanal, O‘zbekiston kabel televideniyesiga a’zo bo‘lgan 100 ta elektron OAV (shundan 52 tasi xorijiy kanallar)ni o‘z ichiga oladi. O‘zEOAVMA a’zolarit orasida mamlakatimizdav Yangi O‘zbekiston sharoitida OAV rivoi uchun yaratilgan ulkan imkoniyatlar tufayli yuqori reytingga ega bo‘lgan, Sevimli TV, ZOR TV, MY5 va Uzreport TV singari yetakchi telekanallar bor. Umuman, barcha teletomoshabinlarning 76%i ushbu kanallarga ishonch bildirishgan. O‘zEOAVMA xalqaro miqyosdagi hamkorlikni rivojlantirishga ham katta e’tibor qaratmoqda. O‘zEOAVMAning xorijiy va xalqaro tashkilotlar, madaniy markazlar, turli mamlakatlarning elchixonalari va konsulxonalari, yirik media-tuzilmalar bilan o‘zaro hamkorligi va hamjihatligini ta’minlash maqsadlari birinchi navbatda xorijlik murabbiylarni milliy media-maydonga jalb qilish, yosh ijodiy va texnik xodimlarning malakasini oshirish, kontent almashish, hamkorlikdagi media-loyihalarni amalga oshirishga yo‘naltirilgan.",
    "cooperation": "Xalqaro hamkorlik:",
    "cooperation_t": "Buyuk Britaniyaning O‘zbekistondagi elchixonasi ko‘magida 2017 yil oktyabrda «Tomson Reuters» xalqaro axborot agentligi bilan kelishuv imzolangan. Hamkorlik natijasida 9 oylik muddatda xalqaro maydonda ro‘y berayotgan eng yangi va dolzarb xabarlar kontent paketini qo‘lga kiritgan. 9 oy mobaynida “Mening yurtim” telekanali uchun “O‘zbekiston-onlayn” axborot dasturining 80 ta soni tayyorlandi. Har bir dasturdan “Reuters”dan 10 dan ortiq reportajlar uzatildi. “Xorij xabarlari” dasturining 125 ta soni tayyorlandi. Ularda jami 750 ta xorijiy xabar namoyish qilindi. Bundan tashqari ”Zamon 120” dasturi uchun 15095 ta xalqaro mavzudagi xabarlar havola qilingan. Shuningdek, UNESCOning O‘zbekistondagi vakolatxonasi, O‘zEOAVMA va BBC hamkorligida “Jamoatchilik manfaatlari kuzatuvini ta’minlash maqsadida O‘zbekiston OAVlari salohiyatini yuksaltirish” mavzusidagi media-loyiha yaratildi. 2018-2019 yillarda BBC Akaddemiyasi ekspertlari ishtirokida 250 dan ortiq seminar-treninglar o‘tkazildi, ularda nodavlat telestansiyalarning 250 dan ortiq ijodiy va texnik xodimlari malaka oshirdi. Bundan tashqari, “Rossiya-Kultura” telekanali bilan hamkorlikda “Nukus. Noma’lum kolleksiya”, “O‘zbekiston. Kashf etilgan yangiliklar”, “O‘zbekiston. Sevgi haqida afsonalar”, “O‘zbekiston. Vaqt qumlari oralab” kabi bir qator hujjatli filmlar yaratildi. Ayni paytda rossiyalik hamkorlar ko‘magida yana bir qator yangi filmlar suratga olish ishlari boshlangan. Ayni paytda yevropalik mutaxassislar bilan ham hamkorlik ishlari davom etmoqda. Xususan, Gete institutining O‘zbekistondagi vakolatxonasi bilan hamkorlikda Berlindagi fonogrammalar arxivida saqlanayotgan O‘zbekiston musiqiy merosi namunalarini o‘rgarish va raqamlashtirish, ushbu mavzuda kitob-albomlar chop etish ishlari ham samarali yo‘lga qo‘yildi. Shuningdek, Turkiyaning TRT teleradiokompaniyasi bilan ham ijodiy aloqalar yo‘lga qo‘yilgan. Ayni paytda turkiyalik hamkorlar bilan birgalikda buyuk ajdodlarimiz merosi, ularning jahon tamadduniga qo‘shgan hissasiga bag‘ishlangan qo‘shma loyiha ustida ish olib borilmoqda. Ayni paytda Germaniyaning “Deutsche Welle” (“Nemis to‘lqinim”) media-brendli bilan hamkorlik munosabatlarini o‘rnatish bo‘yicha muzokaralar davom etmoqda.",
  }
}
</i18n>