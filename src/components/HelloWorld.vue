<template>
  <div>
      <b-col sm="4">
    <b-form-input v-model="password" placeholder="Enter your password"></b-form-input>
    <b-button @click="goToPhotos">Valider</b-button>
      </b-col>
  </div>
</template>

<script>
import AfficherPhotosVue from "../views/Photos"
  export default {
    data() {
      return {
        password: ''
      }
    },
    methods : {
        goToPhotos() {
            /*Faire la requête axios pour récupérer le token de l'event et pouvoir accéder à ses photos*/
            this.$router.push(AfficherPhotosVue)
        }
    }
  }
</script>