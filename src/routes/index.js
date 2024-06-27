import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import AvailableResources from "./../components/AvailableResources.vue"
import AboutUs from "./../components/AboutUs.vue"
import ContactUs from "./../components/ContactUs.vue"
import BookBag from "./../components/BookBag.vue"
import ServicesOffered from "./../components/ServicesOffered.vue"




const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
        path: '/bookbag',
        name: 'bookbag',
        component: BookBag,
      },
      {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUs,
      },
      {
        path: '/contactus',
        name: 'contact us',
        component: ContactUs,
      },
      {
        path: '/availableresources',
        name: 'availableresources',
        component: AvailableResources,
      },
      {
        path: '/servicesOffered',
        name: 'servicesOffered',
        component: ServicesOffered,
      },
] 
const router = createRouter({
    history: createWebHistory(),
    routes,
})
    
  
export default router