<template>
    <div class="min-h-screen w-full bg-white overflow-hidden">
        <div class="fixed inset-0 z-50 bg-gradient-to-tr from-blue-600 to-primary flex items-center justify-center flex-col h-full w-full text-white space-y-8">
            <div class="text-white text-center text-5xl lg:text-7xl 2xl:text-8xl tracking-wider font-logo">
                Vi er <b>STAY</b><span class="font-light">MAD</span>
            </div>
            <div class="px-12 lg:pb-10 text-center text-xs lg:text-base">Vi bygger din hjemmeside, skriver dine tekster, tager dine billeder, filmer din profilvideo og designer dit logo!</div>
            <a class="contact-link bg-white text-body p-2 px-4 lg:p-4 lg:px-8" href="mailto:info@staymad.dk?subject=Jeg er nysgerrig!">Skriv til os for at høre mere</a>
        </div>
        <!-- HERO -->
        <div class="bg-gradient-to-tr from-blue-600 to-primary">
            <div class="w-full relative pt-32 hero-container">
                <div class="absolute z-30 inset-x-0 top-0">
                    <Header />
                </div>
                <div class="absolute inset-0 z-20">
                    <div class="flex items-center justify-center flex-col h-full w-full text-white space-y-8">
                        <div class="text-white text-center text-5xl lg:text-7xl 2xl:text-8xl tracking-wider font-logo">
                            Vi er <b>STAY</b><span class="font-light">MAD</span>
                        </div>
                        <div class="px-12 lg:pb-10 text-center text-xs lg:text-base">Vi bygger din hjemmeside, skriver dine tekster, tager dine billeder, filmer din profilvideo og designer dit logo!</div>
                        <n-link class="contact-link bg-white text-body p-2 px-4 lg:p-4 lg:px-8" to="/contact">Lad os tage en kop kaffe</n-link>
                    </div>
                </div>
                <div class="absolute z-0 inset-0 bg-cover" style="background-image: url('/images/hero-pattern.png')"></div>
                <div class="hero-character">
                    <img src="/images/hero-character.png" class="w-full block" />
                </div>
            </div>
        </div>
        <!-- <Header /> -->
        <div class="bg-gradient-to-b from-white to-gray-100 min-h-full">
            <div class="mt-32">
                <Nuxt />
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '~/components/Header.vue';

    export default {
        components: {
            Header
        }
    }
</script>

<style>
</style>