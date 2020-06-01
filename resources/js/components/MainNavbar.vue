<template>
    <div>
        <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
            <router-link :to="{ name: 'teams' }" class="navbar-brand">Navbar</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <span v-if="isLoggedIn">
                            <router-link :to="{ name: 'teams' }" class="nav-link">Teams</router-link>
                        </span>
                    </li>
                    <li class="nav-item">
                        <span v-if="isLoggedIn">
                            <router-link :to="{ name: 'createTeam' }" class="nav-link">Create Team</router-link>
                        </span>
                    </li>
                    <li class="nav-item">
                        <span v-if="isLoggedIn">
                            <router-link :to="{ name: 'createPlayer' }" class="nav-link">Create Player</router-link>
                        </span>
                    </li>
                    <li class="nav-item">
                        <span v-if="isLoggedIn"><a @click="logout" class="nav-link">Logout</a></span>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'MainNavBar',
        methods: {
            logout: function () {
                this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push({ name: 'login' });
                })
            }
        },
        created: function () {
            this.$http.interceptors.response.use(undefined, function (err) {
                return new Promise(function (resolve, reject) {
                    if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
                        this.$store.dispatch(logout)
                    }
                    throw err;
                });
            });
        },
        computed : {
            isLoggedIn : function() {
                return this.$store.getters.isLoggedIn
            }
        },
    }
</script>
