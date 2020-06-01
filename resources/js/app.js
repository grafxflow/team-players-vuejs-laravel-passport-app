require('./bootstrap');

window.Vue = require('vue');

/* Added dynamic routes */
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';
import router from './router'
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
