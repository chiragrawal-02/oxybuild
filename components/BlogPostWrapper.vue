<template>
    <div class="blog-area py-140">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-lg-4 col-md-6 mt-30" v-for="(blog, index) in blogs" :key="index">
                    <BlogPostItem :blog="blog" />
                </div>
            </div>
            <div class="row mt-40">
                <div class="col-lg-12 pt-10">
                    <Pagination />
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
        },

        props: ["blogs"]
    };
</script>