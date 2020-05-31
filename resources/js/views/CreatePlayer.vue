<template>

    <div>
        <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
            <div class="lh-100">
                <h6 class="mb-0 text-white lh-100">Create Player</h6>
            </div>
        </div>
        <div class="my-3 p-3 bg-white rounded box-shadow">
            <div v-if="success" class="alert alert-success mt-3 col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                Player has been added!
            </div>
            <form @submit.prevent="submit">
                <div class="form-group">
                    <div class="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <label class="col-form-label" for="first_name">First Name <div v-if="errors && errors.first_name" class="text-danger">{{ errors.first_name[0] }}</div></label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><font-awesome-icon :icon="['fas', 'user']" /></span>
                            </div>
                            <input id="first_name" name="first_name" type="text" class="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" v-model="fields.first_name">
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
                            <input id="last_name" name="last_name" type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1" v-model="fields.last_name" >
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <label class="col-form-label" for="team_id">Team <div v-if="errors && errors.team_id" class="text-danger">{{ errors.team_id[0] }}</div></label>
                        <select class="form-control" name="team_id" id="team_id" v-model="fields.team_id">
                            <option value="">Please choose a Team...</option>
                            <option v-for="team in teams" v-bind:value="team.id" :key="team.id">
                                {{ team.name }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-12 col-md-6 offset-md-3">
                        <button type="submit" class="btn btn-primary">Create Player</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
    import FormMixin from '@jsSrc/FormMixin';
    export default {
        name: 'createPlayer',
        mixins: [ FormMixin ],
        data() {
            return {
                fields: {
                    team_id: ''
                },
                teams: [],
                'action': '/api/player/create'
            }
        },
        created() {
            let uri = '/api/teams';
            axios.get(uri).then(response => {
                this.teams = response.data;
            });
        }
    }
</script>
