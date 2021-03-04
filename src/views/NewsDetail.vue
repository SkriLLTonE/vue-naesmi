<template>

    <div class="wrap">
        <div class="news">
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
                                :src="'http://localhost:8000' + main.image"
                                :alt="main.title"
                        />
                    </div>
                </div>
                <div class="news_disc">
                    <span v-html="main.description"></span>
                </div>
            </div>
        </div>
        <div class="container_n">
            <div class="heading">
                <span>Другие новости</span>
            </div>
        </div>
    </div>
    <div>
        <div class="container-sing-card">
            <div
                    v-for="(item, index) in main.read_also"
                    :key="index"
                    class="single-card">
                <div>
                    <img class="single-card-img"
                            :src="'http://localhost:8000' + item.image"/>
                </div>
                <div class="card-content">
                    <div
                            class="main-card-meta"
                            style="font-size: 14px; padding: 0 0 0 10px"
                    >
                        {{ item.category.name }}
                    </div>

                    <div style="
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
          ">
                        {{ item.title }}
                    </div>

                    <div style="display: flex; align-items: center; padding: 16px 0 0 10px">
                        <div style="
                                width: 4px;height: 4px;background-color: black;border-radius: 50%;">

                        </div>
                        <div style="font-weight: bold; font-size: 14px; padding: 0 12px">
                            {{ months[new Date(item.pub_date).getMonth()] }}
                            {{ new Date(item.pub_date).getDate() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsDetail",
        props: ["id"],
        created() {
            this.getNewsDetail(this.id);
        },
        methods: {
            getNewsDetail(id) {
                fetch(`http://127.0.0.1:8000/news-det/${id}/`)
                    .then((res) => {
                        return res.json();
                    })
                    .then((json) => {
                        this.main = json;
                    });
            },
        },
        data() {
            return {
                months: [
                    "Янв",
                    "Фев",
                    "Мар",
                    "Апр",
                    "Май",
                    "Июн",
                    "Июл",
                    "Авг",
                    "Сен",
                    "Окт",
                    "Ноя",
                    "Дек",
                ],
                main: {
                    id: 2,
                    category: {
                        id: 1,
                        name: "",
                    },
                    read_also: [
                        {
                            id: 7,
                            category: {
                                id: 1,
                                name: "",
                            },
                            title: "",
                            image: "",
                            pub_date: "",
                            last_change: "",
                        },
                    ],
                    title: "",
                    description: "",
                    image: "",
                    pub_date: "",
                    last_change: "",
                },
            };
        },
    };
</script>

<style scoped>
    .container-sing-card {
        width: 100%;
        margin: 0 auto;
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 0px 140px;
    }

    .wrap {
        width: 94%;
        left: 3%;
    }

    .container_n {
        padding: 0 15px;
    }

    .all-content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        margin-top: 25px;
    }

    .container {
        padding: 0 20px;
        width: 100%;
        height: auto;
        text-align: left;
    }

    .news_content {
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        flex-direction: column;
        width: 23%;
        margin-left: auto;
    }

    .news_date {
        font-size: 20px;
        color: gray;
    }

    .news_title {
        font-size: 50px;
        font-family: "Times New Roman", Times, serif;
        text-align: left;
    }

    .news_img {
        width: 60%;
        margin-right: auto;
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
        padding: 30px 150px;
        font-size: 23px;
    }

    .container {
    }

    .heading {
        text-align: left;
        font-size: 40px;
        color: #111;
        font-family: "Times New Roman", Times, serif;
        padding: 50px 150px 0 150px;
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
        .container-sing-card{
            padding: 0 20px;
        }
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
        .container-sing-card{
            width: 100%;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin-top: 20px;
        }
        .single-card{
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