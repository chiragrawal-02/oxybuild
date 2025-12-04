<template>
    <div class="sidebar-widget sidebar-list-wrap sidebar-common">
        <h3 class="sidebar-title mb-4">Popular Post</h3>
        <div v-for="blog in blogs.slice(0, 4)" :key="blog.id" class="list-item with-border">
            <nuxt-link :to="`/blog/${blog.slug}`" class="list-img">
                <img :src="blog.imgSrc" :alt="blog.title">
            </nuxt-link>
            <div class="list-content">
                <h3 class="title mb-1">
                    <nuxt-link :to="`/blog/${blog.slug}`">{{ blog.title }}</nuxt-link>
                </h3>
                <span class="list-meta">
                    <i class="ion-md-calendar"></i>
                    August 25, 2020
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["blogs"]
    }
</script>