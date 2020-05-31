<template>

    <div>
        <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
            <div class="lh-100">
                <h6 class="mb-0 text-white lh-100">Team List</h6>
            </div>
        </div>
        <div class="my-3 p-3 bg-white rounded box-shadow">
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Team Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="team in teams" :key="team.id">
                        <td><strong>{{ team.id }}</strong></td>
                        <td><strong>{{ team.name }}</strong></td>
                        <td>
                            <router-link :to="{name: 'showTeamPlayers', params: { id: team.id }}" class="btn btn-primary">Show Teams Players</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'teams',
        data() {
            return {
                teams: []
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
