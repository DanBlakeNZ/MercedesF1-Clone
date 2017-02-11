var clickedButton ="";
var sliderPos = ""


document.getElementById("slider-button-1").onclick = function(){
    clickedButton = "slider-button-1";
    getPos();
    changeSliderPos()
}

document.getElementById("slider-button-2").onclick = function(){
    clickedButton = "slider-button-2";
    getPos();
    changeSliderPos()
}

document.getElementById("slider-button-3").onclick = function(){
    clickedButton = "slider-button-3";
    getPos();
    changeSliderPos()
}

document.getElementById("slider-button-4").onclick = function(){
    clickedButton = "slider-button-4";
    getPos();
    changeSliderPos()
}

document.getElementById("slider-button-5").onclick = function(){
    clickedButton = "slider-button-5";
    getPos();
    changeSliderPos()
}

function getPos(){
    sliderPos = document.getElementById(clickedButton).getAttribute("data-pos");
}

    
function changeSliderPos(){
    document.getElementById("slider-wrapper").style.transform = "translate3d("+sliderPos+", 0px, 0)";
}


































/*close

var clickedButton = "";
var sliderPos = "0px"

function getButtonId(id){
    clickedButton = id;
    alert(clickedButton)
    showPos()
} 

function showPos(){
    var buttonId = document.getElementById(clickedButton);
    sliderPos = buttonId.getAttribute("data-pos");
    alert(sliderPos);
}

document.getElementById(clickedButton).onclick = function(){
    document.getElementById("slider-wrapper").style.transform = "translate3d("+ sliderPos +", 0px, 0)";
}

*/


/*

WORKING SLIDER

//Sets the active button//
var activeButton = 1;


//Function that removes the active class from all buttons//
function removeClass(){
    document.getElementById("slider-button-1").className = "slider-nav-first"; 
    document.getElementById("slider-button-2").className = "slider-nav";
    document.getElementById("slider-button-3").className = "slider-nav"; 
    document.getElementById("slider-button-4").className = "slider-nav";
    document.getElementById("slider-button-5").className = "slider-nav-last";   
}


//function that checks which button is clicked via tha activeButton variable and updates the class to active-slider//
function activeClass(){
    
    if (activeButton == 1) {
        document.getElementById("slider-button-1").className = "active-slider slider-nav-first"; 
    }
    
    if (activeButton == 2) {
        document.getElementById("slider-button-2").className = "active-slider slider-nav";
    }
    
    if (activeButton == 3) {
        document.getElementById("slider-button-3").className = "active-slider slider-nav";   
    }
    
    if (activeButton == 4) {
        document.getElementById("slider-button-4").className = "active-slider slider-nav";
    }
    
    if (activeButton == 5) {
        document.getElementById("slider-button-5").className = "active-slider slider-nav-last";    
    }  
    
}


//on clicking each button they will change the slider position to the releven image, update the activeButton variable, and run the removeClass and activeClass functions so as to ensure the right button is highlighted/shown as active//
document.getElementById("slider-button-1").onclick = function(){
    document.getElementById("slider-wrapper").style.transform = "translate3d(0px, 0px, 0)";
    activeButton = 1;
    removeClass()
    activeClass();
}

document.getElementById("slider-button-2").onclick = function(){
    document.getElementById("slider-wrapper").style.transform = "translate3d(-1280px, 0px, 0)";
    activeButton = 2;
    removeClass()
    activeClass();
}

document.getElementById("slider-button-3").onclick = function(){
    document.getElementById("slider-wrapper").style.transform = "translate3d(-2560px, 0px, 0)";
    activeButton = 3;
    removeClass()
    activeClass();
}

document.getElementById("slider-button-4").onclick = function(){
    document.getElementById("slider-wrapper").style.transform = "translate3d(-3840px, 0px, 0)";
    activeButton = 4;
    removeClass()
    activeClass();
}

document.getElementById("slider-button-5").onclick = function(){
    document.getElementById("slider-wrapper").style.transform = "translate3d(-5120px, 0px, 0)";
    activeButton = 5;
    removeClass()
    activeClass();
}





*/















/*
$("#slider-button-1").click(function(){
   $(".slider-content").css("transform", "translate3d(0px, 0, 0)");
    
    
})

$("#slider-button-2").click(function(){
   $(".content").css("right","1280px");
    $(".slider-content").css("transform", "translate3d(-1280px, 0, 0)");
    
})

$("#slider-button-3").click(function(){
   $(".slider-content").css("transform", "translate3d(-2560px, 0, 0)");
    
})

$("#slider-button-4").click(function(){
   $(".slider-content").css("transform", "translate3d(-3840px, 0, 0)");
    
})

$("#slider-button-5").click(function(){
   $(".slider-content").css("transform", "translate3d(-5120px, 0, 0)");
    
})

*/