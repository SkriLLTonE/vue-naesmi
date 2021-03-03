<template>
    <div class="grants">
        <div class="container">
            <div class="row">
                <div class="about_grant" v-for="(item , index) in grants" :key="index">
                    <div class="grants-content">
                        <div class="grants-img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="grants-title">
                            <div class="heading">
                                <div>
                                    <span>Награда за что то</span>
                                </div>
                            </div>
                            <div class="grants-date">
                                <div>
                                    <span>{{item.date}}</span>
                                </div>
                            </div>
                            <div class="grants_given">
                                <span> Получатели</span>
                            </div>
                            <div class="grants-fio">
                                <span>{{item.personName}}</span>
                            </div>
                            <div class="grants-about">
                                <div>
                                    <span>Награда за </span>
                                </div>
                            </div>
                            <div class="grants-about-disc">
                                <div>
                                    <span>{{item.rewardFor}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grants-full-disc">
                         <span>
                            {{item.discription}}
                        </span>
                    </div>
                    <div class="line">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Grants",
        data() {
            return {
                grants: [
                    {
                        img: "https://jets.ru/upload/resize_cache/iblock/174/867_482_2/Legacy_650_1.jpg",
                        title: "Награда за что то",
                        date: "01.02.2021",
                        personName: "вася, петя, жора, Гоша, Андрей,",
                        rewardFor: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, enim, nesciunt. Assumenda dolor dolore eaque, eius, ipsa laborum laudantium magnam necessitatibus odio perspiciatis quo similique! Maiores nam nihil odit totam.",
                        discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium autem beatae cumque deserunt eveniet fugiat modi molestiae, neque omnis repellendus suscipit tempore vero. Ad consectetur corporis eius et perspiciatis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium autem beatae cumque deserunt eveniet fugiat modi molestiae, neque omnis repellendus suscipit tempore vero. Ad consectetur corporis eius et perspiciatis?",
                    },
                    {
                        img: "https://jets.ru/upload/resize_cache/iblock/174/867_482_2/Legacy_650_1.jpg",
                        title: "Награда за что то",
                        date: "01.02.2021",
                        personName: "вася, петя, жора, Гоша, Андрей,",
                        rewardFor: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, enim, nesciunt. Assumenda dolor dolore eaque, eius, ipsa laborum laudantium magnam necessitatibus odio perspiciatis quo similique! Maiores nam nihil odit totam.",
                        discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium autem beatae cumque deserunt eveniet fugiat modi molestiae, neque omnis repellendus suscipit tempore vero. Ad consectetur corporis eius et perspiciatis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium autem beatae cumque deserunt eveniet fugiat modi molestiae, neque omnis repellendus suscipit tempore vero. Ad consectetur corporis eius et perspiciatis?",
                    },
                    {
                        img: "https://jets.ru/upload/resize_cache/iblock/174/867_482_2/Legacy_650_1.jpg",
                        title: "Награда за что то",
                        date: "01.02.2021",
                        personName: "вася, петя, жора, Гоша, Андрей,",
                        rewardFor: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, enim, nesciunt. Assumenda dolor dolore eaque, eius, ipsa laborum laudantium magnam necessitatibus odio perspiciatis quo similique! Maiores nam nihil odit totam.",
                        discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium autem beatae cumque deserunt eveniet fugiat modi molestiae, neque omnis repellendus suscipit tempore vero. Ad consectetur corporis eius et perspiciatis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium autem beatae cumque deserunt eveniet fugiat modi molestiae, neque omnis repellendus suscipit tempore vero. Ad consectetur corporis eius et perspiciatis?",
                    },
                    {
                        img: "https://jets.ru/upload/resize_cache/iblock/174/867_482_2/Legacy_650_1.jpg",
                        title: "Награда за что то",
                        date: "01.02.2021",
                        personName: "вася, петя, жора, Гоша, Андрей,",
                        rewardFor: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, enim, nesciunt. Assumenda dolor dolore eaque, eius, ipsa laborum laudantium magnam necessitatibus odio perspiciatis quo similique! Maiores nam nihil odit totam.",
                        discription: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium autem beatae cumque deserunt eveniet fugiat modi molestiae, neque omnis repellendus suscipit tempore vero. Ad consectetur corporis eius et perspiciatis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium autem beatae cumque deserunt eveniet fugiat modi molestiae, neque omnis repellendus suscipit tempore vero. Ad consectetur corporis eius et perspiciatis?",
                    },
                ],
            }
        }
    }
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

    .grants-img {
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
        justify-content: center;
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
    }

    .grants-about {
        font-size: 30px;
        padding: 20px 0;

    }
    .line{
        width: 100%;
        height: 2px;
        border-bottom: 4px solid lightgray;
        margin-top: 20px;
    }

    .grants-about-disc {
        font-size: 20px;
    }

    .grants-full-disc {
        font-size: 20px;
        text-align: left;
    }


    @media screen and (max-width: 768px) {

    }
</style>