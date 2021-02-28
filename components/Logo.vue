<template>
    <div class="group relative h-8">
        <div class="absolute top-0 left-0 h-8 duration-500 transition-all opacity-0 group-hover:opacity-100">
            <img src="/images/logo-white.png" class="h-8 max-w-screen-sm" />
        </div>
        <div class="absolute top-0 left-0 h-8 duration-500 transition-all">
            <img src="/images/logo.png" class="h-8 max-w-screen-sm" />
        </div>
        <!-- <svg class="absolute top-0 left-0 h-7 duration-500 transition-all opacity-100 group-hover:opacity-0" :class="color" viewBox="0 0 1000 1000" fill="currentColor">
            <path d="M897.25,260.2V761.6a48.43,48.43,0,0,1-26.79,43.33l-348.8,174.4a48.46,48.46,0,0,1-43.31,0l-348.8-174.4a48.43,48.43,0,0,1-26.79-43.33V461.24a48.45,48.45,0,0,1,96.89,0V731.66l126,63v-251L500,630.8l174.4-87.2v251l126-63V334.27l-301.74,132L129.55,281.73c-35.73-17.85-35.73-68.81,0-86.66l348.8-174.4a48.46,48.46,0,0,1,43.31,0L652.75,86.21a48.44,48.44,0,1,1-43.34,86.64L500,118.16,259.52,238.4,501.38,359.32l328-143.5C861.4,201.82,897.25,225.27,897.25,260.2Z" />
        </svg> -->
    </div>
</template>

<script>
    export default {
        name: 'Logo',
        props: {
            color: {
                type: String,
                default: 'text-primary',
            }
        }
    }
</script>