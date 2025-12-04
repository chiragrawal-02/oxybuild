<template>
    <div class="sidebar-widget sidebar-tags sidebar-common">
        <h3 class="sidebar-title mb-4">Tags</h3>
        <ul>
            <li v-for="(tag, i) in tags" :key="i">
                <nuxt-link to="/blog">{{ tag }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ["tags"]
    }
</script>