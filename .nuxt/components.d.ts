
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


export const AboutOne: typeof import("../components/AboutOne.vue")['default']
export const AboutThree: typeof import("../components/AboutThree.vue")['default']
export const AboutTwo: typeof import("../components/AboutTwo.vue")['default']
export const BlogDetailsWrapper: typeof import("../components/BlogDetailsWrapper.vue")['default']
export const BlogPostItem: typeof import("../components/BlogPostItem.vue")['default']
export const BlogPostWithSidebar: typeof import("../components/BlogPostWithSidebar.vue")['default']
export const BlogPostWrapper: typeof import("../components/BlogPostWrapper.vue")['default']
export const BlogSection: typeof import("../components/BlogSection.vue")['default']
export const BlogSidebar: typeof import("../components/BlogSidebar.vue")['default']
export const BrandLogoCarousel: typeof import("../components/BrandLogoCarousel.vue")['default']
export const Breadcrumb: typeof import("../components/Breadcrumb.vue")['default']
export const ContactForm: typeof import("../components/ContactForm.vue")['default']
export const ContactWrapper: typeof import("../components/ContactWrapper.vue")['default']
export const CounterUp: typeof import("../components/CounterUp.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const HeroSlider: typeof import("../components/HeroSlider.vue")['default']
export const LoginRegisterWrapper: typeof import("../components/LoginRegisterWrapper.vue")['default']
export const MobileNavigation: typeof import("../components/MobileNavigation.vue")['default']
export const Navigation: typeof import("../components/Navigation.vue")['default']
export const Newsletter: typeof import("../components/Newsletter.vue")['default']
export const OffCanvasMobileMenu: typeof import("../components/OffCanvasMobileMenu.vue")['default']
export const Pagination: typeof import("../components/Pagination.vue")['default']
export const ProjectDetailsWrapper: typeof import("../components/ProjectDetailsWrapper.vue")['default']
export const ProjectGallery: typeof import("../components/ProjectGallery.vue")['default']
export const ProjectItem: typeof import("../components/ProjectItem.vue")['default']
export const ProjectManagementBanner: typeof import("../components/ProjectManagementBanner.vue")['default']
export const ProjectWrapper: typeof import("../components/ProjectWrapper.vue")['default']
export const ScrollTop: typeof import("../components/ScrollTop.vue")['default']
export const ServiceDetailsWrapper: typeof import("../components/ServiceDetailsWrapper.vue")['default']
export const ServiceItem: typeof import("../components/ServiceItem.vue")['default']
export const ServiceOne: typeof import("../components/ServiceOne.vue")['default']
export const ServiceTwo: typeof import("../components/ServiceTwo.vue")['default']
export const TeamMember: typeof import("../components/TeamMember.vue")['default']
export const TeamMemberWrapper: typeof import("../components/TeamMemberWrapper.vue")['default']
export const TeamSectionOne: typeof import("../components/TeamSectionOne.vue")['default']
export const TestimonialSection: typeof import("../components/TestimonialSection.vue")['default']
export const TopFeatures: typeof import("../components/TopFeatures.vue")['default']
export const TopFeaturesTwo: typeof import("../components/TopFeaturesTwo.vue")['default']
export const WidgetArchive: typeof import("../components/WidgetArchive.vue")['default']
export const WidgetCategories: typeof import("../components/WidgetCategories.vue")['default']
export const WidgetPopularPost: typeof import("../components/WidgetPopularPost.vue")['default']
export const WidgetSearch: typeof import("../components/WidgetSearch.vue")['default']
export const WidgetTags: typeof import("../components/WidgetTags.vue")['default']
export const WorkingProcess: typeof import("../components/WorkingProcess.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAboutOne: LazyComponent<typeof import("../components/AboutOne.vue")['default']>
export const LazyAboutThree: LazyComponent<typeof import("../components/AboutThree.vue")['default']>
export const LazyAboutTwo: LazyComponent<typeof import("../components/AboutTwo.vue")['default']>
export const LazyBlogDetailsWrapper: LazyComponent<typeof import("../components/BlogDetailsWrapper.vue")['default']>
export const LazyBlogPostItem: LazyComponent<typeof import("../components/BlogPostItem.vue")['default']>
export const LazyBlogPostWithSidebar: LazyComponent<typeof import("../components/BlogPostWithSidebar.vue")['default']>
export const LazyBlogPostWrapper: LazyComponent<typeof import("../components/BlogPostWrapper.vue")['default']>
export const LazyBlogSection: LazyComponent<typeof import("../components/BlogSection.vue")['default']>
export const LazyBlogSidebar: LazyComponent<typeof import("../components/BlogSidebar.vue")['default']>
export const LazyBrandLogoCarousel: LazyComponent<typeof import("../components/BrandLogoCarousel.vue")['default']>
export const LazyBreadcrumb: LazyComponent<typeof import("../components/Breadcrumb.vue")['default']>
export const LazyContactForm: LazyComponent<typeof import("../components/ContactForm.vue")['default']>
export const LazyContactWrapper: LazyComponent<typeof import("../components/ContactWrapper.vue")['default']>
export const LazyCounterUp: LazyComponent<typeof import("../components/CounterUp.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/Header.vue")['default']>
export const LazyHeroSlider: LazyComponent<typeof import("../components/HeroSlider.vue")['default']>
export const LazyLoginRegisterWrapper: LazyComponent<typeof import("../components/LoginRegisterWrapper.vue")['default']>
export const LazyMobileNavigation: LazyComponent<typeof import("../components/MobileNavigation.vue")['default']>
export const LazyNavigation: LazyComponent<typeof import("../components/Navigation.vue")['default']>
export const LazyNewsletter: LazyComponent<typeof import("../components/Newsletter.vue")['default']>
export const LazyOffCanvasMobileMenu: LazyComponent<typeof import("../components/OffCanvasMobileMenu.vue")['default']>
export const LazyPagination: LazyComponent<typeof import("../components/Pagination.vue")['default']>
export const LazyProjectDetailsWrapper: LazyComponent<typeof import("../components/ProjectDetailsWrapper.vue")['default']>
export const LazyProjectGallery: LazyComponent<typeof import("../components/ProjectGallery.vue")['default']>
export const LazyProjectItem: LazyComponent<typeof import("../components/ProjectItem.vue")['default']>
export const LazyProjectManagementBanner: LazyComponent<typeof import("../components/ProjectManagementBanner.vue")['default']>
export const LazyProjectWrapper: LazyComponent<typeof import("../components/ProjectWrapper.vue")['default']>
export const LazyScrollTop: LazyComponent<typeof import("../components/ScrollTop.vue")['default']>
export const LazyServiceDetailsWrapper: LazyComponent<typeof import("../components/ServiceDetailsWrapper.vue")['default']>
export const LazyServiceItem: LazyComponent<typeof import("../components/ServiceItem.vue")['default']>
export const LazyServiceOne: LazyComponent<typeof import("../components/ServiceOne.vue")['default']>
export const LazyServiceTwo: LazyComponent<typeof import("../components/ServiceTwo.vue")['default']>
export const LazyTeamMember: LazyComponent<typeof import("../components/TeamMember.vue")['default']>
export const LazyTeamMemberWrapper: LazyComponent<typeof import("../components/TeamMemberWrapper.vue")['default']>
export const LazyTeamSectionOne: LazyComponent<typeof import("../components/TeamSectionOne.vue")['default']>
export const LazyTestimonialSection: LazyComponent<typeof import("../components/TestimonialSection.vue")['default']>
export const LazyTopFeatures: LazyComponent<typeof import("../components/TopFeatures.vue")['default']>
export const LazyTopFeaturesTwo: LazyComponent<typeof import("../components/TopFeaturesTwo.vue")['default']>
export const LazyWidgetArchive: LazyComponent<typeof import("../components/WidgetArchive.vue")['default']>
export const LazyWidgetCategories: LazyComponent<typeof import("../components/WidgetCategories.vue")['default']>
export const LazyWidgetPopularPost: LazyComponent<typeof import("../components/WidgetPopularPost.vue")['default']>
export const LazyWidgetSearch: LazyComponent<typeof import("../components/WidgetSearch.vue")['default']>
export const LazyWidgetTags: LazyComponent<typeof import("../components/WidgetTags.vue")['default']>
export const LazyWorkingProcess: LazyComponent<typeof import("../components/WorkingProcess.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
