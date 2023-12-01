<template>
    <div class="header">
        <header>
            <div class="header_div" id="brand_logo">
                <RouterLink to="/" style="background-color: white;">
                    <img src="..\assets\logo-easy-connect_SBS.png" alt="" id="logo">
                </RouterLink> 
            </div>
            <div class="header_div" id="buttons">

            <div id="profile">
                <img src="..\assets\senior.png" alt="">
                <div class="text_to_hide">
                    <b>Cordelia Carpenter</b>
                </div>

            </div>
            <div id="settings">
                <img src="..\assets\config.png" alt="">
                <div class="text_to_hide">
                    <b>SETTINGS</b>
                </div>

            </div>
            <div id="dot">
                <img src="..\assets\dot3.png" alt="">
            </div>
            <div id="logout">
                <img src="..\assets\1419365876_on-off.png" alt="">
                <div class="text_to_hide">
                    <b>LOGOUT</b>
                </div>

            </div>
        </div>
    </header>
    </div>
</template>
<style>


/* Todo el header */

header {
    margin: 0;
    width: 100vw;
    height: 100%;
    border-bottom-style: solid;
    border-width: 1px;
    border-color: rgb(209, 209, 209);
    display: flex;
    flex-direction: row;
    justify-self: flex-start;
    min-width: 805px;
}

#logo{
    height: 100%;
}
@media(max-width:620px) {
    header {
        min-width: 1105px;
    }
}

div {
    display: flex;
    flex-direction: row;
}

.header_div {
    height: 10vh;
    width: 100vh;
}

#dot img {
    height: 20px;
}

#buttons.header_div {
    justify-content: right;
}

#profile {
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#profile img {
    height: 80%;
}

/*Header movil*/
@media (max-width: 750px) {

    .text_to_hide,
    #dot {
        visibility: collapse;
        display: none;
    }
}

#settings,
#logout,
#dot {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 2%;
    margin-right: 2%;
}

#settings img,
#logout img {
    height: 40px;
    width: 40px;
}

/*Header movil*/
@media (max-width: 750px) {

    #settings img,
    #logout img {
        height: 30px;
        width: 30px;
    }
}

/*Header movil pequeño*/
@media (max-width: 620px) {

    #settings img,
    #logout img {
        height: 50px;
        width: 50px;
    }
}

#logout img {
    filter: invert(100%) sepia() hue-rotate(310deg) saturate(10000);
}

#logout {
    color: red;
}


/* Full Body */
#full-body {
    display: grid;
}

@media(max-width:620px) {
    #full-body {
        width: 1400px;
    }
}




</style>