<template>
  <div>
    <h1 style="margin-top: 5rem; text-align: center;">{{msg}}</h1>
    <div class="card border-success mb-3" style="max-width: 80%; margin-left: 10rem; margin-top: 5rem;">
            <div class="card-header bg-success" style="text-align: center"> Password cheeeeck !</div>
            <div class="card-body text-dark">
                <b-form @submit.prevent="goToPhotos">
                    <b-row class="my-5">
                        <b-col sm="4" style="margin-left : 27rem;">
                            <b-input v-model="password" type="password" id="text-password" aria-describedby="password-help-block" placeholder="Veuillez entrer votre mot de passe"></b-input>
                            <label></label>
                            <b-button variant="success" type="submit">Valider</b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios"
import AfficherPhotosVue from "../views/Photos"
  export default {
    data() {
      return {
        password: '',
        msg : 'Welcome in the Photobox Player'
      }
    },
    methods : {
        goToPhotos() {
            /*Faire la requête axios pour récupérer le token de l'event et pouvoir accéder à ses photos*/
            axios.post('https://apiphotobox.tallium.tech/player/auth',{
              pass : this.password
            }).then(response => {
              this.$store.commit('getToken', response.data)
              this.$router.push(AfficherPhotosVue)
            }).catch(error => {
              console.log(error.response)
            })
        }
    },
    computed : {
      passwordCheck() {
      /*Si l'utilisateur a entré le bon password*/
      return this.$store.state.password ? true : false;
    }
    }
  }
</script>