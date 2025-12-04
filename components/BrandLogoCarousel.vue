<template>
    <div class="brand-area pt-140">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brand-logo-carousel">
                        <swiper
                            :speed="1000"
                            :breakpoints="swiperOptions.breakpoints"
                        >
                            <swiper-slide v-for="(brand, index) in brandItems" :key="index">
                                <nuxt-link :to="brand.url" class="brand-item">
                                    <img :src="brand.imgSrc" :alt="brand.alt">
                                </nuxt-link>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                swiperOptions: {
                    breakpoints: {
                        320: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 4
                        },
                        992: {
                            slidesPerView: 5
                        },
                    },
                },

                brandItems: [
                    {
                        imgSrc: "/images/brand/1.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/2.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/3.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/4.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/5.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/6.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/7.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/8.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/9.png",
                        url: "#",
                        alt: "brand name"
                    },
                    {
                        imgSrc: "/images/brand/10.png",
                        url: "#",
                        alt: "brand name"
                    },
                ]
            }
        },
    };
</script>