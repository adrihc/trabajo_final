<template>
    <div class="slicers" id="circle-of-care">
        <div class="slicer-circle" id="header-circle">
            <img src="..\assets\ties2.png" alt="">
            <span>CIRCLE OF CARE</span>
        </div>

        <div class="slicer-circle" id="body-circle">
            <div class="circle-body" id="circle-body-buttons">
                <button>FIND</button>
                <button>MY CIRCLE OF CARE</button>
                <button>PENDING <img src="..\assets\Ellipse 1.png" alt="" id="notification-ellipse"></button>
            </div>

            <div class="circle-body" id="content">
                <div id="information">
                    <span>For organize Drag & Drop in the groups</span>
                </div>

                <div id="group-of-people">
                    <div class="personas" id="persona1">
                        <div>
                            <img src="..\assets\Ellipse 1.png" alt="" class="message-content" id="notification-not-opened">
                        </div>
                        <div class="inside-person" id="text">
                            <Span class="person" id="name">Francis Fisher Williams</Span>
                            <Span>Graphic Designer</Span>
                            <Button>Send Message</Button>
                        </div>

                    </div>

                    <div class="personas" id="persona2">
                        <div>
                            <img src="..\assets\Ellipse 1.png" alt="" class="message-content" id="notification-not-opened">
                        </div>
                        <div class="inside-person" id="text2">
                            <Span class="person" id="name">Marie Kraft Smith</Span>
                            <Span>Doctor</Span>
                            <Button>Send Message</Button>
                        </div>
                    </div>

                    <div class="personas" id="persona1">
                        <div>
                            <img src="..\assets\Ellipse 1.png" alt="" class="message-content" id="notification-not-opened">
                        </div>
                        <div class="inside-person" id="text">
                            <Span class="person" id="name">Dolores Vidal Taylor</Span>
                            <Span>Comercial</Span>
                            <Button>Send Message</Button>
                        </div>

                    </div>

                    <div class="personas" id="persona1">
                        <div>
                            <img src="..\assets\Ellipse 1.png" alt="" class="message-content" id="notification-not-opened">
                        </div>
                        <div class="inside-person" id="text">
                            <Span class="person" id="name">Robbie Walker Jr.</Span>
                            <Span>CEO NY Memorial</Span>
                            <Button>Send Message</Button>
                        </div>

                    </div>

                    <div class="personas" id="persona2">
                        <div>
                            <img src="..\assets\Ellipse 1.png" alt="" class="message-content" id="notification-not-opened">
                        </div>
                        <div class="inside-person" id="text2">
                            <Span class="person" id="name">Vanessa Herrera Simm</Span>
                            <Span>Nurse</Span>
                            <Button>Send Message</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* Slicer - Circle of care  */

.slicers#circle-of-care {
    display: flex;
    flex-direction: column;
}

@media(max-width:1000px) {
    .slicers#circle-of-care {
        display: none;
    }
}

.slicer-circle#header-circle {
    width: 100%;
    height: 50px;
    background-color: rgb(222, 225, 243);
}

.slicer-circle#header-circle span {
    color: rgb(141, 142, 153);
    font-size: 30px;
    padding-top: 0.15%;
    padding-left: 7%;
    min-width: 300px;
}

.slicer-circle#header-circle img {
position: relative;
left: 40px;
    width: 50px;
}

.slicer-alert-content#header-alert span {
    color: rgb(141, 142, 153);
    font-size: 30px;
    padding-left: 5%;
    padding-top: 0.75%;
}

.slicer-alert-content#header-alert img {
    padding-left: 5%;
    width: 50px;
}

.slicer-circle#body-circle {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 30px;
    width: 1000px;
    height: 700px;
    background-color: rgb(243, 246, 250);
    border: 1px solid rgb(211, 214, 218);
    margin-bottom: 10%;
}

.circle-body#circle-body-buttons button {
    width: 100%;
    height: 50px;
    background-color: white;
    border: 1px solid rgb(211, 214, 218);
    color: rgb(111, 113, 116);
    font-weight: bold;
    font-size: 15px;
    border-collapse: collapse;
    margin: -1px;
}

.circle-body#circle-body-buttons button:focus {
    border-bottom: 4px solid red;
}

#notification-ellipse {
    position: relative;
    top: 4px;
    left: 4px;
    align-self: center;
    width: 20px;
}


.circle-body#content {
    display: flex;
    flex-direction: column;
    align-self: center;
}

#information {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    width: 330px;
    height: 35px;
    margin-top: 3%;
    margin-bottom: 3%;
    background-color: rgb(223, 227, 231)
}

#information span {
    margin-top: 8px;
}

/* Personas */

#group-of-people {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15%;
    row-gap: 7%;
}

.personas#persona1 {
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    height: 150px;
    width: 340px;
    border: 1px solid rgb(211, 214, 218);
    border-left: 6px solid rgb(255, 96, 96);
}

.personas#persona2 {
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    height: 150px;
    width: 340px;
    border: 1px solid rgb(211, 214, 218);
    border-left: 6px solid #3ccfb2;
}

.personas img {
    align-self: self-start;
    position: relative;
    top: 10px;
    left: 28px;
    min-width: 90px;
    min-height: 90px;
}

.inside-person#text span {
    position: relative;
    bottom: 15px;
    margin-right: 15px;
    font-size: 20px;
    color: rgb(134, 136, 139);
}


.inside-person#text {
    position: relative;
    bottom: 5px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: end;
}

.inside-person#text2 {
    position: relative;
    left: 0px;
    bottom: 5px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: end;
}

.inside-person#text2 span {
    position: relative;
    bottom: 15px;
    margin-right: 15px;
    font-size: 20px;
    color: rgb(134, 136, 139);
}

.inside-person#text button {
    position: relative;
    top: 27px;
    width: 150px;
    height: 40px;
    left: 1px;
    background-color: rgb(255, 96, 96);
    border: none;
    font-size: 16px;
    color: white;
    font-weight: bold;
}

.inside-person#text2 button {
    position: relative;
    top: 27px;
    width: 150px;
    height: 40px;
    left: 1px;
    background-color: #3ccfb2;
    border: none;
    font-size: 16px;
    color: #1e6859;
    font-weight: bold;
}

.person#name {
    position: absolute;
    font-weight: bold;
    font-size: larger;
}</style>