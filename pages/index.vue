<template>
    <div>
        <div class="container mx-auto px-4 sm:px-0">
            <div class="text-center">
                <h1>Vi kan det meste</h1>
                <div class="border-t-4 border-primary w-12 mx-auto mt-8"></div>
            </div>
            <div class="my-24 flex justify-center w-full">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 inline-grid">
                    <n-link to="/services" class="bg-white shadow-xl rounded-lg p-6 py-10 border border-gray-100 w-full md:w-96 transition-all transform hover:scale-105 hover:-rotate-2 hover:shadow-2xl duration-300 flex items-center space-x-4 md:items-start md:space-x-0 md:flex-col">
                        <div class="bg-gray-50 p-3 rounded-full w-24 md:w-20 mb-8"><img src="/icons/Camera.svg" class="w-full" /></div>
                        <div class="flex-1">
                            <h5 class="mb-4">Fotografi</h5>
                            <p class="leading-6">Vi hjælper med alt fra profilfotos til produktbilleder. Selv live-koncert billeder har vi stor erfaring med!</p>
                        </div>
                    </n-link>
                    <n-link to="/services" class="bg-white shadow-xl rounded-lg p-6 py-10 border border-gray-100 w-full md:w-96 transition-all transform hover:scale-105 hover:rotate-2 hover:shadow-2xl duration-300 flex items-center space-x-4 md:items-start md:space-x-0 md:flex-col">
                        <div class="bg-gray-50 p-3 rounded-full w-24 md:w-20 mb-8"><img src="/icons/Edit-1.svg" class="w-full" /></div>
                        <div class="flex-1">
                            <h5 class="mb-4">Tekstforfatning</h5>
                            <p class="leading-6">Alle hjemmesider har brug for de rigtige tekster, som fanger de besøgende. Vores journalistudlærte tekstforfatter har mange års erfaring i søgevenlige tekster.</p>
                        </div>
                    </n-link>
                    <n-link to="/services" class="bg-white shadow-xl rounded-lg p-6 py-10 border border-gray-100 w-full md:w-96 transition-all transform hover:scale-105 hover:-rotate-2 hover:shadow-2xl duration-300 flex items-center space-x-4 md:items-start md:space-x-0 md:flex-col">
                        <div class="bg-gray-50 p-3 rounded-full w-24 md:w-20 mb-8"><img src="/icons/Programming.svg" class="w-full" /></div>
                        <div class="flex-1">
                            <h5 class="mb-4">Hjemmesideudvikling</h5>
                            <p class="leading-6">Wordpress er vores ven, og kan også blive din! Vi bygger hjemmesiderne op fra bunden ved brug af Wordpress, men vi laver stadig det design der passer til jeres behov.</p>
                        </div>
                    </n-link>
                    <n-link to="/services" class="bg-white shadow-xl rounded-lg p-6 py-10 border border-gray-100 w-full md:w-96 transition-all transform hover:scale-105 hover:rotate-2 hover:shadow-2xl duration-300 flex items-center space-x-4 md:items-start md:space-x-0 md:flex-col">
                        <div class="bg-gray-50 p-3 rounded-full w-24 md:w-20 mb-8"><img src="/icons/Video.svg" class="w-full" /></div>
                        <div class="flex-1">
                            <h5 class="mb-4">Video</h5>
                            <p class="leading-6">Har du brug for en profilvideo af din virksomhed, eller er du en kunstner som drømmer om den fede musikvideo, så kan vi det hele!</p>
                        </div>
                    </n-link>
                    <n-link to="/services" class="bg-white shadow-xl rounded-lg p-6 py-10 border border-gray-100 w-full md:w-96 transition-all transform hover:scale-105 hover:-rotate-2 hover:shadow-2xl duration-300 flex items-center space-x-4 md:items-start md:space-x-0 md:flex-col">
                        <div class="bg-gray-50 p-3 rounded-full w-24 md:w-20 mb-8"><img src="/icons/Star.svg" class="w-full" /></div>
                        <div class="flex-1">
                            <h5 class="mb-4">Logo</h5>
                            <p class="leading-6">Er der noget vi elsker, så er det at hjælpe med at gøre jeres virksomhed til jeres, og noget af det vigtigste her, er et logo som man kan genkende.</p>
                        </div>
                    </n-link>
                    <n-link to="/services" class="bg-white shadow-xl rounded-lg p-6 py-10 border border-gray-100 w-full md:w-96 transition-all transform hover:scale-105 hover:rotate-2 hover:shadow-2xl duration-300 flex items-center space-x-4 md:items-start md:space-x-0 md:flex-col">
                        <div class="bg-gray-50 p-3 rounded-full w-24 md:w-20 mb-8"><img src="/icons/Check.svg" class="w-full" /></div>
                        <div class="flex-1">
                            <h5 class="mb-4">Projektstyring</h5>
                            <p class="leading-6">Der findes mange muligheder for at lave projektstyring i dag, men vi har forelsket os i ClickUp<sup>TM</sup>, og det ved vi at i også kommer til!</p>
                        </div>
                    </n-link>
                </div>
            </div>
        </div>
        <div class="bg-gradient-to-tr from-primary to-blue-600 p-12 w-full">
            <div class="container mx-auto text-white">
                Virker det?
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'frontpage',
    }
</script>

<style>
</style>
