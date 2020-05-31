<template>

    <div>
        <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
            <div class="lh-100">
                <h6 class="mb-0 text-white lh-100">Create Team</h6>
            </div>
        </div>
        <div class="my-3 p-3 bg-white rounded box-shadow">
            <div v-if="success" class="alert alert-success mt-3 col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                Team has been added!
            </div>
            <form @submit.prevent="submit">
                <div class="form-group">
                    <div class="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <label class="col-form-label" for="name">Name <div v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</div></label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><font-awesome-icon :icon="['fas', 'users']" /></span>
                            </div>
                            <input id="name" name="name" type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" v-model="fields.name">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12 col-md-6 offset-md-3">
                        <button type="submit" class="btn btn-primary">Create Team</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
    import FormMixin from '@jsSrc/FormMixin';
    export default {
        name: 'createTeam',
        mixins: [ FormMixin ],
        data() {
            return {
                'action': '/api/team/create'
            }
        }
    }
</script>
