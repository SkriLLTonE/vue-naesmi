<template>
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
                    <img src="../assets/Nature.jpeg" alt="">
                </div>
            </div>
            <div class="news_disc">
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum illo provident suscipit voluptates. Accusamus accusantium ad amet consequatur dignissimos, enim excepturi explicabo iusto maiores odio quam sunt ut voluptate, voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Earum illo provident suscipit voluptates. Accusamus accusantium ad amet consequatur dignissimos, enim excepturi explicabo iusto maiores odio quam sunt ut voluptate, voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum illo provident suscipit voluptates. Accusamus accusantium ad amet consequatur dignissimos, enim excepturi explicabo iusto maiores odio quam sunt ut voluptate, voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Earum illo provident suscipit voluptates. Accusamus accusantium ad amet consequatur dignissimos, enim excepturi explicabo iusto maiores odio quam sunt ut voluptate, voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum illo provident suscipit voluptates. Accusamus accusantium ad amet consequatur dignissimos, enim excepturi explicabo iusto maiores odio quam sunt ut voluptate, voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum illo provident suscipit voluptates. Accusamus accusantium ad amet consequatur dignissimos, enim excepturi explicabo iusto maiores odio quam sunt ut voluptate, voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum illo provident suscipit voluptates. Accusamus accusantium ad amet consequatur dignissimos, enim excepturi explicabo iusto maiores odio quam sunt ut voluptate, voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum illo provident suscipit voluptates. Accusamus accusantium ad amet consequatur dignissimos, enim excepturi explicabo iusto maiores odio quam sunt ut voluptate, voluptatibus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum illo provident suscipit voluptates. Accusamus accusantium ad amet consequatur dignissimos, enim excepturi explicabo iusto maiores odio quam sunt ut voluptate, voluptatibus!
                </span>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="heading">
            <span>Другие новости</span>
        </div>
    </div>
    <div class="another_news">
        <div class="container">
            <div class="card_cont">
                <div class="card">
                    <div class="card_img">
                        <img src="https://cdnb.artstation.com/p/assets/images/images/011/449/401/large/febri-ferdian-b-x177c.jpg?1529631793"
                             alt="">
                    </div>
                    <div class="card_title">
                        <div class="news_category">
                            international
                        </div>
                        <div class="title">
                            <span>
                                The Latest: Officer in Canada prime minister motorcade hurt
                            </span>
                        </div>
                        <div class="card_date">
                            <span>
                               2 Марта
                            </span>

                        </div>
                    </div>
                        <div class="btn_link">
                            <div class="btn">Подробнее</div>
                        </div>
                </div>
                <div class="card">
                    <div class="card_img">
                        <img src="https://cdnb.artstation.com/p/assets/images/images/011/449/401/large/febri-ferdian-b-x177c.jpg?1529631793"
                             alt="">
                    </div>
                    <div class="card_title">
                        <div class="news_category">
                            international
                        </div>
                        <div class="title">
                            <span>
                                The Latest: Officer in Canada prime minister motorcade hurt
                            </span>
                        </div>
                        <div class="card_date">
                            <span>
                               2 Марта
                            </span>

                        </div>
                    </div>
                        <div class="btn_link">
                            <div class="btn">Подробнее</div>
                        </div>
                </div>
                <div class="card">
                    <div class="card_img">
                        <img src="https://cdnb.artstation.com/p/assets/images/images/011/449/401/large/febri-ferdian-b-x177c.jpg?1529631793"
                             alt="">
                    </div>
                    <div class="card_title">
                        <div class="news_category">
                            international
                        </div>
                        <div class="title">
                            <span>
                                The Latest: Officer in Canada prime minister motorcade hurt
                            </span>
                        </div>
                        <div class="card_date">
                            <span>
                               2 Марта
                            </span>

                        </div>
                    </div>
                        <div class="btn_link">
                            <div class="btn">Подробнее</div>
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

        },
    }
</script>

<style scoped>
    .news {
        width: 94%;
        left: 3%;
    }

    .all-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    .container {
        padding: 20px;
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
        padding: 30px 50px;
        font-size: 23px;
    }

    .heading {
        text-align: center;
        font-size: 50px;
        text-decoration: underline black;
        color: #2d66b3;
    }

    .news_category {
        padding: 10px 0;
        color: gray;
        text-transform: uppercase;
    }

    .card_cont {
        display: flex;
        justify-content: center;
    }

    .title {
        font-size: 20px;
        font-weight: bold;
    }

    .card {
        width: 300px;
        margin-right: 40px;
    }

    .card_img img {
        width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: 6px;
    }
    .btn_link{
    width: 120px;
    }
    .btn {
        padding: 15px 0px;
        text-align: center;
        background: #2d66b3;
        border-radius: 15px;
        outline: none;
        color: white;
        transition: all 0.3s ease-in-out;
        border: 1px solid;

    }
        .card_date{
            padding: 10px 0;
        }
    .btn:hover{

        background: white;
        color: #2d66b3;
        border: 1px solid #4992f7;
        box-shadow: 0 0 10px #719ece;

    }
</style>