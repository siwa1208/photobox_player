<template>
    <div id="photos">
        <b-button variant="success" v-on:click="fetchImages"> Chercher une image</b-button>
        <silent-box :gallery="gallery"></silent-box>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        methods: {
            fetchImages() {
                axios.get('https://apiphotobox.tallium.tech/event/pictures/65bcb6f364a12e8151ee3f2f72276e4c102b8066fde7142167497bc11963dc69', {
                        //token : this.$store.state.token
                    }).then(response => {
                        let Images = response.data.pictures
                        //this.$store.commit('getImages', Images)
                        Images.forEach(Image => {
                            this.gallery.push({
                                src: 'https://apiphotobox.tallium.tech' + Image.URI,
                                description: Image.id,
                                thumbnailWidth: '220px'
                            })
                        })
                    }).catch(error => {
                        console.log(error.response)
                    })
            }
        },
        data() {
            return {
                gallery: []
            }
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

