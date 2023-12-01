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
                    <li>1</li>
                    <li>
                        <div class="active">
                            <span class="circle"></span>
                            <span> 2 </span>
                        </div>
                    </li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>
                        <div class="active">
                            <span class="circle-no-active"></span>
                            <span>16</span>
                        </div>
                    </li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>
                        <div class="active">
                            <span>16</span>
                            <span class="circle-no-active"></span>
                        </div>
                    </li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>
                        <div class="active">
                            <span>16</span>
                            <span class="circle-no-active"></span>
                        </div>
                    </li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    <li>31</li>

                </ul>
            </div>
        </div>

    </div>
</template>

<style>
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
    background-color: red;
    z-index: -1;
}

.days .circle-no-active {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgb(255, 96, 96);
    z-index: -1;
}

/* Highlight the "current" day */
.active {
    padding: 5px;
    color: whitesmoke !important;
    align-items: center;
    justify-content: center;
}

.days li .no-active {
    padding: 5px;
    border-radius: 90%;
    color: whitesmoke !important
}
</style>