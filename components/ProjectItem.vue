<template>
    <div class="project-item">
        <nuxt-link :to="`/project/${project.slug}`" class="project-img">
            <img :src="project.imgSrc" :alt="project.title">
        </nuxt-link>
        <div class="project-content with-boxshadow">
            <span class="sub-title">{{ project.category }}</span>
            <h3 class="title mb-0">
                <nuxt-link :to="`/project/${project.slug}`">{{ project.title }}</nuxt-link>
            </h3>
            <span>Duration: {{ project.duration }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["project"]
    };
</script>