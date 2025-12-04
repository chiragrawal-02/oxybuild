
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'AboutOne': typeof import("../../components/AboutOne.vue")['default']
  'AboutThree': typeof import("../../components/AboutThree.vue")['default']
  'AboutTwo': typeof import("../../components/AboutTwo.vue")['default']
  'BlogDetailsWrapper': typeof import("../../components/BlogDetailsWrapper.vue")['default']
  'BlogPostItem': typeof import("../../components/BlogPostItem.vue")['default']
  'BlogPostWithSidebar': typeof import("../../components/BlogPostWithSidebar.vue")['default']
  'BlogPostWrapper': typeof import("../../components/BlogPostWrapper.vue")['default']
  'BlogSection': typeof import("../../components/BlogSection.vue")['default']
  'BlogSidebar': typeof import("../../components/BlogSidebar.vue")['default']
  'BrandLogoCarousel': typeof import("../../components/BrandLogoCarousel.vue")['default']
  'Breadcrumb': typeof import("../../components/Breadcrumb.vue")['default']
  'ContactForm': typeof import("../../components/ContactForm.vue")['default']
  'ContactWrapper': typeof import("../../components/ContactWrapper.vue")['default']
  'CounterUp': typeof import("../../components/CounterUp.vue")['default']
  'Footer': typeof import("../../components/Footer.vue")['default']
  'Header': typeof import("../../components/Header.vue")['default']
  'HeroSlider': typeof import("../../components/HeroSlider.vue")['default']
  'LoginRegisterWrapper': typeof import("../../components/LoginRegisterWrapper.vue")['default']
  'MobileNavigation': typeof import("../../components/MobileNavigation.vue")['default']
  'Navigation': typeof import("../../components/Navigation.vue")['default']
  'Newsletter': typeof import("../../components/Newsletter.vue")['default']
  'OffCanvasMobileMenu': typeof import("../../components/OffCanvasMobileMenu.vue")['default']
  'Pagination': typeof import("../../components/Pagination.vue")['default']
  'ProjectDetailsWrapper': typeof import("../../components/ProjectDetailsWrapper.vue")['default']
  'ProjectGallery': typeof import("../../components/ProjectGallery.vue")['default']
  'ProjectItem': typeof import("../../components/ProjectItem.vue")['default']
  'ProjectManagementBanner': typeof import("../../components/ProjectManagementBanner.vue")['default']
  'ProjectWrapper': typeof import("../../components/ProjectWrapper.vue")['default']
  'ScrollTop': typeof import("../../components/ScrollTop.vue")['default']
  'ServiceDetailsWrapper': typeof import("../../components/ServiceDetailsWrapper.vue")['default']
  'ServiceItem': typeof import("../../components/ServiceItem.vue")['default']
  'ServiceOne': typeof import("../../components/ServiceOne.vue")['default']
  'ServiceTwo': typeof import("../../components/ServiceTwo.vue")['default']
  'TeamMember': typeof import("../../components/TeamMember.vue")['default']
  'TeamMemberWrapper': typeof import("../../components/TeamMemberWrapper.vue")['default']
  'TeamSectionOne': typeof import("../../components/TeamSectionOne.vue")['default']
  'TestimonialSection': typeof import("../../components/TestimonialSection.vue")['default']
  'TopFeatures': typeof import("../../components/TopFeatures.vue")['default']
  'TopFeaturesTwo': typeof import("../../components/TopFeaturesTwo.vue")['default']
  'WidgetArchive': typeof import("../../components/WidgetArchive.vue")['default']
  'WidgetCategories': typeof import("../../components/WidgetCategories.vue")['default']
  'WidgetPopularPost': typeof import("../../components/WidgetPopularPost.vue")['default']
  'WidgetSearch': typeof import("../../components/WidgetSearch.vue")['default']
  'WidgetTags': typeof import("../../components/WidgetTags.vue")['default']
  'WorkingProcess': typeof import("../../components/WorkingProcess.vue")['default']
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  'NuxtImg': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  'NuxtPicture': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  'LazyAboutOne': LazyComponent<typeof import("../../components/AboutOne.vue")['default']>
  'LazyAboutThree': LazyComponent<typeof import("../../components/AboutThree.vue")['default']>
  'LazyAboutTwo': LazyComponent<typeof import("../../components/AboutTwo.vue")['default']>
  'LazyBlogDetailsWrapper': LazyComponent<typeof import("../../components/BlogDetailsWrapper.vue")['default']>
  'LazyBlogPostItem': LazyComponent<typeof import("../../components/BlogPostItem.vue")['default']>
  'LazyBlogPostWithSidebar': LazyComponent<typeof import("../../components/BlogPostWithSidebar.vue")['default']>
  'LazyBlogPostWrapper': LazyComponent<typeof import("../../components/BlogPostWrapper.vue")['default']>
  'LazyBlogSection': LazyComponent<typeof import("../../components/BlogSection.vue")['default']>
  'LazyBlogSidebar': LazyComponent<typeof import("../../components/BlogSidebar.vue")['default']>
  'LazyBrandLogoCarousel': LazyComponent<typeof import("../../components/BrandLogoCarousel.vue")['default']>
  'LazyBreadcrumb': LazyComponent<typeof import("../../components/Breadcrumb.vue")['default']>
  'LazyContactForm': LazyComponent<typeof import("../../components/ContactForm.vue")['default']>
  'LazyContactWrapper': LazyComponent<typeof import("../../components/ContactWrapper.vue")['default']>
  'LazyCounterUp': LazyComponent<typeof import("../../components/CounterUp.vue")['default']>
  'LazyFooter': LazyComponent<typeof import("../../components/Footer.vue")['default']>
  'LazyHeader': LazyComponent<typeof import("../../components/Header.vue")['default']>
  'LazyHeroSlider': LazyComponent<typeof import("../../components/HeroSlider.vue")['default']>
  'LazyLoginRegisterWrapper': LazyComponent<typeof import("../../components/LoginRegisterWrapper.vue")['default']>
  'LazyMobileNavigation': LazyComponent<typeof import("../../components/MobileNavigation.vue")['default']>
  'LazyNavigation': LazyComponent<typeof import("../../components/Navigation.vue")['default']>
  'LazyNewsletter': LazyComponent<typeof import("../../components/Newsletter.vue")['default']>
  'LazyOffCanvasMobileMenu': LazyComponent<typeof import("../../components/OffCanvasMobileMenu.vue")['default']>
  'LazyPagination': LazyComponent<typeof import("../../components/Pagination.vue")['default']>
  'LazyProjectDetailsWrapper': LazyComponent<typeof import("../../components/ProjectDetailsWrapper.vue")['default']>
  'LazyProjectGallery': LazyComponent<typeof import("../../components/ProjectGallery.vue")['default']>
  'LazyProjectItem': LazyComponent<typeof import("../../components/ProjectItem.vue")['default']>
  'LazyProjectManagementBanner': LazyComponent<typeof import("../../components/ProjectManagementBanner.vue")['default']>
  'LazyProjectWrapper': LazyComponent<typeof import("../../components/ProjectWrapper.vue")['default']>
  'LazyScrollTop': LazyComponent<typeof import("../../components/ScrollTop.vue")['default']>
  'LazyServiceDetailsWrapper': LazyComponent<typeof import("../../components/ServiceDetailsWrapper.vue")['default']>
  'LazyServiceItem': LazyComponent<typeof import("../../components/ServiceItem.vue")['default']>
  'LazyServiceOne': LazyComponent<typeof import("../../components/ServiceOne.vue")['default']>
  'LazyServiceTwo': LazyComponent<typeof import("../../components/ServiceTwo.vue")['default']>
  'LazyTeamMember': LazyComponent<typeof import("../../components/TeamMember.vue")['default']>
  'LazyTeamMemberWrapper': LazyComponent<typeof import("../../components/TeamMemberWrapper.vue")['default']>
  'LazyTeamSectionOne': LazyComponent<typeof import("../../components/TeamSectionOne.vue")['default']>
  'LazyTestimonialSection': LazyComponent<typeof import("../../components/TestimonialSection.vue")['default']>
  'LazyTopFeatures': LazyComponent<typeof import("../../components/TopFeatures.vue")['default']>
  'LazyTopFeaturesTwo': LazyComponent<typeof import("../../components/TopFeaturesTwo.vue")['default']>
  'LazyWidgetArchive': LazyComponent<typeof import("../../components/WidgetArchive.vue")['default']>
  'LazyWidgetCategories': LazyComponent<typeof import("../../components/WidgetCategories.vue")['default']>
  'LazyWidgetPopularPost': LazyComponent<typeof import("../../components/WidgetPopularPost.vue")['default']>
  'LazyWidgetSearch': LazyComponent<typeof import("../../components/WidgetSearch.vue")['default']>
  'LazyWidgetTags': LazyComponent<typeof import("../../components/WidgetTags.vue")['default']>
  'LazyWorkingProcess': LazyComponent<typeof import("../../components/WorkingProcess.vue")['default']>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
