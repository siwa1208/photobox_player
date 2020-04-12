<template>
    <div id="helloworld">
        <h1 style="margin-top: 2%; text-align: center;">{{msg}}</h1>
        <img src="../assets/photobox_logo.png" width="150" height="150" style="margin-left:45%; margin-top: 2%">
        <div class="card border-secondary mb-3" style="max-width: 80%; margin-left: 10rem; margin-top: 3rem;">
            <div class="card-header"
                 style="text-align: center; background: linear-gradient(200deg, #BD5DCD,#824AA7,#604591,#3F2D86,#362472); color: white;">
                Player password !
            </div>
            <div class="card-body text-dark">
                <b-form @submit.prevent="goToPhotos">
                    <b-row class="my-5">
                        <b-col sm="4" style="margin-left : 35%;">
                            <b-input v-model="password" type="password" id="text-password"
                                     placeholder="Enter the player pass please"></b-input>
                            <label></label>
                            <div class="row justify-content-center">
                                <b-button
                                        style="background: linear-gradient(200deg, #BD5DCD,#824AA7,#604591,#3F2D86,#362472);"
                                        type="submit">Valider
                                </b-button>
                            </div>
                        </b-col>
                    </b-row>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        data() {
            return {
                password: '',
                msg: 'Welcome in the Photobox Player'
            }
        },
        methods: {
            goToPhotos() {
                axios.post('https://apiphotobox.tallium.tech/player/auth', {
                    pass: this.password
                }).then(response => {
                    this.$router.push({name: 'photos', params: {token: response.data.token}})
                }).catch(error => {
                    console.log(error.response)
                    alert("ce playerpass ne correspond pas.")
                })
            }
        },
        computed: {
            passwordCheck() {
                /*Si l'utilisateur a entré le bon password*/
                return this.$store.state.password ? true : false;
            }
        }
    }
</script>