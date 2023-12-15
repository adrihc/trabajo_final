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

                <div class="body-header" id="new-message" @click="show = true">
                    <img src="..\assets\Rectangle 2.png" alt="">
                    <span>New Message</span>
                </div>

                <div class="body-header" id="buttons">
                    <button class="button-header" @click="activeMessageTab = MessageTab.INBOX"
                        :class="{ focusedButton: activeMessageTab === MessageTab.INBOX }">Inbox</button>
                    <img src="..\assets\Ellipse 1.png" alt="">
                    <button class="button-header" @click="activeMessageTab = MessageTab.SENT"
                        :class="{ focusedButton: activeMessageTab === MessageTab.SENT }">Sent</button>
                </div>

                <div class="body-header" id="search-bar">
                    <input type="search" placeholder="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <Inbox v-if="activeMessageTab === MessageTab.INBOX"></Inbox>

            <Sent v-if="activeMessageTab === MessageTab.SENT" v-for="message in sentMessages" :subject="message.subject"
                :msg="message.msg" :receiver="message.receiver">
            </Sent>

        </div>
    </div>

    <Transition name="bgAnimation">
        <div v-if="show" class="blackBackground" @click="show = false"></div>
    </Transition>
    <Transition name="newMessageAnimation">
        <div v-if="show" class="activeNewMessageTab">
            <div class="input-zone">
                <input type="text" placeholder="example@gmail.com" class="input-top" v-model="receiver">
                <input type="text" placeholder="Subject" v-model="subject">
                <textarea name="" id="" cols="30" rows="10" class="input-bot" placeholder="Your text here..."
                    v-model="msg"></textarea>

            </div>
            <div class="buttons-new-message">
                <button class="new-message-button" id="send" @click="addMessage">Send</button>
                <button class="new-message-button" id="cancel" @click="show = false">Cancel</button>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import Inbox from './Inbox.vue';
import Sent from './Sent.vue'

const receiver = ref<string>("");
const subject = ref<string>("");
const msg = ref<string>("");
const show = ref(false)
var sentMessages = reactive<Array<MessageObject>>([])

enum MessageTab {
    INBOX,
    SENT
}

const activeMessageTab = ref<MessageTab>(MessageTab.INBOX)

type MessageObject = {
    msg: string;
    subject: string;
    receiver: string;
}


function addMessage() {
    let nwMsg: MessageObject = {
        msg: msg.value,
        subject: subject.value,
        receiver: receiver.value
    }
    sentMessages.unshift(nwMsg)
    console.log(sentMessages)
}

</script>
<style scoped>
/* Zona de New message, recolocar más tarde*/
.newMessageAnimation-enter-active {
    animation: newMessageFade 1s;
}

.newMessageAnimation-leave-active {
    animation: newMessageFade 0.5s reverse;
}

@keyframes newMessageFade {
    0% {
        opacity: 0%;
    }

    100% {
        opacity: 100%;
    }
}

.bgAnimation-enter-active {
    animation: bgFade 0.75s;
}

.bgAnimation-leave-active {
    animation: bgFade 0.35s reverse;
}

@keyframes bgFade {
    0% {
        opacity: 0%;
    }

    50% {
        opacity: 50%;
    }
}

.input-zone {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 525px;
    border-radius: 15px 20px 20px 20px;
    box-shadow: 0px 0px 10px black;
}

.input-zone input,
textarea {
    width: 100%;
    border: 0;
    font-size: 17px;
}

.input-zone input {
    height: 50px;
    padding-left: 10px;
}

.input-zone input,
textarea:focus {
    outline: none;
}

.input-top {
    border-radius: 15px 20px 0px 0px;
}

.input-bot {
    border-radius: 0px 0px 20px 20px;
}

.input-zone textarea {
    padding-left: 10px;
    height: 100%;
    resize: none;

}

.buttons-new-message {
    margin-top: 15px;
    height: 35px;
    width: 300px;
}

.new-message-button#send {
    cursor: pointer;
    background-color: rgb(31, 219, 172);
    width: 90px;
    border: none;
    color: rgb(20, 129, 102);
    font-weight: bold;
    box-shadow: 0px 0px 10px rgb(46, 46, 46);
}
#send:hover{
    background-color: rgb(22, 143, 113);
    color: rgb(15, 95, 75);
}
.new-message-button#cancel {
    cursor: pointer;
    margin-left: 20px;
    background-color: rgb(255, 94, 94);
    width: 90px;
    border: none;
    color: white;
    font-weight: bold;
    box-shadow: 0px 0px 10px rgb(46, 46, 46);
}
#cancel:hover{
    background-color: rgb(219, 69, 69);
    color: rgb(228, 215, 215);
}
.focusedButton {
    background-color: rgb(222, 225, 243) !important;
}

.activeNewMessageTab {
    display: flex !important;
    flex-direction: column;
    position: fixed;
    width: 800px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.blackBackground {
    position: fixed;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    background-color: black;
}

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
        height: 20px;
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
    cursor: pointer;
    height: 100%;
    width: 190px;
}

.body-header#new-message:hover {
    filter: saturate(1.5);
}

.body-header#new-message span {
    cursor: pointer;
    position: absolute;
    color: white;
    padding-left: 40px;
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
    height: 100%;
    background-color: white;
    border: 0px;
    border-right: 1px;
    color: #5a5757;
    font-size: 16px;
    border-style: solid;
    border-color: rgb(222, 225, 243);
    float: left;
}

.body-header#buttons button:hover {
    background-color: rgb(195, 198, 216) !important;
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

.alerts-body#messages {
    display: none;
    flex-direction: column;
}


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
</style>