<template>
    <div id="app">    
            <b-navbar style="background-color: #3d103e; margin-bottom: 2%;">
                <b-navbar-nav>
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/Photos">Photos</b-nav-item>
                    <b-nav-item to="/Events">Events</b-nav-item>              
                </b-navbar-nav>
            </b-navbar>
        <router-view/>
    </div>
</template>