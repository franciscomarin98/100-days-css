import {createRouter, createWebHistory} from 'vue-router'
import CountryApp from "../views/CountryApp";

const routes = [
    {
        path: '/',
        name: 'Country',
        component: CountryApp
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
