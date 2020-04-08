<template>
    <div class="hello">
        <h1>components Home</h1>
        <div v-show="step === 1">
        <div v-if="selectedEvent" class="infoEvents">
            <p>Identifiant de la série : {{ selectedEvent.id }}</p><p> Ville : {{ selectedEvent.city }}</p><p> Nombre de photos : {{ selectedEvent.nb_pictures }}</p><p> Date de dernière mise à jour : {{ selectedEvent.updated_at }}</p>
        </div>

        <b-button variant="primary" :disabled="!selectedEvent">Choisir cet évènement !</b-button>
    </div>
        <div v-show="step === 2">
            <div>
                <b-form-input type="text" v-model="username" placeholder="Votre pseudo"></b-form-input>
            </div>
            <b-button variant="primary" :disabled="!username">Go to the event !</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data(){
            return{
                selectedEvent:null,
                username:'',
                step:1
            }
        }
        
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
