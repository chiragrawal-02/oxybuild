<template>
    <div class="service-details-page-wrapper">
        <Header />
        <OffCanvasMobileMenu />
        <Breadcrumb :title="service.title" subTitle="Service Details" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />
        <ServiceDetailsWrapper :service="service" />
        <Newsletter />
        <Footer />
    </div>
</template>

<script>
    import services from "~/data/services"

    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            ServiceDetailsWrapper: () => import('@/components/ServiceDetailsWrapper'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
        },

        data() {
            return {
                services,
                slug: this.$route.params.slug
            }
        },

        computed: {
            service() {
                return this.services.find(service => service.slug === this.slug) 
            }
        },
    };
</script>


