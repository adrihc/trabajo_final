<template>
    <div class="body_divisions">
        <RouterLink to="/alerts" style="background-color: white;">
        <div @click="activeTab = Tabs.ALERTS" class="zone" :class="{actualTab: activeTab === Tabs.ALERTS}">
                <img src="..\assets\Layer 2.png" alt="" class="layer_2">
                <img src="..\assets\warnings-off2.png" alt="" class="zoneImg">
                <img src="..\assets\Ellipse 1.png" alt="" class="ellipse" id="alerts_ellipse">
                <span>ALERTS AND MESSAGING</span>
                <img src="..\assets\Layer 3.png" alt="" class="triangulo" id="alerts_tr">
            </div>
        </RouterLink>

        <RouterLink to="/calendar" style="background-color: white;" >
            <div @click="activeTab = Tabs.CALENDAR" class="zone" :class="{actualTab: activeTab === Tabs.CALENDAR}">
                <img src="..\assets\Layer 2.png" alt="" class="layer_2">
                <img src="..\assets\reminders-calendar.png" alt="" class="zoneImg">
                <img src="..\assets\Ellipse 1.png" alt="" class="ellipse" id="reminder">
                <span>REMINDERS CALENDAR</span>
                <img src="..\assets\Layer 3.png" alt="" class="triangulo" id="reminder_tr">
            </div>
        </RouterLink>
        <RouterLink to="/circle" style="background-color: white;" @click="activeTab = Tabs.CIRCLE">
            <div @click="activeTab = Tabs.CIRCLE" class="zone" :class="{actualTab: activeTab === Tabs.CIRCLE}">
                <img src="..\assets\Layer 2.png" alt="" class="layer_2">
                <img src="..\assets\ties2.png" alt="" class="zoneImg">
                <img src="..\assets\Ellipse 1.png" alt="" class="ellipse" id="circle">
                <span>CIRCLE OF CARE</span>
                <img src="..\assets\Layer 3.png" alt="" class="triangulo" id="circle_tr">
            </div>
        </RouterLink>

        <div class="zone" id="daily">
            <img src="..\assets\Layer 2.png" alt="" class="layer_2">
            <img src="..\assets\daily-care-o-gram.png" alt="" class="zoneImg">
            <img src="..\assets\Ellipse 1.png" alt="" class="ellipse" id="daily">
            <span>DAILY <br>CARE-O-GRAM</span>
            <img src="..\assets\Layer 3.png" alt="" class="triangulo" id="daily_tr">
        </div>
        <div class="zone">
            <img src="..\assets\Layer 2.png" alt="" class="layer_2">
            <img src="..\assets\casemanager.png" alt="" class="zoneImg">
            <span>REPOSITORY</span>
            <img src="..\assets\Layer 3.png" alt="" class="triangulo" id="repo_tr">
        </div>
        <div class="zone">
            <img src="..\assets\Layer 2.png" alt="" class="layer_2">
            <img src="..\assets\my-health-reports.png" alt="" class="zoneImg">
            <span>REPORTS</span>
            <img src="..\assets\Layer 3.png" alt="" class="triangulo" id="reports_tr">
        </div>
        <div class="zone" id="points">
            <img src="..\assets\Layer 2.png" alt="" class="layer_2">
            <img src="..\assets\reward-points.png" alt="" class="zoneImg">
            <span>MY POINTS</span>
            <img src="..\assets\Layer 3.png" alt="" class="triangulo" id="points_tr">
            <img src="..\assets\Rectangle 2.png" alt="" class="rectangle">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

enum Tabs {
    CIRCLE,
    ALERTS,
    CALENDAR,
    NONE
}

const activeTab = ref<Tabs>(Tabs.NONE)
//defineProps({
//    color: {
//        type: String,
//        required: true
//    }
//})

</script>

<style scoped>

.actualTab{
    background-color: rgb(211, 211, 211) !important;
    transform: 1.4s;
}


.body_divisions {
    display: grid;
    row-gap: 0px;
    grid-template-columns: repeat(3, 315px);
    grid-template-rows: 230px 40px 240px;
    justify-content: center;
    align-items: center;
}

@media (max-width: 950px) {
    .body_divisions {
        justify-content: center;
        grid-template-columns: repeat(2, 315px);
        grid-template-rows: 230px 40px 240px 30px;
    }
}

@media (max-width: 620px) {
    .body_divisions {
        position: relative;
        row-gap: 200px;
        top: 80px;
        left: 165px;
        grid-template-columns: 315px;
        grid-template-rows: 260px 130px 260px 130px 260px 130px 260px;
    }
}

.zone {
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 120px;
    background-color: rgb(236, 236, 236);
    border: 1px;
    border-style: solid;
    border-color: rgb(212, 212, 212);
    ;
}

@media (max-width: 620px) {
    .zone {
        transform: scale(3);
    }
}

.zone img {
    align-self: flex-end;
    width: 90px;
    height: 90px;
}

/* Posición imagen de todas las zonas*/

.zoneImg {
    position: relative;
    left: 10px;
    bottom: 15px;
}

.zone span {
    text-align: right;
    color: gray;
    align-self: center;
    margin-bottom: 10px;
    font-size: larger;
    position: relative;
    left: 15px;
    top: 20px;
    font-weight: bold;
}



/* Cuadradito*/

.layer_2 {
    position: relative;
    left: 7px;
    top: -102px;
    max-height: 10px;
    max-width: 10px;
}



/* Circulo rojo */

.ellipse {
    order: 3;
    max-width: 25px;
    max-height: 25px;
}

.ellipse#alerts_ellipse {
    position: relative;
    left: -5px;
    top: -90px;
}

.ellipse#reminder {
    position: relative;
    left: -5px;
    top: -90px;
}

.ellipse#circle {
    position: relative;
    right: 5px;
    top: -90px;
}

.ellipse#daily {
    position: relative;
    left: 15px;
    top: -90px;
}

/* Triangulito */

.triangulo {
    position: relative;
    max-height: 15px;
    max-width: 15px;
    bottom: 1px;
}

.triangulo#alerts_tr {
    left: 24px;
}

.triangulo#reminder_tr {
    left: 24px;
}

.triangulo#circle_tr {
    left: 29px;
}

.triangulo#daily_tr {
    left: 50px;
}

.triangulo#repo_tr {
    left: 65px;
}

.triangulo#reports_tr {
    left: 95px;
}

.triangulo#points_tr {
    left: 86px;
}

.rectangle {
    position: relative;
    max-height: 15px;
    max-width: 120px;
    transform: scale(2);
    bottom: 98px;
    right: 42px;
}
</style>