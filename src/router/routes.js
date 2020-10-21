// views
import Home from '@/views/Home.vue'
import ReservedPage from '@/views/ReservedPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/ReservedPage',
        name: 'ReservedPage',
        component: ReservedPage
    }
];

export default routes;