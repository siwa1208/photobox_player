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
                axios.get('https://apiphotobox.tallium.tech/event/pictures/'+ this.$store.state.token, {})
                .then(response => {
                        let Images = response.data.pictures
                        console.log(this.$store.commit(response.data.pictures))
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
                gallery: [],
                token: this.$store.state.token
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

