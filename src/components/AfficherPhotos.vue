<template>
    <div id="photos">
        <b-button block variant="outline-success" v-on:click="fetchImage"> Chercher une image</b-button>
        <silent-box :gallery="gallery"></silent-box>
        <!--<button class="button is-success" v-on:click="fetchImages"> Chercher des images</button>-->
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        methods: {
            fetchImage: function () {
                axios
                    .get('https://apiphotobox.tallium.tech/assets/event/e0c003e624a09554e9a7578d19b5d7cf35c391a6100281347b31edeeaf91d697/bcd2303e692330240ccb179de3526935', {})
                    .then(response => (this.gallery.push({
                        src:'',
                        description: response.name,
                        thumbnailWidth: '220px'
                    })))
            },
           /* fetchImages: function () {
                axios
                    .get('https://dog.ceo/api/breeds/image/random/5', {})
                    .then(response => {
                        let Images = response.data.message;
                        Images.forEach(Image => {
                            this.gallery.push({
                                src: Image,
                                description: 'pinche',
                                thumbnailWidth: '220px'
                            })
                        })
                    })
            }*/
        },
        data() {
            return {
                gallery: []
            }
        },
        mounted() {
            
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

