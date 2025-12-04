<template>
    <div class="service-item">
        <div class="service-img">
            <nuxt-link :to="`/service/${service.slug}`">
                <img :src="service.imgSrc" :alt="service.title">
            </nuxt-link>
        </div>
        <div class="add-action text-white">
            <h2 class="title mb-0">
                <nuxt-link :to="`/service/${service.slug}`">{{ service.title }}</nuxt-link>
            </h2>
            <div class="icon">
                <nuxt-link :to="`/service/${service.slug}`">
                    <i class="ion-arrow-right-c"></i>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service']
    };
</script>