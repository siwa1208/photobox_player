<template>
    <div id="app">
        <silent-box :gallery="gallery"></silent-box>
        <button class="button is-success" v-on:click="amineZemel"> Chercher des images</button>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        methods: {
            amineZemel: function () {
                axios
                    .get('https://dog.ceo/api/breeds/image/random', {})
                    .then(response => (this.gallery.push({
                        src: response.data.message,
                        description: 'pinche',
                        thumbnailWidth: '220px'
                    })))
            }
        },
        data() {
            return {
                gallery: []
            }
        },
        props: {
            msg: String
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

