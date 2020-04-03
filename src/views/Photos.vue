<template>
    <div id="Photos">
        <silent-box :gallery="gallery"></silent-box>
    </div>
</template>

<script>

    export default {
        name: 'Photos',
        data() {
            return {
                gallery: [
                    {
                        src: 'https://media.gamestop.com/i/gamestop/10129627/Pokemon-Red-Version?$zoom$',
                        description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
                        alt: 'Blue starry night photo.',
                        thumbnailWidth: '220px'
                    },
                    {
                        src: 'https://media.gamestop.com/i/gamestop/10129625/Pokemon-Blue-Version',
                        description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
                        alt: 'Landscape photo of mountain with fog.',
                        thumbnailWidth: '220px'
                    },
                    {
                        src: 'https://i.pinimg.com/originals/15/4e/35/154e35be31bcc7bee8fe921a2eb1a96b.png',
                        description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
                        alt: 'Low angle photo of pine trees.',
                        thumbnailWidth: '220px'
                    },
                ]
            }
        },
        components: {

        }
    }
</script>