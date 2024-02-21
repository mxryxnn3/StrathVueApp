import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import AboutUs from "./../components/AboutUs.vue"
import Alumni from "./../components/Alumni.vue"
import ContactUs from "./../components/ContactUs.vue"
import Courses from "./../components/Courses.vue"
import Events from "./../components/Events.vue"
import Library from "./../components/Library.vue"
import Partnerships from "./../components/Partnerships.vue"


const routes = [
    {
        path: '/',
        name: 'homepage',
        component: Homepage,
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUs,
    },
    {
        path: '/alumni',
        name: 'alumni',
        component: Alumni,
    },
    {
        path: '/contactus',
        name: 'contactus',
        component: ContactUs,
    },
    {
        path: '/courses',
        name: 'courses',
        component: Courses,
    },
    {
        path: '/events',
        name: 'events',
        component: Events,
    },
    {
        path: '/library',
        name: 'library',
        component: Library,
    },
    {
        path: '/partnerships',
        name: 'partnerships',
        component: Partnerships,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
