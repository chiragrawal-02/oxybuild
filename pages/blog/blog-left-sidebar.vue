<template>
    <div class="blog-page-wrapper">
        <Header />
        <OffCanvasMobileMenu />
        <Breadcrumb title="Blog Post" subTitle="Our Blog" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />
        <BlogPostWithSidebar :blogs="blogs" directionClass="order-lg-first" />
        <Newsletter />
        <Footer />
        <ScrollTop />
    </div>
</template>

<script>
    import blogs from "~/data/blogs.json"

    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            BlogPostWithSidebar: () => import('@/components/BlogPostWithSidebar'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        data() {
            return {
                blogs
            }
        },
    };
</script>


