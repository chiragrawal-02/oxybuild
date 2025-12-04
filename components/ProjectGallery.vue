<template>
    <div class="project-area ">
        <div class="project-inner" :style="{ backgroundImage: `url('/images/project/bg/1-1.png')` }">
            <div class="button-wrap text-end">
                <nuxt-link to="/project" class="btn btn-project"><span>view more</span></nuxt-link>
            </div>
            <div class="container-fluid p-0">
                <div class="project-with-title">
                    <div class="section-title-area text-white h-100">
                        <div class="title-with-arrow">
                            <div class="section-title-wrap style-02">
                                <div class="section-title">
                                    <span>PROJECTS</span>
                                    <h2 class="mb-0">Our Recent <br> Projects</h2>
                                </div>
                            </div>
                            <!-- Add Arrows -->
                            <div class="project-button-wrap">
                                <div class="project-button-prev">
                                    <i class="ion-chevron-left"></i>
                                </div>
                                <div class="project-button-next">
                                    <i class="ion-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project-slider">
                        <swiper
                            :speed="1000"
                            :navigation="swiperOptions.navigation"
                            :breakpoints="swiperOptions.breakpoints"
                        >
                            <swiper-slide v-for="(project, index) in projects" :key="index">
                                <ProjectItem :project="project" />
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
    import SwiperCore, { Navigation } from 'swiper/core'
    SwiperCore.use([Navigation])

    import projects from "~/data/projects.json"

    export default {
        components: {
            Swiper,
            SwiperSlide,
            ProjectItem: () => import("@/components/ProjectItem"),
        },

        data() {
            return {
                projects,
                swiperOptions: {
                    navigation: {
                        prevEl: '.project-button-prev',
                        nextEl: '.project-button-next',
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
                        1200: {
                            slidesPerView: 4,
                        },
                    },
                }
            }
        },
    };
</script>