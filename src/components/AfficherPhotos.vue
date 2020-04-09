<template>
    <div id="photos">
        <silent-box :gallery="gallery"></silent-box>
        <b-list-group v-for="comment in this.comments" :key="comment" role="tablist">
                <b-list-group-item style="background:#3d103e; color:white;" role="tab">Pseudo : {{comment.pseudo}}</b-list-group-item>
                <b-list-group-item style="background:#3d103e; color:white;" role="tab">Comment : {{comment.comment}}</b-list-group-item>
                <b-list-group-item style="background:#3d103e; color:white;" role="tab">Date : {{comment.date}}</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    import axios from "axios";
     let myOuterText = 55
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
                        console.log(error.response)
                        alert("Cet évènement ne possède aucune photos pour l'instant.")
                })
            },

            fetchCommentaires(){
                axios.get('https://apiphotobox.tallium.tech/player/event/comment/' + this.$route.params.token, {})
                    .then(response => {
                        let Comments = response.data
                        Comments.forEach(Comment => {
                            this.comments.push({
                                pseudo : Comment.pseudo,
                                comment : Comment.comment,
                                date : Comment.date
                            })
                        })
                    }).catch(error => {
                        console.log(error.response)
                        alert("Cet évènement ne possède aucun commentaire pour l'instant.")
                })
            },

            /*todo: function(){           
                this.intervalid1 = setInterval(function(){
                    this.fetchCommentaires = ((Math.random() * 100).toFixed(2))+'%';
                    console.log (this.fetchCommentaires);
                }.bind(this), 5000);
            }*/
            startInterval() {
                   setInterval(() => {
                        this.fetchCommentaires = myOuterText + 1
                   }, 5000);
                }
        },
        data() {
            return {
                gallery: [],
                comments: [],
                intervalid1: 0
            }
        }, mounted() {
            this.fetchImages();
            this.fetchCommentaires()
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

