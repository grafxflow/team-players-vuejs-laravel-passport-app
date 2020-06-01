import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Navigation Bars
import MainNavbar from './components/MainNavbar';
Vue.component('main-navbar', MainNavbar);

// Pages
const Default = () => import(/* webpackChunkName: "app/Login" */ './views/Default');
const Login = () => import(/* webpackChunkName: "app/Login" */ './views/Login');
const Teams = () => import(/* webpackChunkName: "app/Teams" */ './views/Teams');
const ShowTeamPlayers = () => import(/* webpackChunkName: "app/ShowTeam" */ './views/showTeamPlayers');
const CreateTeam = () => import(/* webpackChunkName: "app/CreateTeam" */ './views/CreateTeam');
const CreatePlayer = () => import(/* webpackChunkName: "app/CreatePlayer" */ './views/CreatePlayer');
const EditPlayer = () => import(/* webpackChunkName: "app/EditPlayer" */ './views/EditPlayer');
const NotFound = () => import(/* webpackChunkName: "app/EditPlayer" */ './views/NotFound');

// Routes
const router = new VueRouter({
    mode: 'hash',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'default',
            component: Default
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/teams',
            name: 'teams',
            component: Teams,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/show-team-players/:id',
            name: 'showTeamPlayers',
            component: ShowTeamPlayers,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/create-team',
            name: 'createTeam',
            component: CreateTeam,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/create-player',
            name: 'createPlayer',
            component: CreatePlayer,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/edit-player/:id',
            name: 'editPlayer',
            component: EditPlayer,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/404',
            name: '404',
            component: NotFound,
        },
        {
            path: '*',
            redirect: '/404',
        },
    ]
});

export default router;
