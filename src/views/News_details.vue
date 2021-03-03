<template>

    <div class="wrap">
        <div class="news">
            <div class="container">
                <div class="all-content">
                    <div class="news_content">
                        <div class="news_date">
                            <span>02.03.2021</span>
                        </div>
                        <div class="news_title">
                <span>
                  The Latest: Officer in Canada prime minister motorcade hurt
                </span>
                        </div>
                    </div>
                    <div class="news_img">
                        <img src="../assets/verstka.jpg" alt="">
                    </div>
                </div>
                <div class="news_disc">
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum illo provident suscipit voluptates. Accusamus accusantium ad amet consequatur dignissimos, enim excepturi explicabo iusto maiores odio quam sunt ut voluptate, voluptatibus!
                    Lorem i   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum illo provident suscipit voluptates. Accusamus accusantium ad amet consequatur dignissimos, enim excepturi explicabo iusto maiores odio quam sunt ut voluptate, voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum illo provident suscipit voluptates. Accusamus accusantium ad amet consequatur dignissimos, enim excepturi explicabo iusto maiores odio quam sunt ut voluptate, voluptatibus!
                </span>
                </div>
            </div>
        </div>
        <div class="container_n">
            <div class="heading">
                <span>Другие новости</span>
            </div>
        </div>
    </div>
    <div style=" margin-top: 50px;display: flex; flex-wrap: wrap;position: relative;justify-content: center;">
        <div v-for="(item, index) in news" :key="index" class="single-card">
            <img class="single-card-img"
                    src="https://cdnb.artstation.com/p/assets/images/images/011/449/401/large/febri-ferdian-b-x177c.jpg?1529631793"/>
            <div class="card-content">
                <div class="main-card-meta" style="font-size: 14px; padding: 0 0 0 10px">
                    {{ item.category }}
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
                    <div style="font-weight: bold; font-size: 14px">
                        {{ item.time }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsPage",
        data() {
            return {
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
                ]
            }
        },
    }
</script>

<style scoped>
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
        margin-top: 15px;
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
        font-size: 60px;
        color: #111;
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
            padding: 0 25px ;
        }


        .news_title {
            font-size: 30px;
        }

        .news_img img {
            height: auto;
        }

        .heading {
            font-size: 50px;
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
            padding: 30px 15px;
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
            padding: 15px 70px 0 70px;
        }

        .news_disc {
            font-size: 16px;
            padding: 30px;
        }

    }
    @media screen and (max-width: 576px) {
        .heading{
            font-size: 30px;
            padding: 0;
        }
    }
</style>