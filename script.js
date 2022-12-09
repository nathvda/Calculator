let bodyElement = document.body;
bodyElement.style.backgroundColor = "#17BEBB";
bodyElement.style.display = "flex";
bodyElement.style.justifyContent = "center";
bodyElement.style.alignItems = "center";
bodyElement.style.height = "100vh";
bodyElement.style.margin = "0";
bodyElement.style.padding = "0";
bodyElement.style.fontFamily = "arial";

let main = bodyElement.querySelector("main");

// Basic Calculator Visuals
let CalculatorBody = document.createElement("div");

CalculatorBody.style.backgroundColor = "#efefef";
CalculatorBody.style.width = "80vw";
CalculatorBody.style.margin ="auto";
CalculatorBody.style.borderRadius = "20px";
CalculatorBody.style.boxShadow = "0 0 10px #159391, inset 0 0 50px #999999";
CalculatorBody.style.position = "relative";
CalculatorBody.style.padding = "1em";
CalculatorBody.style.border = "1px solid rgba(0,0,0,0.1)";


let calcScreen = document.createElement("div");
let calcScreenText = document.createTextNode("No Calculation");
calcScreen.setAttribute("id", "screen");

calcScreen.style.backgroundColor = "#80b140";
calcScreen.style.borderRadius ="5px";
calcScreen.style.padding = "1em";
calcScreen.style.height = "4vw";
calcScreen.style.border = "1px solid rgba(0,0,0,0.3)";
calcScreen.style.color = "rgba(0,0,0,0.6)";
calcScreen.style.boxShadow = "inset 0 0 10px rgba(0,0,0,0.3)";
calcScreen.style.marginBottom = "1em";
calcScreen.style.display = "flex";
calcScreen.style.justifyContent = "flex-end";
calcScreen.style.alignItems = "center";
calcScreen.style.fontWeight = "bold";

// clavier simple
let simpleTouches = document.createElement("div");
simpleTouches.setAttribute("id", "touches");

simpleTouches.style.display = "grid";
simpleTouches.style.gridTemplateAreas = '"toprow operands" "mainArea operands"';
simpleTouches.style.gridTemplateColumns = "3fr 1fr";
simpleTouches.style.marginTop = "1em";
simpleTouches.style.borderRadius = "5px";
simpleTouches.style.backgroundColor = "rgba(0,0,0,0.1)";
simpleTouches.style.border = "1px solid rgba(0,0,0,0.1)";
simpleTouches.style.gap = "1em";
simpleTouches.style.padding = "1em";
simpleTouches.style.placeItems = "center";


// clavier numérique. =
const NUMBERS = [7,8,9,4,5,6,1,2,3,0,".", "="];
let numId = 0;

let numberTouches = document.createElement("div");

numberTouches.style.gridArea = "numbers";
numberTouches.style.display = "grid";
numberTouches.style.borderRadius = "5px";
numberTouches.style.gridTemplateColumns = "repeat(3,1fr)";
numberTouches.style.width = "100%";
numberTouches.style.gap = "1em";
numberTouches.style.gridArea = "mainArea";


for (num of NUMBERS){  

    let calcTouch =  document.createElement("div");
    calcTouch.style.backgroundColor ="#efefef";
    calcTouch.style.borderRadius = "5px";
    calcTouch.style.padding = "1em";
    calcTouch.style.boxShadow = "0px 5px 0 rgba(0,0,0,0.1), 0px 5px 10px rgba(0,0,0,0.1)";
    calcTouch.style.textAlign = "center";
    calcTouch.style.fontWeight = "bold";
    calcTouch.style.color = "#888888";

    calcTouch.setAttribute("id", `num-${numId}`);

    let calcTouchText = document.createTextNode(`${num}`);  

    calcTouch.appendChild(calcTouchText);
    numberTouches.appendChild(calcTouch);

    numId++;
}


// clavier controls
const CONTROLS = ["(",")","%"];
let contId = 0;

let control = document.createElement("div");
control.style.gridArea = "toprow";
control.style.display = "grid";
control.style.borderRadius = "5px";
control.style.gridTemplateColumns = "repeat(3,1fr)";
control.style.width = "100%";
control.style.gap = "1em";

for (cont of CONTROLS){
    let topControls = document.createElement("div");
    let topControlsText = document.createTextNode(cont);

    topControls.setAttribute("id", `cont-${contId}`);

    topControls.style.backgroundColor ="#7c996e";
    topControls.style.borderRadius = "5px";
    topControls.style.padding = "1em";
    topControls.style.color = "#ffffff";
    topControls.style.fontWeight = "bold";
    topControls.style.boxShadow = "0px 5px 0 rgb(94, 113, 84), 0px 5px 10px rgba(0,0,0,0.1)";
    topControls.style.textAlign = "center";

    topControls.appendChild(topControlsText);
    control.appendChild(topControls);

    contId++;
}

// clavier SIDEBAR
const SIDEBAR = ["AC","/","*", "-", "+"];
let sideId = 0;

let sidebar = document.createElement("div");

sidebar.style.gridArea = "operands";
sidebar.style.display = "grid";
sidebar.style.borderRadius = "5px";
sidebar.style.gridTemplateRow = "repeat(4,30%)";
sidebar.style.gap = "1em";
sidebar.style.width = "100%";


for (oper of SIDEBAR){
    let sidebarControl = document.createElement("div");
    let sidebarText = document.createTextNode(oper);

    sidebarControl.setAttribute("id", `side-${sideId}`);


    sidebarControl.style.backgroundColor ="#7c996e";
    sidebarControl.style.borderRadius = "5px";
    sidebarControl.style.padding = "1em";
    sidebarControl.style.color = "#ffffff";
    sidebarControl.style.fontWeight = "bold";
    sidebarControl.style.boxShadow = "0px 5px 0 rgb(94, 113, 84), 0px 5px 10px rgba(0,0,0,0.1)";
    sidebarControl.style.textAlign = "center";

    sidebarControl.appendChild(sidebarText);
    sidebar.appendChild(sidebarControl);

    sideId++;
}

const SCIFI = ["Rad","Deg","x!", "Inv", "sin", "ln", "π", "cos", "log", "e", "tan", "sqrt", "Ans", "EXP", "x(y)"];
let sciId = 0;

let scifi = document.createElement("div");
scifi.setAttribute("id", "scifilab");

scifi.style.display = "grid";
scifi.style.gridTemplateColumns = "repeat(3,31%)";
scifi.style.marginTop = "1em";
scifi.style.borderRadius = "5px";
scifi.style.backgroundColor = "rgba(0,0,0,0.1)";
scifi.style.border = "1px solid rgba(0,0,0,0.1)";
scifi.style.gap = "1em";
scifi.style.padding = "1em";

for (scifun of SCIFI){
    let scifiCalc = document.createElement("div");
    let scifiCalcText = document.createTextNode(scifun);

    scifiCalc.setAttribute("id", `side-${sciId}`);

    scifiCalc.style.backgroundColor ="#7c996e";
    scifiCalc.style.borderRadius = "5px";
    scifiCalc.style.padding = "1em";
    scifiCalc.style.color = "#ffffff";
    scifiCalc.style.fontWeight = "bold";
    scifiCalc.style.boxShadow = "0px 5px 0 rgb(94, 113, 84), 0px 5px 10px rgba(0,0,0,0.1)";
    scifiCalc.style.textAlign = "center";


    scifiCalc.appendChild(scifiCalcText);
    scifi.appendChild(scifiCalc);

    sciId++;
}

calcScreen.appendChild(calcScreenText);
CalculatorBody.appendChild(calcScreen);
simpleTouches.appendChild(numberTouches);
simpleTouches.appendChild(sidebar);
simpleTouches.appendChild(control);
CalculatorBody.appendChild(simpleTouches);
CalculatorBody.appendChild(scifi);

main.appendChild(CalculatorBody);

let onScreenString = "";

function computeResult(str){
    return Function('return ' + str)();
}

function fetchNumber(touch){

    let yoplet = touch.innerText;

    if (yoplet == "="){
        displayScreen(computeResult(onScreenString));


    } else if (yoplet == "AC"){
        onScreenString = "";
        displayScreen(onScreenString);
    } else if (yoplet == /(\+|\*|\-|\\)/ ){
        onScreenString += " " + yoplet + " ";
        displayScreen(onScreenString);
    } else if (yoplet == "%"){
        
    }
      else { 
        onScreenString += yoplet; 
        displayScreen(onScreenString);
    }

    console.log(yoplet);
}

function displayScreen(what){
    document.getElementById("screen").innerText = what;  
}

let mainTouches = document.getElementById("touches");

mainTouches.addEventListener('click', (e) => fetchNumber(e.target));
