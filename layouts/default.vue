<template>
    <div class="min-h-screen w-full bg-white">
        <!-- HERO -->
        <div class="bg-gradient-to-tr from-blue-600 to-primary">
            <div class="w-full relative pt-48 overflow-hidden">
                <div class="absolute z-30 inset-x-0 top-0">
                    <Header />
                </div>
                <div class="absolute z-0 inset-0 bg-cover" style="background-image: url('/images/hero-pattern.png')"></div>
                <div class="hero-character">
                    <img src="/images/header-bottom.png" class="w-full block" />
                </div>
            </div>
        </div>
        <!-- <Header /> -->
        <div class="bg-gradient-to-b from-white to-gray-100 min-h-screen">
            <div class="container mx-auto p-4 md:p-0 mt-32">
                <Nuxt />
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '~/components/Header.vue';

    export default {
        name: 'default',
        components: {
            Header
        }
    }
</script>

<style>
</style>