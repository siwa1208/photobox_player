<template>
    <div id="Photos">
        <AfficherPhotos/>
    </div>
</template>

<script>
    import AfficherPhotos from '@/components/AfficherPhotos.vue'

    export default {
        name: 'home',
        components: {
            AfficherPhotos
        },
        methods: {}
    }
</script>