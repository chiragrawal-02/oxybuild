<template>
    <div class="blog-details-page-wrapper">
        <Header />
        <OffCanvasMobileMenu />
        <Breadcrumb :title="blog.title" subTitle="Our Blog" :desc="blog.excerpt" />
        <BlogDetailsWrapper :blog="blog" />
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
            BlogDetailsWrapper: () => import('@/components/BlogDetailsWrapper'),
            Newsletter: () => import('@/components/Newsletter'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        data() {
            return {
                blogs,
                slug: this.$route.params.slug
            }
        },

        computed: {
            blog() {
                return this.blogs.find(item => item.slug === this.slug)
            }
        },
    };
</script>


