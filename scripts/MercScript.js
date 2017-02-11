//Nav Menu functionality//

//Variable that keeps track of which subNav menu is open//
var currentSubNav = "";

//functions that will show or hide the relevent submenu//
function showSubNav() {
     document.getElementById(currentSubNav).style.display = 'block';
}

function hideSubNav() {
    document.getElementById(currentSubNav).style.display = 'none'; 
}

document.getElementById("season-container").onmouseover = function(){
    currentSubNav = "sub-nav-season";
    showSubNav();   
};
document.getElementById("season-container").onmouseout= function(){
    hideSubNav();
};
document.getElementById("sub-nav-season").onmouseover = function(){
    currentSubNav = "sub-nav-season";
    showSubNav(); 
};
document.getElementById("sub-nav-season").onmouseout= function(){
    hideSubNav();
};
document.getElementById("team-container").onmouseover = function(){
    currentSubNav = "sub-nav-team";
    showSubNav();   
};
document.getElementById("team-container").onmouseout= function(){
    hideSubNav();
};
document.getElementById("sub-nav-team").onmouseover = function(){
    currentSubNav = "sub-nav-team";
    showSubNav(); 
};
document.getElementById("sub-nav-team").onmouseout= function(){
    hideSubNav();
};
document.getElementById("car-container").onmouseover = function(){
    currentSubNav = "sub-nav-car";
    showSubNav();   
};
document.getElementById("car-container").onmouseout= function(){
    hideSubNav();
};

document.getElementById("sub-nav-car").onmouseover = function(){
    currentSubNav = "sub-nav-car";
    showSubNav(); 
};
document.getElementById("sub-nav-car").onmouseout= function(){
    hideSubNav();
};
document.getElementById("heritage-container").onmouseover = function(){
    currentSubNav = "sub-nav-heritage";
    showSubNav();   
};
document.getElementById("heritage-container").onmouseout= function(){
    hideSubNav();
};

document.getElementById("sub-nav-heritage").onmouseover = function(){
    currentSubNav = "sub-nav-heritage";
    showSubNav(); 
};
document.getElementById("sub-nav-heritage").onmouseout= function(){
    hideSubNav();
};
document.getElementById("partners-container").onmouseover = function(){
    currentSubNav = "sub-nav-partners";
    showSubNav();   
};
document.getElementById("partners-container").onmouseout= function(){
    hideSubNav();
};

document.getElementById("sub-nav-partners").onmouseover = function(){
    currentSubNav = "sub-nav-partners";
    showSubNav(); 
};
document.getElementById("sub-nav-partners").onmouseout= function(){
    hideSubNav();
};


//Navigation menu search box funcationality//
var search = 0; //Is the search box active(displayed = 1) or deactive (not displayed = 0)//

document.getElementById("search-icon").onclick = function(){
    if (search == 0){
        document.getElementById("search-icon").className = "search-active";
        document.getElementById("search-box").className = "search-box-active";
        search = 1;
    }else if (search == 1){
        document.getElementById("search-icon").className = "search-deactive";
        document.getElementById("search-box").className = "search-box-deactive";
        search = 0;        
    }
}



//Slider funcationality//

//Variable that keeps track of the currently visable slider ie slider1, slider2 etc//
var activeSlider =1;

//Variable that keeps track of the previously visable slider - is used for animating the the text on transition to the next slider.//
var oldActiveSlider =1;

/*Defines what happens when each slider button is clicked;
    - the automatic slider timer resets. 
    - the activeSlider variable is updated to corospond with the relevent slider button that was just clicked. 
    -The sliderUpdate function runs which will update the slider position, text and make the button active*/


document.getElementById("slider-button-1").onclick = function(){
    resetTimer();//resets the automatic transition timer.
    oldActiveSlider = activeSlider;//sets the oldActiveSlider variable.//
    activeSlider = 1;//update the activeSlider variable//
    sliderUpdate();//runs the sliderUpdate function//
}

document.getElementById("slider-button-2").onclick = function(){
    resetTimer();
    oldActiveSlider = activeSlider;
    activeSlider = 2;
    sliderUpdate();
}

document.getElementById("slider-button-3").onclick = function(){
    resetTimer();
    oldActiveSlider = activeSlider;
    activeSlider = 3;
    sliderUpdate();
}

document.getElementById("slider-button-4").onclick = function(){
    resetTimer();
    oldActiveSlider = activeSlider;
    activeSlider = 4;
    sliderUpdate();
}

document.getElementById("slider-button-5").onclick = function(){
    resetTimer();
    oldActiveSlider = activeSlider;
    activeSlider = 5;
    sliderUpdate();
}
    
//Function that gets the data-pos from the html docuement for the active slider image, and then uses that variable to change the slider image that is currently displayed//  
function changeSliderPos(){
    var sliderPos = document.getElementById("slider"+activeSlider).getAttribute("data-pos");
    document.getElementById("slider-wrapper").style.transform = "translate3d("+sliderPos+"px, 0px, 0)";
}

//Function that removes the 'active' class from all buttons and the slider's text is no longer displayed//
function removeClass(){
    document.getElementById("slider-button-1").className = "slider-nav-first"; 
    document.getElementById("slider-button-2").className = "slider-nav";
    document.getElementById("slider-button-3").className = "slider-nav"; 
    document.getElementById("slider-button-4").className = "slider-nav";
    document.getElementById("slider-button-5").className = "slider-nav-last";
}
function noDisplay(){
    document.getElementById("slider1-text-wrapper").style.display = "none";
    document.getElementById("slider2-text-wrapper").style.display = "none";
    document.getElementById("slider3-text-wrapper").style.display = "none";
    document.getElementById("slider4-text-wrapper").style.display = "none";
    document.getElementById("slider5-text-wrapper").style.display = "none";
}

//Function that checks which slider is active, and will then make the corosponding button 'active' by updating its class//
function activeSliderButton(){
    if (activeSlider == 1) {
        document.getElementById("slider-button-1").className = "active-slider slider-nav-first";     
    }
    if (activeSlider == 2) {
        document.getElementById("slider-button-2").className = "active-slider slider-nav";
    }
    if (activeSlider == 3) {
        document.getElementById("slider-button-3").className = "active-slider slider-nav";
    }
    if (activeSlider == 4) {
        document.getElementById("slider-button-4").className = "active-slider slider-nav";
    }
    if (activeSlider == 5) {
        document.getElementById("slider-button-5").className = "active-slider slider-nav-last";
    }  
}


//Function that checks which slider is active and displays the relevent slider's text. Note - this isn't included in the above function, as it needs seperate 'setTimeout' delays applied to before it should run//
function activeSliderText(){
    if (activeSlider == 1) {
        document.getElementById("slider1-text-wrapper").style.display = "block";
    }
    if (activeSlider == 2) {
        document.getElementById("slider2-text-wrapper").style.display = "block";
    }
    if (activeSlider == 3) {
        document.getElementById("slider3-text-wrapper").style.display = "block";
    }
    if (activeSlider == 4) {
        document.getElementById("slider4-text-wrapper").style.display = "block";
    }
    if (activeSlider == 5) {
        document.getElementById("slider5-text-wrapper").style.display = "block";
    }  
}

//Runs the following functions (above) each time a slider position changes//
function sliderUpdate(){
    sliderTextOut();//slides the currently displayed slider's text out//        
    removeClass();//removes the 'active' class from the sliders nav buttons//
    setTimeout(noDisplay,150);//hides all slider text//
    setTimeout(changeSliderPos, 150);//moves the the required slider//
    activeSliderButton();//gives the relevent slider nav button an 'active' class//
    setTimeout(activeSliderText, 430);//displays the relevent sliders text//
    setTimeout(sliderTextIn, 480);//slides in the relevent sliders text//
}


//The following code gives the slider its automatic movement//

//Variable that contains the time interval until the next slider is displayed//
var timer;

//Function that starts a 7 secound timer that will count down to 0. When the timer reaches 0 the autoSlider function will run which will move the slider on to the next slide//
function sliderTimer(){
    timer = window.setInterval(autoSlider,7000);
}
//A function that resets the timer//
function resetTimer() {
    window.clearInterval(timer);
    sliderTimer();
}

/*Function that checks the 'activeSlider' variable to see which slider is currently displayed. If any of the first 4 sliders are active it will increase the 'activeSlider' variable by 1, then run the 'sliderUpdate' function to move on to the next slide. 
If the slider is on the final slide then it will set the 'activeSlider' variable' back to 1 again, and then run the 'sliderUpdate' function to move it back to the first slide*/
function autoSlider(){
    if (activeSlider < 5){
        activeSlider = (activeSlider) +1;
        oldActiveSlider = activeSlider -1;
        sliderUpdate(); 
        resetTimer();
    }else{
        activeSlider = 1;
        oldActiveSlider = 5;
        sliderUpdate(); 
        resetTimer();
    }
}

//Starts the initial timer on page load//
sliderTimer();

//end of automatic slider movement code//





//Begining of slider text animation//

//Create a variable that stores each object with the relevent class name. They are stored as an array//
var line1 = document.getElementsByClassName("slider-text-line1-container");
var line2 = document.getElementsByClassName("slider-text-line2-container");
var line3 = document.getElementsByClassName("slider-text-line3-container");
var readMore = document.getElementsByClassName("read-more-button");

//If slider 4 is active also slide in it's 3rd line of text, otherwise just slide in the two lines of slider text//
function sliderTextIn(){
    if (activeSlider == 4){
        line1[(activeSlider-1)].style.left = '0';
        line2[(activeSlider-1)].style.left = '0';
        line3[0].style.left = '0';
        readMore[(activeSlider-1)].style.left = '0';
    }else{        
        line1[(activeSlider-1)].style.left = '0';
        line2[(activeSlider-1)].style.left = '0';
        readMore[(activeSlider-1)].style.left = '0';
    };
};

//If slider 4 is also slide out the 3rd line of text, otherwise just slide out the two lines of slider text//
function sliderTextOut(){
    if (oldActiveSlider == 4){
        line1[3].removeAttribute("style");
        line2[3].removeAttribute("style");
        line3[0].removeAttribute("style");
        readMore[(oldActiveSlider-1)].removeAttribute("style");
    }else{
        line1[(oldActiveSlider-1)].removeAttribute("style");
        line2[(oldActiveSlider-1)].removeAttribute("style");
        readMore[(oldActiveSlider-1)].removeAttribute("style");
    }
};

//Provides the initial animation on page load//
 setTimeout(sliderTextIn,400);

//End of slider text animation//

//Slider arrows//

document.getElementById("previous-slide").onclick = function(){
    if (activeSlider == 1){
        resetTimer();
        oldActiveSlider = 1;
        activeSlider = 5;
        sliderUpdate();
    }else{
        resetTimer();
        oldActiveSlider = activeSlider;
        activeSlider = (activeSlider-1);
        sliderUpdate();   
    }
}

document.getElementById("next-slide").onclick = function(){
    if (activeSlider == 5){
        resetTimer();
        oldActiveSlider = 5;
        activeSlider = 1;
        sliderUpdate();
    }else{
        resetTimer();
        oldActiveSlider = activeSlider;
        activeSlider = (activeSlider+1);
        sliderUpdate();   
    }
}


//Aritcle highlight animation//

document.getElementById("article2").onmouseover = function(){
    document.getElementById("article2-text").style.backgroundPosition = "0 -3071px"
}

document.getElementById("article2").onmouseout = function(){
    document.getElementById("article2-text").style.backgroundPosition = "0px -1985px";
}

document.getElementById("article3").onmouseover = function(){
    document.getElementById("article3-text").style.display = "block";
}

document.getElementById("article3").onmouseout = function(){
    document.getElementById("article3-text").style.display = "none";
}

document.getElementById("article4").onmouseover = function(){
    document.getElementById("article4-text").style.display = "block";
}

document.getElementById("article4").onmouseout = function(){
    document.getElementById("article4-text").style.display = "none";
}


//widget functionality starts//

var activeWidget = 1;//variable that keeps track of which widget is active//

//function that clears the nav-active//
function clearActiveWidget(){
    document.getElementById("widget-nav-next-race").className = "widget-nav  widget-nav-deactive";
    document.getElementById("next-race-widget-container").style.display = "none";
    document.getElementById("latest-results-widget-container").style.display = "none";
    document.getElementById("standings-widget-container").style.display = "none";
    document.getElementById("widget-nav-results").className = "widget-nav  widget-nav-deactive";
    document.getElementById("widget-nav-standings").className = "widget-nav  widget-nav-deactive";
    
}

function checkActiveWidget(){
    if (activeWidget == 1){
        document.getElementById("widget-nav-next-race").className = "widget-nav widget-nav-active";
        document.getElementById("next-race-widget-container").style.display = "block";
        document.getElementById("widget-container").style.height = "315px"
    }
    
    if (activeWidget == 2){
        document.getElementById("widget-nav-results").className = "widget-nav widget-nav-active";
        document.getElementById("latest-results-widget-container").style.display = "block";
        document.getElementById("widget-container").style.height = "650px";
    }
    
    if (activeWidget == 3){
        document.getElementById("widget-nav-standings").className = "widget-nav widget-nav-active";
        document.getElementById("widget-container").style.height = "650px";
        document.getElementById("standings-widget-container").style.display = "block";
    }
    
}



document.getElementById("widget-nav-next-race").onclick = function(){
    clearActiveWidget();
    activeWidget = 1;
    checkActiveWidget();
    moveModulesUp();
}

document.getElementById("widget-nav-results").onclick = function(){
    clearActiveWidget();
    activeWidget = 2;
    checkActiveWidget();
    moveModulesDown();
}

document.getElementById("widget-nav-standings").onclick = function(){
    clearActiveWidget();
    activeWidget = 3;
    checkActiveWidget();
    moveModulesDown();
}

/*function that aranges the modules when the widget expands*/
function moveModulesDown(){
    document.getElementById("module1").style.bottom = "0px";
    document.getElementById("module2").style.bottom = "0px";
    document.getElementById("module3").style.right = "0px";
    document.getElementById("module4").style.right = "0px";
    document.getElementById("module5").style.left = "0px";
    document.getElementById("module5").style.bottom = "0px";
    document.getElementById("module6").style.left = "0px";
    document.getElementById("module6").style.bottom = "0px";
    document.getElementById("module7").style.right = "0px";
    document.getElementById("module8").style.right = "0px";
}

/*function that aranges the modules when the widget retracts*/
function moveModulesUp(){
    document.getElementById("module1").style.bottom = "335px";
    document.getElementById("module2").style.bottom = "335px";
    document.getElementById("module3").style.right = "650px";
    document.getElementById("module4").style.right = "650px"
    document.getElementById("module5").style.left = "650px";
    document.getElementById("module5").style.bottom = "335px";
    document.getElementById("module6").style.left = "650px";
    document.getElementById("module6").style.bottom = "335px";
    document.getElementById("module7").style.right = "650px";
    document.getElementById("module8").style.right = "650px"
}


//Standings widget functationality//

//variable that keeps track of which standings table is active//
var activeStandings = 1;

//function that shows the driver standings table//
function driverStandings(){
    document.getElementById("driver-standings-heading").style.backgroundColor = "#141414";
    document.getElementById("driver-standings-heading").style.borderLeftColor = "#141414";
    document.getElementById("constructors-standings-heading").style.backgroundColor = "#666666";
    document.getElementById("constructors-standings-heading").style.borderLeftColor = "#666666";
    document.getElementById("constructors-standings-heading").style.borderRightColor = "#666666";
    document.getElementById("standings-table-container").style.left = "0px";
    document.getElementById("next-icon").style.backgroundPosition = "0 -2987px";
    document.getElementById("prev-icon").style.backgroundPosition = "0 -2960px";
    activeStandings = 1;
}

//function that shows the constructors standings table//
function constructorsStandings(){
    document.getElementById("constructors-standings-heading").style.backgroundColor = "#141414";
    document.getElementById("constructors-standings-heading").style.borderLeftColor = "#141414";
    document.getElementById("constructors-standings-heading").style.borderRightColor = "#141414";
    document.getElementById("driver-standings-heading").style.backgroundColor = "#666666";
    document.getElementById("driver-standings-heading").style.borderLeftColor = "#666666";
    document.getElementById("standings-table-container").style.left = "-610px";
    document.getElementById("prev-icon").style.backgroundPosition = "0 -2879px";
    document.getElementById("next-icon").style.backgroundPosition = "0 -2933px";
    activeStandings = 2;
}

document.getElementById("driver-standings-heading").onclick = function(){
    driverStandings();    
}

document.getElementById("constructors-standings-heading").onclick = function(){
    constructorsStandings();
}

//standing navigation icon functationality//
document.getElementById("next-icon").onclick = function(){
    constructorsStandings();
}

document.getElementById("prev-icon").onclick = function(){
    driverStandings();
}


//scripts that details what the icon should do in each situation
document.getElementById("next-icon").onmouseover = function(){
    if (activeStandings == 1){
        document.getElementById("next-icon").style.backgroundPosition = "0 -2906px";
    }
}

document.getElementById("next-icon").onmouseout = function(){
    if (activeStandings == 1){
        document.getElementById("next-icon").style.backgroundPosition = "0 -2987px";
    }
}

document.getElementById("prev-icon").onmouseover = function(){
    if (activeStandings == 2){
        document.getElementById("prev-icon").style.backgroundPosition = "0 -3044px";
    }
}

document.getElementById("prev-icon").onmouseout = function(){
    if (activeStandings == 2){
        document.getElementById("prev-icon").style.backgroundPosition = "0 -2879px";
    }
}

document.getElementById("driver-standings-heading").onmouseover = function() {
    if (activeStandings == 2){    
        document.getElementById("driver-standings-heading").style.backgroundColor = "#141414";
        document.getElementById("driver-standings-heading").style.borderLeftColor = "#141414";
    }
}

document.getElementById("driver-standings-heading").onmouseout = function() {
    if (activeStandings == 2){    
        document.getElementById("driver-standings-heading").style.backgroundColor = "#666666";
        document.getElementById("driver-standings-heading").style.borderLeftColor = "#666666";
    }
}

document.getElementById("constructors-standings-heading").onmouseover = function() {
    if (activeStandings == 1){    
        document.getElementById("constructors-standings-heading").style.backgroundColor = "#141414";
        document.getElementById("constructors-standings-heading").style.borderLeftColor = "#141414";
        document.getElementById("constructors-standings-heading").style.borderRightColor = "#141414";
    }
}

document.getElementById("constructors-standings-heading").onmouseout = function() {
    if (activeStandings == 1){    
        document.getElementById("constructors-standings-heading").style.backgroundColor = "#666666";
        document.getElementById("constructors-standings-heading").style.borderLeftColor = "#666666";
        document.getElementById("constructors-standings-heading").style.borderRightColor = "#666666";
    }
}


/*social counter functationality*/

document.getElementById("facebook-count-wrapper").onmouseover = function(){
   document.getElementById("facebook-count").style.display = "none";
   document.getElementById("facebook-cta").style.display = "block";
}

document.getElementById("facebook-count-wrapper").onmouseout = function(){
   document.getElementById("facebook-count").style.display = "block";
   document.getElementById("facebook-cta").style.display = "none";
}

document.getElementById("twitter-count-wrapper").onmouseover = function(){
   document.getElementById("twitter-count").style.display = "none";
   document.getElementById("twitter-cta").style.display = "block";
}

document.getElementById("twitter-count-wrapper").onmouseout = function(){
   document.getElementById("twitter-count").style.display = "block";
   document.getElementById("twitter-cta").style.display = "none";
}

document.getElementById("youtube-count-wrapper").onmouseover = function(){
   document.getElementById("youtube-count").style.display = "none";
   document.getElementById("youtube-cta").style.display = "block";
}

document.getElementById("youtube-count-wrapper").onmouseout = function(){
   document.getElementById("youtube-count").style.display = "block";
   document.getElementById("youtube-cta").style.display = "none";
}

document.getElementById("google-count-wrapper").onmouseover = function(){
   document.getElementById("google-count").style.display = "none";
   document.getElementById("google-cta").style.display = "block";
}

document.getElementById("google-count-wrapper").onmouseout = function(){
   document.getElementById("google-count").style.display = "block";
   document.getElementById("google-cta").style.display = "none";
}

document.getElementById("instagram-count-wrapper").onmouseover = function(){
   document.getElementById("instagram-count").style.display = "none";
   document.getElementById("instagram-cta").style.display = "block";
}

document.getElementById("instagram-count-wrapper").onmouseout = function(){
   document.getElementById("instagram-count").style.display = "block";
   document.getElementById("instagram-cta").style.display = "none";
}


document.getElementById("top").onmouseover = function(){
    document.getElementById("top-arrow").style.backgroundPosition = "0-3302px";
}

document.getElementById("top").onmouseout = function(){
    document.getElementById("top-arrow").style.backgroundPosition = "0 -4216px";
}




