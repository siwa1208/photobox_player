<template>
    <div id="app">    
            <b-navbar style="background: linear-gradient(200deg, #BD5DCD,#824AA7,#604591,#3F2D86,#362472); margin-bottom: 2%;">
                <a class="navbar-brand" href="/">
                        <img src="./assets/photobox_logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
                        Photobox
                    </a>
                <b-navbar-nav class="justify-content-end">
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/Photos">Photos</b-nav-item>            
                </b-navbar-nav>
            </b-navbar>
        <router-view/>
    </div>
</template>