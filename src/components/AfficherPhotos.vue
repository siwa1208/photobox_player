<template style="background: linear-gradient(200deg, #BD5DCD,#824AA7,#604591,#3F2D86,#362472);">
    <div id="photos">
        <div style="text-align: center;">
            <silent-box :gallery="gallery" style="margin-bottom : 2%"></silent-box>
        </div>
        <h5 class="mt-0 mb-1"></h5>
        <b-card title="List of comments"></b-card>
        <b-media class="my-4" v-for="comment in this.comments" v-bind:key="comment" >
            <template v-slot:aside>
                <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>
            </template>
            <p class="mb-0">
                Pseudo : {{comment.pseudo}}
            </p>
            <p class="mb-0">
                Commentaire : {{comment.comment}}
            </p>
            <p class="mb-0">
                Date : {{comment.date}}
            </p>
        </b-media>
        
    </div>
</template>

<script>
    import axios from "axios"

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
                        //alert("Cet évènement ne possède aucune photos pour l'instant.")
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
                        console.log(error.response)
                    //alert("Aucun commentaire pour cet évènement.")
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
                            console.log(error.response)
                        //alert("Une erreur s'est produite lors de l'affichage.")
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
