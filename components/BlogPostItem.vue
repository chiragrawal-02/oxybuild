<template>
    <div class="blog-item">
        <nuxt-link :to="`/blog/${blog.slug}`" class="blog-img">
            <img class="img-full" :src="blog.imgSrc" :alt="blog.title">
        </nuxt-link>
        <div class="blog-content">
            <span class="blog-meta">{{ blog.author }} - {{ blog.date }} - {{ blog.category }}</span>
            <h3 class="title mb-2">
                <nuxt-link :to="`/blog/${blog.slug}`">{{ blog.title }}</nuxt-link>
            </h3>
            <p class="mb-4">{{ blog.excerpt }}</p>
            <ul class="blog-button-wrap">
                <li>
                    <nuxt-link :to="`/blog/${blog.slug}`" class="btn btn-link p-0">Read more</nuxt-link>
                </li>
                <li>
                    <button class="comment">{{ blog.comment }} Comments</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["blog"]
    };
</script>