<template>

    <div>
        <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
            <div class="lh-100">
                <h6 class="mb-0 text-white lh-100">Edit Player</h6>
            </div>
        </div>
        <div class="my-3 p-3 bg-white rounded box-shadow">
            <div v-if="success" class="alert alert-success mt-3 col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                Player has been updated!
            </div>
            <form @submit.prevent="updatePlayer">
                <div class="form-group">
                    <div class="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <label class="col-form-label" for="first_name">First Name <div v-if="errors && errors.first_name" class="text-danger">{{ errors.first_name[0] }}</div></label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><font-awesome-icon :icon="['fas', 'user']" /></span>
                            </div>
                            <input id="first_name" name="first_name" type="text" class="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" v-model="player.first_name">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <label class="col-form-label" for="last_name">Last Name <div v-if="errors && errors.last_name" class="text-danger">{{ errors.last_name[0] }}</div></label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><font-awesome-icon :icon="['fas', 'user']" /></span>
                            </div>
                            <input id="last_name" name="last_name" type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1" v-model="player.last_name" >
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <label class="col-form-label" for="team_id">Team <div v-if="errors && errors.team_id" class="text-danger">{{ errors.team_id[0] }}</div></label>
                        <select class="form-control" name="team_id" id="team_id" v-model="player.team_id">
                            <option v-for="team in teams" v-bind:value="team.id" :key="team.id">
                                {{ team.name }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-12 col-md-6 offset-md-3">
                        <button type="submit" class="btn btn-primary">Edit Player</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'editPlayer',
        data() {
            return {
                player: {},
                errors: {},
                success: false,
                loaded: true,
                teams: []
            }
        },
        created() {
            let playerUri = `/api/player/edit/${this.$route.params.id}`;
            axios.get(playerUri).then((response) => {
                this.player = response.data;
            });

            let teamsUri = '/api/teams';
            axios.get(teamsUri).then(response => {
                this.teams = response.data;
            });
        },
        methods: {
            updatePlayer() {
                if (this.loaded) {
                    this.loaded = false;
                    this.success = false;
                    this.errors = {};

                    let uri = `/api/player/update/${this.$route.params.id}`;
                    axios.post(uri, this.player).then(response => {
                        this.loaded = true;
                        this.success = true;
                    }).catch(error => {
                        this.loaded = true;
                        if (error.response.status === 422) {
                            this.errors = error.response.data.errors || {};
                        }
                    });
                }
            }
        }
    }
</script>
