<template>
    <div class="sidebar-area">
        <WidgetSearch />
        <WidgetCategories :categories="categories" />
        <WidgetPopularPost :blogs="blogs" />
        <WidgetArchive />
        <WidgetTags :tags="tags" />
    </div>
</template>

<script>
    import blogs from "~/data/blogs.json"

    export default {
        components: {
            WidgetSearch: () => import("@/components/WidgetSearch"),
            WidgetCategories: () => import("@/components/WidgetCategories"),
            WidgetPopularPost: () => import("@/components/WidgetPopularPost"),
            WidgetArchive: () => import("@/components/WidgetArchive"),
            WidgetTags: () => import("@/components/WidgetTags"),
        },

        data() {
            return {
                blogs
            }
        },

        computed: {
            tags() {
                return [...new Set(this.blogs.flatMap(tag => tag.tags))]
            },

            categories() {
                return [...new Set(this.blogs.flatMap(tag => tag.category))]
            }
        },
    }
</script>