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
</template>

<script>
    export default {
        name: "NewsPage",
        data() {

        },
    }
</script>

<style scoped>
    .wrap {
        width: 94%;
        left: 3%;
    }
    .container_n{
        padding: 0 15px;
    }
    .all-content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
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
        font-size: 50px;
        color: #2d66b3;
        padding: 50px 150px;
    }


    .card_img img {
        width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: 6px;
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
            padding: 50px 0;
        }


        .news_title {
            font-size: 30px;
        }

        .news_img img {
            height: auto;
        }

        .heading {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 768px) {
        .all-content {
            flex-direction: column;
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

        .all-content {
            padding: 0 10px;
        }

        .news_img img {
            height: auto;
        }

        .heading {
            font-size: 30px;
        }

        .news_disc {
            font-size: 16px;
        }

    }
</style>