<template>
    <div class="container mx-auto mt-8 px-4 sm:px-0">
        <div class="flex items-center justify-between px-8">
            <div>
                <n-link to="/"><Logo color="text-white" /></n-link>
            </div>
            <div class="relative">
                <button class="md:hidden focus:outline-none" @click="menuState = !menuState">
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div class="inset-x-0 top-20 fixed md:static px-4 md:px-0" v-if="isMenuOpen">
                    <ul class="list-none flex flex-col md:flex-row md:items-center p-4 md:p-0 m-0 space-y-4 md:space-y-0 md:space-x-4 bg-secondary md:bg-transparent w-full md:w-auto rounded-lg">
                        <li><n-link @click="menuState = false" class="link" to="/">Hjem</n-link></li>
                        <li><n-link @click="menuState = false" class="link" to="/services">Ydelser</n-link></li>
                        <li><n-link @click="menuState = false" class="link" to="/about">Om os</n-link></li>
                        <li><n-link @click="menuState = false" class="contact-link bg-white md:bg-secondary text-body md:text-white p-2 px-4 w-auto" to="/contact">Skal vi tales ved?</n-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from '~/components/Logo.vue';

    export default {
        components: {
            Logo
        },
        data () {
            return {
                menuState: false,
                window: {
                    width: 0,
                    height: 0,
                }
            }
        },
        created() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            },
        },
        computed: {
            isMenuOpen () {
                if (this.window.width > 768) {
                    return true;
                } else {
                    return this.menuState;
                }
            }
        },
    }
</script>

<style>

</style>