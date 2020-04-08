<template>
    <div id="app">    
            <b-navbar toggleable="lg" type="light">
                <b-navbar-brand to="/">Photobox</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/Photos">Photos</b-nav-item>
                    <b-nav-item to="/Events">Events</b-nav-item>                   
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        <router-view/>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .variant {
        color : #400c61f7;
    }
</style>
