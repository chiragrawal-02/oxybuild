<template>
    <div class="blog-area py-140">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="blog-wrap row mtn-30">
                        <div class="col-md-6 mt-30" v-for="(blog, index) in blogs.slice(0, 8)" :key="index">
                            <BlogPostItem :blog="blog" />
                        </div>
                    </div>
                    <div class="row mt-40">
                        <div class="col-12">
                            <Pagination />
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-80 mt-md-0" :class="directionClass">
                    <BlogSidebar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            BlogPostItem: () => import("@/components/BlogPostItem"),
            Pagination: () => import("@/components/Pagination"),
            BlogSidebar: () => import("@/components/BlogSidebar"),
        },

        props: ["blogs", "directionClass"]
    };
</script>