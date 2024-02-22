import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import ContactView from "@/views/ContactView.vue";
import CardView from "@/views/CardView.vue";
import TicketsView from "@/views/TicketView.vue";
import SuccesView from "@/views/SuccesView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:     [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/card/:id', 
            name: 'card',
            component: CardView,
          },
        {
            path: '/contact', 
            name: 'contact',
            component: ContactView,
          },
        {
            path: '/ticket/:id', 
            name: 'ticket',
            component: TicketsView,
          },{
            path: '/success', 
            name: 'success',
            component: SuccesView,
          },
        
    ]
})
export default router