<template>
    <div class="project-details-page-wrapper">
        <Header />
        <OffCanvasMobileMenu />
        <Breadcrumb :title="project.title" subTitle="Project Details" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />
        <ProjectDetailsWrapper :project="project" />
        <ProjectManagementBanner />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
    import projects from "~/data/projects.json"

    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            ProjectDetailsWrapper: () => import('@/components/ProjectDetailsWrapper'),
            ProjectManagementBanner: () => import('@/components/ProjectManagementBanner'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
        },

        data() {
            return {
                projects,
                slug: this.$route.params.slug
            }
        },

        computed: {
            project() {
                return this.projects.find(project => project.slug === this.slug)
            }
        },
    };
</script>


