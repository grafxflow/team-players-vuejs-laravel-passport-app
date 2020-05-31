<template>

    <div>
        <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
            <div class="lh-100">
                <h6 class="mb-0 text-white lh-100">Sign In</h6>
            </div>
        </div>
        <div class="my-3 p-3 bg-white rounded box-shadow">
            <form @submit.prevent="login">
                <div class="form-group">
                    <div class="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <label class="col-form-label" for="email">Email</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><font-awesome-icon :icon="['fas', 'user']" /></span>
                            </div>
                            <input class="form-control" id="email" name="email" required v-model="email" type="email" placeholder="Email"/>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <label class="col-form-label" for="password">Password</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><font-awesome-icon :icon="['fas', 'key']" /></span>
                            </div>
                            <input class="form-control" id="password" name="password" required v-model="password" type="password" placeholder="Password"/>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12 col-md-6 offset-md-3">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
    export default {
        data(){
            return {
                email : '',
                password : ''
            }
        },
        methods: {
            login: function () {
                let email = this.email;
                let password = this.password;
                this.$store.dispatch('login', { email, password })
                .then(response => {
                    this.$router.push('/');
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
</script>
