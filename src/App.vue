<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <silent-box :gallery="gallery"></silent-box>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
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
            HelloWorld
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
