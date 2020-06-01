<template>

    <div>
        <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
            <div class="lh-100">
                <h6 class="mb-0 text-white lh-100">Not Found</h6>
            </div>
        </div>
        <div class="my-3 p-3 bg-white rounded box-shadow">
            <p>Whoops! Looks like the page you requested cannot be found.</p>

            <p><router-link :to="{ name: 'teams' }">Go back to the home page.</router-link></p>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Default'
    }
</script>
