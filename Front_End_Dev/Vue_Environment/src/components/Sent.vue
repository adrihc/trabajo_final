<template>
    <div class="alerts-body" id="messages" :class="{ activeMessageTab: activeMessageTab === MessageTab.INBOX }">

        <div class="message" :class="{ active: activeUser === Activation.JOHN }">
            <div v-if="activeUser != Activation.JOHN" @click="activeUser = Activation.JOHN" class="message-activation">
            </div>
            <div v-if="activeUser === Activation.JOHN" @click="activeUser = Activation.NONE" class="none"></div>
            <input type="checkbox" class="message-content" id="checkbox-message">
            <img src="..\assets\Ellipse 1.png" alt="" class="notification-not-opened"
                :class="{ headerOpen: activeUser === Activation.JOHN }">
            <span class="message-content" id="name">{{ receiver }}</span>
            <span class="message-content" id="subject">{{ subject }}</span>
            <span class="message-content" id="date">12 April 2014</span>
            <Transition>
                <span class="flecha-desplegable" :class="{ desplegada: activeUser === Activation.JOHN }">&#10095;</span>
            </Transition>
        </div>

        <Transition name="msgAnimation">
            <div v-if="activeUser === Activation.JOHN" class="displayed">
                <h3>{{ subject }}</h3>
                <span>{{ msg }}
                </span>
                <div class="message-body-elements" id="message-buttons">
                    <button class="message-body" id="reply">REPLY</button>
                    <button class="message-body" id="delete">DELETE</button>
                </div>
            </div>
        </Transition>


        <div class="alerts-body" id="previous">
            <button>5 Previous Messages</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

defineProps(['msg', 'subject', 'receiver'])
const show = ref(false)

enum MessageTab {
    INBOX,
    SENT
}
const activeMessageTab = ref<MessageTab>(MessageTab.INBOX)
enum Activation {
    JOHN,
    RICHARD,
    ELISABETH,
    SARAH,
    ARTURO,
    NONE
}
const activeUser = ref<Activation>(Activation.NONE)
</script>

<style scoped>
.msgAnimation-enter,
.msgAnimation-leave-to {
    transform: scaleY(1);

}

.msgAnimation-enter-active {
    animation: msgAnim 0.5s;
    transform-origin: top;
    transition: transform 0.5s ease-in-out;
}

.msgAnimation-leave-active {
    animation: msgAnim 0.2s reverse;
    transform-origin: top;
    transition: transform 0.2s ease-in-out;
}

@keyframes msgAnim {
    0% {
        transform: scaleY(0);
        height: 0px;
    }

    100% {
        transform: scaleY(1);
        height: 270px;
    }
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

}


/* Opened message */
.activeMessageTab {
    display: flex !important;
}

.alerts-body#messages {
    display: none;
    flex-direction: column;
}

.active {
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


.displayed {
    display: flex !important;
    flex-direction: column;
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

.headerOpen {
    transition: 0.25s;
    filter: none !important;
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
    position: absolute;
    bottom: 0px;
    right: 30px;
    height: 40px;
    width: auto;
}

.alerts-body#previous button {
    border: none;
    width: 170px;
    color: rgb(156, 157, 160);
    font-weight: bold;
    background-color: rgb(243, 246, 250);
}

.message-activation {
    cursor: pointer;
    position: absolute;
    height: 50px;
    width: 100%;
}

.none {
    cursor: pointer;
    position: absolute;
    height: 50px;
    width: 100%;
}
</style>