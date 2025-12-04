<template>
    <div class="sidebar-widget sidebar-blog-categories sidebar-common">
        <h3 class="sidebar-title mb-4">Categories</h3>
        <ul>
            <li v-for="(category, i) in categories" :key="i">
                <nuxt-link to="/blog">
                    {{ category }}
                    <span>02</span>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ["categories"]
    }
</script>
