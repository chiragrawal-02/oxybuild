<template>
    <div class="blog-area py-140">
        <div class="container">
            <div class="section-title-area style-01 pb-70">
                <div class="section-title-wrap">
                    <div class="section-title with-border different-width text-start text-lg-end">
                        <span>OUR BLOG</span>
                        <h2 class="mb-0">Latest Post Form Blog</h2>
                    </div>
                    <div class="section-desc">
                        <p class="font-size-20 mb-0">Construction of itself, because it is pain, but because some proper style design occur in toil and pain pleasure we have expert team</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="blog-slider">
                        <swiper
                            :speed="1000"
                            :space-between="30"
                            :navigation="blogCarousel.navigation"
                            :breakpoints="blogCarousel.breakpoints"
                        >
                            <swiper-slide v-for="(blog, index) in blogs" :key="index">
                                <BlogPostItem :blog="blog" />
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

    import blogs from "~/data/blogs.json"

    export default {
        components: {
            Swiper,
            SwiperSlide,
            BlogPostItem: () => import("@/components/BlogPostItem")
        },

        data() {
            return {
                blogs,
                blogCarousel: {
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }
                }
            }
        }
    };
</script>
