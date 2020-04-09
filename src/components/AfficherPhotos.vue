<template>
    <div id="photos">
        <silent-box :gallery="gallery"></silent-box>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        methods: {
            fetchImages() {
                axios.get('https://apiphotobox.tallium.tech/event/pictures/' + this.$route.params.token, {})
                    .then(response => {
                        let Images = response.data.pictures
                        Images.forEach(Image => {
                            this.gallery.push({
                                src: 'https://apiphotobox.tallium.tech' + Image.URI,
                                description: Image.id,
                                thumbnailWidth: '220px'
                            })
                        })
                    }).catch(error => {
                    alert(error)
                })
            }
        },
        data() {
            return {
                gallery: []
            }
        }, mounted() {
            this.fetchImages();
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

