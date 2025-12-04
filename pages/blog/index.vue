<template>
    <div class="blog-page-wrapper">
        <Header />
        <OffCanvasMobileMenu />
        <Breadcrumb title="Blog Posts" subTitle="Our Blog" desc="Construction of itself, because it is pain some proper style design occur are pleasure" />
        <BlogPostWrapper :blogs="blogs" />
        <Newsletter />
        <Footer />
        <ScrollTop />
    </div>
</template>

<script>
    import blogs from "~/data/blogs"

    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            BlogPostWrapper: () => import('@/components/BlogPostWrapper'),
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


