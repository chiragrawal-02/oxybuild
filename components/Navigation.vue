<template>
    <ul>
        <li>
            <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/service">Service</nuxt-link>
            <ul class="sub-menu">
                <li>
                    <nuxt-link to="/service">Service</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/service/Renovation-102">Service Details</nuxt-link>
                </li>
            </ul>
        </li>
        <li>
            <nuxt-link to="/project">Project</nuxt-link>
            <ul class="sub-menu">
                <li>
                    <nuxt-link to="/project">Project</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/project/calton-bridge-101">Project Details</nuxt-link>
                </li>
            </ul>
        </li>
        <li>
            <nuxt-link to="/our-team">Pages</nuxt-link>
            <ul class="sub-menu">
                <li>
                    <nuxt-link to="/our-team">Our Team</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/our-clients">Our Clients</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/our-working-process">Our Working Process</nuxt-link>
                </li>
            </ul>
        </li>
        <li>
            <nuxt-link to="/blog">Blog</nuxt-link>
            <ul class="sub-menu">
                <li>
                    <nuxt-link to="/blog">Blog</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/blog/blog-left-sidebar">Blog Left Sidebar</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/blog/blog-right-sidebar">Blog Right Sidebar</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/blog/construction-technology">Blog Details</nuxt-link>
                </li>
            </ul>
        </li>
        <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
    </ul>
</template>