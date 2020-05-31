<template>

    <div>
        <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
            <div class="lh-100">
                <h6 class="mb-0 text-white lh-100">Team Players List - {{ players.name }}</h6>
            </div>
        </div>
        <div class="my-3 p-3 bg-white rounded box-shadow">
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Player Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="player in players.players" :key="player.id">
                        <td><strong>{{ player.id }}</strong></td>
                        <td><strong>{{ player.first_name }} {{ player.last_name }}</strong></td>
                        <td>
                            <router-link :to="{name: 'editPlayer', params: { id: player.id }}" class="btn btn-primary">Edit Player</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'showTeamPlayers',
        data() {
            return {
                players: []
            }
        },
        created() {
            let uri = `/api/team-players/${this.$route.params.id}`;
            axios.get(uri).then(response => {
                this.players = response.data;
            });
        }
    }
</script>
