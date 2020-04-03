<template>
    <div id="app">
        <b-card title="Card Title" no-body>
            <b-card-header header-tag="nav">
            <b-nav card-header tabs>
                <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
                <b-nav-item to="/" exact exact-active-class="active">Accueil</b-nav-item>
                <b-nav-item to="/Photos" exact exact-active-class="active">Photos</b-nav-item>
                <b-nav-item to="/Events" exact exact-active-class="active">Evènements</b-nav-item>
            </b-nav>
            </b-card-header>
        </b-card>
        <img alt="Vue logo" src="./assets/logo.png">
        <silent-box :gallery="gallery"></silent-box>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    
    export default {
        name: 'App',
        data() {
            return {
                gallery: [
                    {
                        src: 'https://media.gamestop.com/i/gamestop/10129627/Pokemon-Red-Version?$zoom$',
                        description: 'Pokemon red vesion.',
                        thumbnailWidth: '220px'
                    },
                    {
                        src: 'https://media.gamestop.com/i/gamestop/10129625/Pokemon-Blue-Version',
                        description: 'Pokemon blue version.',
                        thumbnailWidth: '220px'
                    },
                    {
                        src: 'https://i.pinimg.com/originals/15/4e/35/154e35be31bcc7bee8fe921a2eb1a96b.png',
                        description: 'Pokemon green version.',
                        thumbnailWidth: '220px'
                    },
                ]
            }
        },
        components: {
            HelloWorld
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
