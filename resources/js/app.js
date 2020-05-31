require('./bootstrap');

window.Vue = require('vue');

/* Added dynamic routes */
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';
import store from './store';

Vue.use(VueRouter, VueAxios, Axios);

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

import App from './views/App';

import { library }  from '@fortawesome/fontawesome-svg-core';

// Individual Icons
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faUsers} from '@fortawesome/free-solid-svg-icons';
import { faKey} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add( faUser, faUsers, faKey );
Vue.component('font-awesome-icon', FontAwesomeIcon);

const Login = () => import(/* webpackChunkName: "app/Login" */ './views/Login');
const Teams = () => import(/* webpackChunkName: "app/Teams" */ './views/Teams');
const ShowTeamPlayers = () => import(/* webpackChunkName: "app/ShowTeam" */ './views/showTeamPlayers');
const CreateTeam = () => import(/* webpackChunkName: "app/CreateTeam" */ './views/CreateTeam');
const CreatePlayer = () => import(/* webpackChunkName: "app/CreatePlayer" */ './views/CreatePlayer');
const EditPlayer = () => import(/* webpackChunkName: "app/EditPlayer" */ './views/EditPlayer');

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
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
        }
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next();
            return;
        }
        next('/login');
    } else {
        next();
    }
});

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router,
    store
});
