<template>
    <div class="slicers" id="reminders-calendar">
        <div class="slicer-reminder-content" id="header-reminder">
            <img src="..\assets\reminders-calendar.png" alt="">
            <span>REMINDERS CALENDAR</span>
            <div id="day-week-month">
                <img src="..\assets\Titular barra.png" alt="">
            </div>

        </div>

        <div class="slicer-zone-calendar" id="calendar-body">
            <div class="slicer-zone-calendar" id="today">
                <h3>TODAY</h3>
                <span>2 JULY / MONDAY</span>
                <img src="..\assets\Rectangle 2.png" alt="">
                <img src="..\assets\Rectangle 2.png" alt="">
                <span id="cross">x</span>
                <div class="today" id="content">
                    <span class="day">2 JULY 2012 <b>/</b><span class="hour">14:30</span></span>
                    <span class="description">Lorem ipsum dolor sit amet dolorem proidentutilitatis magnus agris.
                        Abutebatur architecto propter ut materia. Quam quo aliquip, officii voluptatem.
                        <div class="today-content" id="buttons">
                            <button id="change">CHANGE</button>
                            <button id="done">DONE</button>
                        </div>
                    </span>
                </div>
            </div>

            <div class="slicer-zone-calendar" id="calendar">
                <div class="month">
                    <ul>
                        <li class="prev">&#10094;</li>
                        <li class="next">&#10095;</li>
                        <li>JULY 2014</li>
                    </ul>
                </div>

                <ul class="weekdays">
                    <li>S</li>
                    <li>M</li>
                    <li>T</li>
                    <li>W</li>
                    <li>T</li>
                    <li>F</li>
                    <li>S</li>
                </ul>

                <ul class="days">
                    <li @click="activeDay = Days.ONE">
                        <div class="day-no-active" :class="{ active: activeDay === Days.ONE }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.ONE }"></span>
                            <span>1</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.TWO">
                        <div class="day-no-active" :class="{ active: activeDay === Days.TWO }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.TWO }"></span>
                            <span>2</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.THREE">
                        <div class="day-no-active" :class="{ active: activeDay === Days.THREE }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.THREE }"></span>
                            <span>3</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.FOUR">
                        <div class="day-no-active" :class="{ active: activeDay === Days.FOUR }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.FOUR }"></span>
                            <span>4</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.FIVE">
                        <div class="day-no-active" :class="{ active: activeDay === Days.FIVE }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.FIVE }"></span>
                            <span>5</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.SIX">
                        <div class="day-no-active" :class="{ active: activeDay === Days.SIX }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.SIX }"></span>
                            <span>6</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.SEVEN">
                        <div class="day-no-active" :class="{ active: activeDay === Days.SEVEN }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.SEVEN }"></span>
                            <span>7</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.EIGHT">
                        <div class="day-no-active" :class="{ active: activeDay === Days.EIGHT }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.EIGHT }"></span>
                            <span>8</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.NINE">
                        <div class="day-no-active" :class="{ active: activeDay === Days.NINE }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.NINE }"></span>
                            <span>9</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.TEN">
                        <div class="day-no-active" :class="{ active: activeDay === Days.TEN }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.TEN }"></span>
                            <span>10</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.ELEVEN">
                        <div class="day-no-active" :class="{ active: activeDay === Days.ELEVEN }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.ELEVEN }"></span>
                            <span>11</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.TWELVE">
                        <div class="day-no-active" :class="{ active: activeDay === Days.TWELVE }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.TWELVE }"></span>
                            <span>12</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.THIRTEEN">
                        <div class="day-no-active" :class="{ active: activeDay === Days.THIRTEEN }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.THIRTEEN }"></span>
                            <span>13</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.FOURTEEN">
                        <div class="day-no-active" :class="{ active: activeDay === Days.FOURTEEN }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.FOURTEEN }"></span>
                            <span>14</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.FIVETEEN">
                        <div class="day-no-active" :class="{ active: activeDay === Days.FIVETEEN }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.FIVETEEN }"></span>
                            <span>15</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.SIXTEEN">
                        <div class="day-no-active" :class="{ active: activeDay === Days.SIXTEEN }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.SIXTEEN }"></span>
                            <span>16</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.SEVENTEEN">
                        <div class="day-no-active" :class="{ active: activeDay === Days.SEVENTEEN }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.SEVENTEEN }"></span>
                            <span>17</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.EIGHTEEN">
                        <div class="day-no-active" :class="{ active: activeDay === Days.EIGHTEEN }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.EIGHTEEN }"></span>
                            <span>18</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.NINETEEN">
                        <div class="day-no-active" :class="{ active: activeDay === Days.NINETEEN }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.NINETEEN }"></span>
                            <span>19</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.TWENTY">
                        <div class="day-no-active" :class="{ active: activeDay === Days.TWENTY }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.TWENTY }"></span>
                            <span>20</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.TWENTYONE">
                        <div class="day-no-active" :class="{ active: activeDay === Days.TWENTYONE }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.TWENTYONE }"></span>
                            <span>21</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.TWENTYTWO">
                        <div class="day-no-active" :class="{ active: activeDay === Days.TWENTYTWO }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.TWENTYTWO }"></span>
                            <span>22</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.TWENTYTHREE">
                        <div class="day-no-active" :class="{ active: activeDay === Days.TWENTYTHREE }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.TWENTYTHREE }"></span>
                            <span>23</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.TWENTYFOUR">
                        <div class="day-no-active" :class="{ active: activeDay === Days.TWENTYFOUR }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.TWENTYFOUR }"></span>
                            <span>24</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.TWENTYFIVE">
                        <div class="day-no-active" :class="{ active: activeDay === Days.TWENTYFIVE }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.TWENTYFIVE }"></span>
                            <span>25</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.TWENTYSIX">
                        <div class="day-no-active" :class="{ active: activeDay === Days.TWENTYSIX }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.TWENTYSIX }"></span>
                            <span>26</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.TWENTYSEVEN">
                        <div class="day-no-active" :class="{ active: activeDay === Days.TWENTYSEVEN }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.TWENTYSEVEN }"></span>
                            <span>27</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.TWENTYEIGHT">
                        <div class="day-no-active" :class="{ active: activeDay === Days.TWENTYEIGHT }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.TWENTYEIGHT }"></span>
                            <span>28</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.TWENTYNINE">
                        <div class="day-no-active" :class="{ active: activeDay === Days.TWENTYNINE }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.TWENTYNINE }"></span>
                            <span>29</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.THIRTY">
                        <div class="day-no-active" :class="{ active: activeDay === Days.THIRTY }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.THIRTY }"></span>
                            <span>30</span>
                        </div>
                    </li>
                    <li @click="activeDay = Days.THIRTYONE">
                        <div class="day-no-active" :class="{ active: activeDay === Days.THIRTYONE }">
                            <span class="circle-no-active" :class="{ circle: activeDay === Days.THIRTYONE }"></span>
                            <span>31</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
enum Days { ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, ELEVEN, TWELVE, THIRTEEN, FOURTEEN, FIVETEEN, SIXTEEN, SEVENTEEN, EIGHTEEN, NINETEEN, TWENTY, TWENTYONE, TWENTYTWO, TWENTYTHREE, TWENTYFOUR, TWENTYFIVE, TWENTYSIX, TWENTYSEVEN, TWENTYEIGHT, TWENTYNINE, THIRTY, THIRTYONE }
const activeDay = ref<Days>(Days.ONE)

</script>

<style scoped>
/* Slicer - Calendar reminder*/

/* Calendar header */


.slicer-reminder-content#header-reminder {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    background-color: rgb(222, 225, 243);
}

.slicer-reminder-content#header-reminder span {
    color: rgb(141, 142, 153);
    font-size: 30px;
    padding-top: 0.15%;
    padding-right: 34%;
    min-width: 300px;
}

.slicer-reminder-content#header-reminder img {

    width: 50px;
}

#day-week-month {
    align-self: center;
    width: 300px;
    height: 30px;
}

#day-week-month img {
    min-width: 300px;
    height: 24px;
}

/* Calendar Body */
.slicers#reminders-calendar {
    display: flex;
    flex-direction: column;

}

@media(max-width: 1000px) {
    .slicers#reminders-calendar {
        display: none;
    }
}

.slicer-zone-calendar#calendar {
    width: 400px;
    display: flex;
    flex-direction: column;
}

/* Calendar Body */

.slicer-zone-calendar#calendar-body {
    margin-top: 2%;
    width: 824px;
    height: 430px;
    display: flex;
    flex-direction: row;
    align-self: center;
    background-color: rgb(243, 246, 250);
    border: 1px solid rgb(173, 175, 179);
    margin-bottom: 1%;
}


/* Today - Part */
.slicer-zone-calendar#today {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 400px;
    color: rgb(132, 134, 138);
}

.slicer-zone-calendar#today h3 {
    margin-bottom: 0%;
}

.slicer-zone-calendar#today img {
    height: 60px;
    width: 300px;
    margin-top: 10px;
}

#cross {
    position: relative;
    bottom: 60px;
    left: 140px;
    height: 20px;
    width: 20px;
    background-color: rgb(206, 78, 78);
    text-align: center;
    color: whitesmoke;
    cursor: pointer;
}

.today#content {
    display: flex;
    flex-direction: column;
    background-color: rgb(211, 223, 248);
    height: 210px;
    width: 300px;
    margin-top: -20px;
}

.day {
    margin-left: 4%;
}

.hour {
    font-size: 26px;
    font-weight: bold;
    color: rgb(99, 101, 104);
}

.description {
    margin: 2%;
    margin-left: 4%;
    font-size: 14px;
}

.today-content#buttons {
    margin-top: 30px;
    margin-left: 25px;
}

.today-content#buttons button {
    height: 30px;
    width: 80px;
    margin-left: 25px;
    cursor: pointer;
}

#change {
    background-color: #3ccfb2;
    border: none;
    color: #1e6859;
    font-weight: bold;
}

#done {
    background-color: rgb(255, 96, 96);
    border: none;
    color: white;
    font-weight: bold;
}


/* Calendar */

.month {
    height: 100px;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
}

/* Month list */
.month ul {
    margin: 0;
    padding: 0;
}

.month ul li {
    list-style-type: none;
    color: black;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
}

/* Previous button inside month header */
.month .prev {
    float: left;
    padding-top: 10px;
}

/* Next button */
.month .next {
    float: right;
    padding-top: 10px;
}

/* Weekdays (Mon-Sun) */
.weekdays {
    background: #3ccfb2;
    margin: 0;
    padding: 10px 0;
    width: 100%;

}

.weekdays li {
    display: inline-block;
    width: 12.6%;
    color: #666;
    text-align: center;
}

/* Days (1-31) */
.days {
    width: 100%;
    height: 200px;
    padding: 10px 0;
    margin: 0;
    align-items: center;
    z-index: 1;
}

.days li {
    list-style-type: none;
    display: inline-block;
    min-width: 12.6%;
    text-align: center;
    margin-top: 3%;
    margin-bottom: 5px;
    font-size: 16px;
    color: #777;
    cursor: pointer;
    position: relative;
}

.days .circle {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red !important;
    z-index: -1;
}

.days .circle-no-active {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    z-index: -1;
}

/* Highlight the "current" day */
.active {
    padding: 5px;
    color: whitesmoke !important;
    align-items: center;
    justify-content: center;
}

.day-no-active {
    padding: 5px;
    color: #777;
    align-items: center;
    justify-content: center;
}

.days li .no-active {
    padding: 5px;
    border-radius: 90%;
    color: whitesmoke !important
}
</style>