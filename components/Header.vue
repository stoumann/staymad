<template>
    <div class="container mx-auto mt-8 px-4 sm:px-0">
        <div class="flex items-center justify-between">
            <div>
                <n-link to="/"><Logo color="text-white" /></n-link>
            </div>
            <div>
                <ul class="list-none flex items-center p-0 m-0 space-x-4">
                    <li><n-link class="link" to="/">Hjem</n-link></li>
                    <li><n-link class="link" to="/services">Ydelser</n-link></li>
                    <li><n-link class="link" to="/about">Om os</n-link></li>
                    <li><n-link class="contact-link bg-secondary text-white p-2 px-4" to="/contact">Skal vi tales ved?</n-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from '~/components/Logo.vue';

    export default {
        components: {
            Logo
        }
    }
</script>

<style>

</style>