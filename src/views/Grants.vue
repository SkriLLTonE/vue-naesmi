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
                                    <span>{{item.title}}</span>
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
                        title: "Оскар",
                        date: "01.02.2021",
                        personName: "вася, петя, жора, Гоша, Андрей,вася, петя, жора, Гоша, Андрей,вася, петя, жора, Гоша, Андрей,вася, петя, жора, Гоша, Андрей,вася, петя, жора, Гоша, Андрей,вася, петя, жора, Гоша, Андрей,вася, петя, жора, Гоша, Андрей,вася, петя, жора, Гоша, Андрей,",
                        rewardFor: "Лучший текст в новости об смерти смерти ",
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

    .grants-img img {
        width: 100%;
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
    }

    .grants-about {
        font-size: 30px;
        padding: 20px 0;

    }

    .line {
        width: 100%;
        height: 2px;
        border-bottom: 4px solid lightgray;
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
        .grants-title{
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
        .grants-full-disc{
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