<template>
    <div id="photos">
        <silent-box :gallery="gallery"></silent-box>
        <li class="list-group-item" v-for="comment in this.comments" v-bind:key="comment">
            {{comment.pseudo}} {{comment.date}} {{comment.comment}}
        </li>
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
            },
            getAllComments() {
                axios.get('https://apiphotobox.tallium.tech/player/event/comment/' + this.$route.params.token, {})
                    .then(response => {
                        let Comments = response.data
                        Comments.forEach(Comment => {
                            this.comments.push({
                                comment: Comment.comment,
                                pseudo: Comment.pseudo,
                                date: Comment.date
                            })
                        })
                    }).catch(error => {
                    alert(error)
                })
            },
            startInterval() {
                setInterval(() => {
                    axios.get('https://apiphotobox.tallium.tech/player/event/comment/' + this.$route.params.token, {})
                        .then(response => {
                            let Comments = response.data;
                            if (this.comments.length !== Comments.length) {
                                let counter = 0;
                                for (let i = 0; i < this.comments.length; i++) {
                                    counter++;
                                }
                                for (let j = counter; j < Comments.length; j++) {
                                    let Array = (Object.values(Comments[j]));
                                    this.comments.push({
                                        comment: Array[1],
                                        pseudo: Array[0],
                                        date: Array[2]
                                    })
                                }
                            }
                        }).catch(error => {
                        alert(error)
                    })
                }, 10000);
            }
        },
        data() {
            return {
                gallery: [],
                comments: [],
            }
        }, mounted() {
            this.fetchImages();
            this.getAllComments();
        }, created() {
            this.startInterval();
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

