<template>
    <div class="project-area py-140">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-lg-4 col-sm-6 mt-30" v-for="(project, index) in projectData" :key="index">
                    <ProjectItem :project="project" />
                </div>
                <div class="button-wrap button-position-center mt-40">
                    <button class="btn btn-custom btn-primary btn-secondary-hover" @click="loadMore" v-if="currentItem < projects.length">Load more</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ProjectItem: () => import("@/components/ProjectItem"),
        },

        props: ["projects"],

        data() {
            return {
                currentItem: 6
            }
        },

        computed: {
            projectData() {
                return this.projects.slice(0, this.currentItem);
            },
        },

        methods: {
            loadMore() {
                this.currentItem += 3;
            },
        },
    };
</script>
