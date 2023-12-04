<template>
    <div class="slicers" id="alerts-and-messaging">
            <div class="slicer-alert-content" id="header-alert">
                <img src="..\assets\warnings-off2.png" alt="">
                <span>ALERTS AND MESSAGING</span>
            </div>

            <!-- Body-Alerts and messaging -->

            <div class="slicer-alert-content" id="alert-body">
                <div class="alerts-body" id="alerts-body-header">
                    <div class="body-header" id="checkbox-space">
                        <input type="checkbox">
                    </div>

                    <div class="body-header" id="new-message">
                        <img src="..\assets\Rectangle 2.png" alt="">
                        <span>New Message</span>
                    </div>

                    <div class="body-header" id="buttons">
                        <button class="button-header">Inbox</button>
                        <img src="..\assets\Ellipse 1.png" alt="">
                        <button class="button-header">Sent</button>
                    </div>

                    <div class="body-header" id="search-bar">
                        <input type="search" placeholder="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div class="alerts-body" id="messages">

                    <div class="message" @click="activeUser = Activation.JOHN" :class="{active: activeUser === Activation.JOHN}">
                        <input type="checkbox" class="message-content" id="checkbox-message">
                        <img src="..\assets\Ellipse 1.png" alt="" class="notification-not-opened" :class="{headerOpen: activeUser === Activation.JOHN}">
                        <span class="message-content" id="name">John Snow</span>
                        <span class="message-content" id="subject">Hi Friend!!</span>
                        <span class="message-content" id="date">12 April 2014</span>
                        <Transition>
                            <span class="flecha-desplegable" :class="{desplegada: activeUser === Activation.JOHN}">&#10095;</span>
                        </Transition>
                    </div>


                    <div class="content" :class="{displayed: activeUser === Activation.JOHN}">
                        <h3>Hi Friend!!!</h3>
                        <span>Lorem ipsum dolor sit amet dolorem proident utilitatis magnus agris. Abutebatur architecto
                            propter ut materia. Quam quo aliquip, oficii voluptatem. Qui pariatur officii eos. <br>Lorem
                            ipsum dolor sit amet com tenetur animi. Et laboris aut apexerat fugiat. Ipsa amet quoddam
                            colebatu proper. Qui tempore et magna sibi. Id ipsum deinde, repellat minim. Mollit odit
                            culpa qui aut. Adipsci vel delectus, pariatur propagabant. Consequatur sibi vero, voluptate
                            consequatur. Ipsa colebatur et, pariatur repellendus. Dolor ullam consequatur id.
                        </span>
                        <div class="message-body-elements" id="message-buttons">
                            <button class="message-body" id="reply">REPLY</button>
                            <button class="message-body" id="delete">DELETE</button>
                        </div>
                    </div>

                    <div class="message"  @click="activeUser = Activation.RICHARD" :class="{active: activeUser === Activation.RICHARD}">
                        <input type="checkbox" class="message-content" id="checkbox-message">
                        <img src="..\assets\Ellipse 1.png" alt="" class="notification-not-opened" :class="{headerOpen: activeUser === Activation.RICHARD}">
                        <span class="message-content" id="name">Richard Chaning</span>
                        <span class="message-content" id="subject">Memorial Clinic</span>
                        <span class="message-content" id="date">12 April 2014</span>
                        <Transition>
                            <span class="flecha-desplegable" :class="{desplegada: activeUser === Activation.RICHARD}">&#10095;</span>
                        </Transition>
                        <div class="flecha"></div>
                    </div>

                    <div class="content" :class="{displayed: activeUser === Activation.RICHARD}">
                        <h3>Hi Friend!!!</h3>
                        <span>Lorem ipsum dolor sit amet dolorem proident utilitatis magnus agris. Abutebatur architecto
                            propter ut materia. Quam quo aliquip, oficii voluptatem. Qui pariatur officii eos. <br>Lorem
                            ipsum dolor sit amet com tenetur animi. Et laboris aut apexerat fugiat. Ipsa amet quoddam
                            colebatu proper. Qui tempore et magna sibi. Id ipsum deinde, repellat minim. Mollit odit
                            culpa qui aut. Adipsci vel delectus, pariatur propagabant. Consequatur sibi vero, voluptate
                            consequatur. Ipsa colebatur et, pariatur repellendus. Dolor ullam consequatur id.
                        </span>
                        <div class="message-body-elements" id="message-buttons">
                            <button class="message-body" id="reply">REPLY</button>
                            <button class="message-body" id="delete">DELETE</button>
                        </div>
                    </div>

                    <div class="message" @click="activeUser = Activation.ELISABETH" :class="{active: activeUser === Activation.ELISABETH}">
                        <input type="checkbox" class="message-content" id="checkbox-message">
                        <img src="..\assets\Ellipse 1.png" alt="" class="notification-not-opened" :class="{headerOpen: activeUser === Activation.ELISABETH}">
                        <span class="message-content" id="name">Elisabeth Bale</span>
                        <span class="message-content" id="subject">From Conneticut</span>
                        <span class="message-content" id="date">21 June 2013</span>
                        <Transition>
                            <span class="flecha-desplegable" :class="{desplegada: activeUser === Activation.ELISABETH}">&#10095;</span>
                        </Transition>
                    </div>

                    <div class="content" :class="{displayed: activeUser === Activation.ELISABETH}">
                        <h3>Hi Friend!!!</h3>
                        <span>Lorem ipsum dolor sit amet dolorem proident utilitatis magnus agris. Abutebatur architecto
                            propter ut materia. Quam quo aliquip, oficii voluptatem. Qui pariatur officii eos. <br>Lorem
                            ipsum dolor sit amet com tenetur animi. Et laboris aut apexerat fugiat. Ipsa amet quoddam
                            colebatu proper. Qui tempore et magna sibi. Id ipsum deinde, repellat minim. Mollit odit
                            culpa qui aut. Adipsci vel delectus, pariatur propagabant. Consequatur sibi vero, voluptate
                            consequatur. Ipsa colebatur et, pariatur repellendus. Dolor ullam consequatur id.
                        </span>
                        <div class="message-body-elements" id="message-buttons">
                            <button class="message-body" id="reply">REPLY</button>
                            <button class="message-body" id="delete">DELETE</button>
                        </div>
                    </div>

                    <div class="message" @click="activeUser = Activation.SARAH" :class="{active: activeUser === Activation.SARAH}">
                        <input type="checkbox" class="message-content" id="checkbox-message">
                        <img src="..\assets\Ellipse 1.png" alt="" class="notification-not-opened" :class="{headerOpen: activeUser === Activation.SARAH}">
                        <span class="message-content" id="name">Sarah Connor</span>
                        <span class="message-content" id="subject">Cyberdyne Systems</span>
                        <span class="message-content" id="date">20 June 2013</span>
                        <Transition>
                            <span class="flecha-desplegable" :class="{desplegada: activeUser === Activation.SARAH}">&#10095;</span>
                        </Transition>
                    </div>

                    <div class="content" :class="{displayed: activeUser === Activation.SARAH}">
                        <h3>Hi Friend!!!</h3>
                        <span>Lorem ipsum dolor sit amet dolorem proident utilitatis magnus agris. Abutebatur architecto
                            propter ut materia. Quam quo aliquip, oficii voluptatem. Qui pariatur officii eos. <br>Lorem
                            ipsum dolor sit amet com tenetur animi. Et laboris aut apexerat fugiat. Ipsa amet quoddam
                            colebatu proper. Qui tempore et magna sibi. Id ipsum deinde, repellat minim. Mollit odit
                            culpa qui aut. Adipsci vel delectus, pariatur propagabant. Consequatur sibi vero, voluptate
                            consequatur. Ipsa colebatur et, pariatur repellendus. Dolor ullam consequatur id.
                        </span>
                        <div class="message-body-elements" id="message-buttons">
                            <button class="message-body" id="reply">REPLY</button>
                            <button class="message-body" id="delete">DELETE</button>
                        </div>
                    </div>


                    <div class="message" @click="activeUser = Activation.ARTURO" :class="{active: activeUser === Activation.ARTURO}">
                        <input type="checkbox" class="message-content" id="checkbox-message">
                        <img src="..\assets\Ellipse 1.png" alt="" class="notification-not-opened" :class="{headerOpen: activeUser === Activation.ARTURO}">
                        <span class="message-content" id="name">Arturo González</span>
                        <span class="message-content" id="subject">Recordatorio Consulta</span>
                        <span class="message-content" id="date">20 June 2013</span>
                        <Transition>
                            <span class="flecha-desplegable" :class="{desplegada: activeUser === Activation.ARTURO}">&#10095;</span>
                        </Transition>
                    </div>
                </div>

                <div class="content" :class="{displayed: activeUser === Activation.ARTURO}">
                        <h3>Hi Friend!!!</h3>
                        <span>Lorem ipsum dolor sit amet dolorem proident utilitatis magnus agris. Abutebatur architecto
                            propter ut materia. Quam quo aliquip, oficii voluptatem. Qui pariatur officii eos. <br>Lorem
                            ipsum dolor sit amet com tenetur animi. Et laboris aut apexerat fugiat. Ipsa amet quoddam
                            colebatu proper. Qui tempore et magna sibi. Id ipsum deinde, repellat minim. Mollit odit
                            culpa qui aut. Adipsci vel delectus, pariatur propagabant. Consequatur sibi vero, voluptate
                            consequatur. Ipsa colebatur et, pariatur repellendus. Dolor ullam consequatur id.
                        </span>
                        <div class="message-body-elements" id="message-buttons">
                            <button class="message-body" id="reply">REPLY</button>
                            <button class="message-body" id="delete">DELETE</button>
                        </div>
                    </div>


                <div class="alerts-body" id="previous">
                    <button>5 Previous Messages</button>
                </div>


            </div>

        </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

enum Activation {
    JOHN,
    RICHARD,
    ELISABETH,
    SARAH,
    ARTURO
}
const activeUser = ref<Activation>(Activation.JOHN)
console.log(activeUser)
</script>
<style scoped>

/* Slicer de Alerts and Messaging*/

/* Header */
.slicers#alerts-and-messaging {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 700px;
}

@media (max-width: 950px) {
    .slicers#alerts-and-messaging {
        position: relative;
        top: 100px;
        margin-bottom: 20%;
    }

    .slicer-alert-content#header-alert span {
        position: relative;
        left: 100px;
        top: 5px;
    }
}

@media (max-width: 620px) {
    .slicers#alerts-and-messaging {
        position: relative;
        margin-bottom: 20%;
    }

    .slicer-alert-content#header-alert span {
        position: relative;
        left: 100px;
        top: 5px;
    }

    .slicer-alert-content#header-alert {
        min-width: 100%;
    }

    .slicer-alert-content#alert-body {
        max-width: 785px;
        margin-left: 2%;
    }
}

@media (max-width: 315px) {
    .slicers#alerts-and-messaging {

        margin: 0%;
    }

    .slicer-alert-content#header-alert span {
        font-size: 25px;
        margin: 0;
        left: 0px;
    }
}

.slicer-alert-content#header-alert {
    width: 100%;
    height: 50px;
    background-color: rgb(222, 225, 243);
}

.slicer-alert-content#header-alert span {
    color: rgb(141, 142, 153);
    font-size: 30px;
    padding-top: 0.15% !important;
    padding-left: 7% !important;
    min-width: 300px;
}

.slicer-alert-content#header-alert img {
    position: relative;
    padding-left: 0% !important;
    left: 40px;
    width: 50px;
}



/* Body */
.slicer-alert-content#alert-body {
    position: relative;
    top: 40px;
    display: flex;
    flex-direction: column;
    height: 607px;
    width: 800px;
    border: 1px;
    border-style: solid;
    border-color: rgb(222, 225, 243);
}

.alerts-body#alerts-body-header {
    height: 45px;
    width: 100%;
    border: 0px;
    border-bottom: 1px;
    border-style: solid;
    border-color: rgb(222, 225, 243);
}

@media(max-width: 315px) {
    .alerts-body#alerts-body-header {
        min-height: 60px;
    }

    .body-header#new-message {
        font-size: 30px;
    }

    .body-header#buttons button {
        min-width: 90px;
        background-color: white;
        border: 0px;

        color: #5a5757;
        font-size: px;
        border-style: solid;
        border-color: rgb(222, 225, 243);
        float: left;
    }
}

/* Body - Checkbox*/
.body-header#checkbox-space {
    display: flex;
    flex-direction: row;
    width: 45px;
    align-items: center;
}

.body-header#checkbox-space input[type=checkbox] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;

    font: inherit;
    width: 1.15em;
    height: 1.15em;
    border: 2px solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);


    position: relative;
    left: 25%;
    border-color: red;
    display: grid;
    place-content: center;
}

.body-header#checkbox-space input[type=checkbox]::before {
    background-color: black;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
}

.body-header#checkbox-space input[type=checkbox]:checked:before {
    transform: scale(1);
}


/* New Message button*/
.body-header#new-message {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.body-header#new-message img {
    height: 100%;
    width: 190px;
}

.body-header#new-message span {
    position: absolute;
    color: white;
    padding-left: 5%;
}


/* Body - Button*/
.input-icon {
    position: relative;
    top: 12px;
    right: 30px;
    height: 20px;
}

.body-header#buttons button {
    width: 70px;
    background-color: white;
    border: 0px;
    border-right: 1px;
    color: #5a5757;
    font-size: 16px;
    border-style: solid;
    border-color: rgb(222, 225, 243);
    float: left;
}

.body-header#buttons button:focus {
    background-color: rgb(222, 225, 243);
}

.body-header#buttons img {
    order: 3;
    position: relative;
    width: 23px;
    height: 23px;
    right: 92px;
    bottom: 9px;
}

/* Body - Search bar*/

.body-header#search-bar {
    position: relative;
    left: 210px;
}

.body-header#search-bar input {
    position: relative;
    top: 7px;
    border: none;
    border: 1px;
    border-style: solid;
    border-color: rgb(222, 225, 243);
    height: 30px;
}


/* Body - Messages */


/* Opened message */

.alerts-body#messages {
    display: flex;
    flex-direction: column;
}

.active{
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid rgb(222, 225, 243);
}

.message-content#notification {
    height: 15px;
    width: 15px;
    margin-left: 2%;
}

.message-content#checkbox-message {
    display: flex;
    flex-direction: column;
    margin-left: 2%;
}

.message-content#name {
    width: 200px;
    margin-left: 2%;
    font-weight: bold;
}

.message-content#subject {
    width: 200px;
    color: rgb(161, 161, 161);

}

.message-content#date {
    position: relative;
    left: 90px;
    width: 200px;
    color: rgb(161, 161, 161);
}

.desplegada {
    transition: 1s !important;
    position: relative;
    left: 50px;
    color: rgb(161, 161, 161);
    transform: rotate(90deg) !important;
}

.flecha-desplegable {
    transition: 1s !important;
    position: relative;
    left: 50px;
    color: rgb(161, 161, 161);
}


/* Message opened - Body */

.content {
    transition: 1s;
    display: none;
}

.displayed {
    transition: 1s !important;
    display: flex !important;
    flex-direction: column;
    align-items: s;
    background-color: rgb(243, 246, 250);
    border-bottom: 1px solid rgb(222, 225, 243);
    width: 100%;
    height: 270px;
    color: rgb(118, 119, 121);
}

.displayed h3 {
    font-weight: normal;
    margin-left: 7%;
}

.displayed span {
    line-height: 20px;
    margin-left: 7%;
    width: 690px;
    font-size: 14px;
}

/* Message opened - Buttons */

.message-body-elements#message-buttons {
    align-self: flex-end;
    position: relative;
    right: 50px;
    top: 40px;
    height: 30px;
}

.message-body#reply {
    background-color: rgb(31, 219, 172);
    width: 70px;
    border: none;
    color: rgb(20, 129, 102);
    font-weight: bold;
}

.message-body#delete {
    margin-left: 20px;
    background-color: rgb(255, 94, 94);
    width: 70px;
    border: none;
    color: white;
    font-weight: bold;
}


/* Message not opened */
.message {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid rgb(222, 225, 243);
}

.headerOpen{
    transition: 0.25s;
    filter:none !important;
}
.notification-not-opened {
    transition: 0.25s;
    height: 15px;
    width: 15px;
    margin-left: 2%;
    height: 15px;
    width: 15px;
    margin-left: 2%;
    filter: invert(50%) opacity(45%);
}

/* Previous Button */

.alerts-body#previous {
    align-self: flex-end;
    position: relative;
    right: 50px;
    height: 100%;
    width: auto;
}

.alerts-body#previous button {
    border: none;
    width: 170px;
    color: rgb(156, 157, 160);
    font-weight: bold;
    background-color: rgb(243, 246, 250);
}
</style>