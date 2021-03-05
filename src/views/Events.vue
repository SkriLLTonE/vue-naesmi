<template>
    <div>
        <div class="container" v-for="(item, index) in events" :key="index">
            <div class="row">
                <div class="events_card" >
                    <div class="img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="heading">
                        <p>{{item.title}}</p>
                    </div>
                    <div class="date_place">
                        <span>{{item.date}} &nbsp; / &nbsp;</span>
                        <span>  {{item.place}}</span>
                    </div>
                    <div class="discription">
                        <span>{{item.disc}}</span>
                    </div>
                    <div class="btn">
                        <a target="_blank">
                            <button class="button-container">
                                <div style="font-weight: bold">Подробнее</div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "events",
        data() {
            return {
                events: [
                    {
                        img: "https://www.nat.ru/images/event-1.jpg",
                        title: "Золотой грамафvseryvgsrthbyedrtyjон",
                        date: "04 Марта 2021",
                        place: "Москваqawerfvxdrghbdrfyjnftgyjvdfgh, Москва, AZIMUT Отель Смоленская",
                        disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias cum distinctio ipsam modi quae totam veritatis. Adipisci assumenda blanditiis, debitis enim et incidunt ipsam iste laborum molestias, officiis suscipit.\n",
                    },
                    {
                        img: "https://www.nat.ru/images/event-1.jpg",
                        title: "Золотой грамафvseryvgsrthbyedrtyjон",
                        date: "04 Марта 2021",
                        place: "Москваqawerfvxdrghbdrfyjnftgyjvdfgh, Москва, AZIMUT Отель Смоленская",
                        disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias cum distinctio ipsam modi quae totam veritatis. Adipisci assumenda blanditiis, debitis enim et incidunt ipsam iste laborum molestias, officiis suscipit.\n",
                    },
                    {
                        img: "https://www.nat.ru/images/event-1.jpg",
                        title: "Золотой грамафvseryvgsrthbyedrtyjон",
                        date: "04 Марта 2021",
                        place: "Москваqawerfvxdrghbdrfyjnftgyjvdfgh, Москва, AZIMUT Отель Смоленская",
                        disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias cum distinctio ipsam modi quae totam veritatis. Adipisci assumenda blanditiis, debitis enim et incidunt ipsam iste laborum molestias, officiis suscipit.\n",
                    },

                ],
            }
        },
    }
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

    .events_card {
        padding: 20px;
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
        margin-top: 40px;
    }

    .date_place {
        text-align: left;
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
            height: 100%;
        }

        .img img {
            object-fit: contain;
            height: 100%;
        }

        .discription {
            font-size: 18px;
        }
    }
</style>