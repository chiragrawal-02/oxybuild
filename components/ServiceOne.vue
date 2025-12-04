<template>
    <div class="service-area py-140">
        <div class="container">
            <div class="section-title-area pb-70">
                <div class="section-title with-border pb-5 pb-lg-0">
                    <span>SERVICES</span>
                    <h2 class="mb-0 font-size-50">Provide Unique <br> & Quality Service</h2>
                </div>
                <div class="section-banner text-white align-self-center" :style="{ backgroundImage: `url('/images/service/bg/1-1.png')` }">
                    <h2 class="info mb-0">Do you have projects? <span>+0123456789</span></h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="service-slider swiper-arrow with-bg_white">
                        <swiper
                            :speed="1000"
                            :space-between="30"
                            :navigation="swiperOptions.navigation"
                            :breakpoints="swiperOptions.breakpoints"
                        >
                            <swiper-slide v-for="service in services" :key="service.id">
                                <ServiceItem :service="service" />
                            </swiper-slide>
                        </swiper>
                        <div class="swiper-button-next">
                            <i class="ion-ios-arrow-forward"></i>
                        </div>
                        <div class="swiper-button-prev">
                            <i class="ion-ios-arrow-back"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import SwiperCore, { Navigation } from 'swiper/core'
    SwiperCore.use([Navigation])

    import services from "~/data/services.json"

    export default {
        components: {
            Swiper,
            SwiperSlide,
            ServiceItem: () => import("@/components/ServiceItem"),
        },
        data() {
            return {
                services,
                swiperOptions: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    },
                }
            }
        },
    };
</script>