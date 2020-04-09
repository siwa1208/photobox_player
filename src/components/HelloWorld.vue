<template>
    <div id="helloworld">
        <h1 style="margin-top: 5rem; text-align: center;">{{msg}}</h1>
        <div class="card border-secondary mb-3" style="max-width: 80%; margin-left: 10rem; margin-top: 5rem;">
            <div class="card-header" style="text-align: center; background-color: #3d103e; color: white;"> Password
                cheeeeck !
            </div>
            <div class="card-body text-dark">
                <b-form @submit.prevent="goToPhotos">
                    <b-row class="my-5">
                        <b-col sm="4" style="margin-left : 27rem;">
                            <b-input v-model="password" type="password" id="text-password"
                                     aria-describedby="password-help-block"
                                     placeholder="Veuillez entrer votre mot de passe"></b-input>
                            <label></label>
                            <b-button style="background-color: #3d103e" type="submit">Valider</b-button>
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