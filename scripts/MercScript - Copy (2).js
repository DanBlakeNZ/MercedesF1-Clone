
//Slider funcationality//

//The currently visable slider image id//
    var activeSlider ="";

//Position of the currently visable slider image via data-pos//
    var sliderPos = "";

//Sets the active slider, and defines what happens when each slider button is clicked//
    document.getElementById("slider-button-1").onclick = function(){
        activeSlider = "slider1";
        sliderClick()
    }

    document.getElementById("slider-button-2").onclick = function(){
        activeSlider = "slider2";
        sliderClick();
    }

    document.getElementById("slider-button-3").onclick = function(){
        activeSlider = "slider3";
        sliderClick()
    }

    document.getElementById("slider-button-4").onclick = function(){
        activeSlider = "slider4";
        sliderClick()
    }

    document.getElementById("slider-button-5").onclick = function(){
        activeSlider = "slider5";
        sliderClick()
    }

//function that gets the data-pos from the html docuement for the active slider image. This will be used to change the slider image displayed//
    function getPos(){
        sliderPos = document.getElementById(activeSlider).getAttribute("data-pos");
    }

//function that changes the slider image that is currently displayed//  
    function changeSliderPos(){
        document.getElementById("slider-wrapper").style.transform = "translate3d("+sliderPos+", 0px, 0)";
    }

//Function that removes the active class from all buttons and slider text is no longer displayed//
    function removeClass(){
        document.getElementById("slider-button-1").className = "slider-nav-first"; 
        document.getElementById("slider-button-2").className = "slider-nav";
        document.getElementById("slider-button-3").className = "slider-nav"; 
        document.getElementById("slider-button-4").className = "slider-nav";
        document.getElementById("slider-button-5").className = "slider-nav-last";
        
        document.getElementById("slider1-text-wrapper").style.display = "none";
        document.getElementById("slider2-text-wrapper").style.display = "none";
        document.getElementById("slider3-text-wrapper").style.display = "none";
        document.getElementById("slider4-text-wrapper").style.display = "none";
        document.getElementById("slider5-text-wrapper").style.display = "none";
    }

//Function that checks which slider is active, and will highlight the corosponding button//
    function activeSliderButton(){

        if (activeSlider == "slider1") {
            document.getElementById("slider-button-1").className = "active-slider slider-nav-first"; 
            
        }

        if (activeSlider == "slider2") {
            document.getElementById("slider-button-2").className = "active-slider slider-nav";
        }

        if (activeSlider == "slider3") {
            document.getElementById("slider-button-3").className = "active-slider slider-nav";
        }

        if (activeSlider == "slider4") {
            document.getElementById("slider-button-4").className = "active-slider slider-nav";
        }

        if (activeSlider == "slider5") {
            document.getElementById("slider-button-5").className = "active-slider slider-nav-last";
        }  

    }


//function that check which slider is active and displays the relevent slider's text. Needs to be seperate from the above so animation delays can be included//
    function activeSliderText(){
            if (activeSlider == "slider1") {
                document.getElementById("slider1-text-wrapper").style.display = "block";
            }

            if (activeSlider == "slider2") {
                document.getElementById("slider2-text-wrapper").style.display = "block";
            }

            if (activeSlider == "slider3") {
                document.getElementById("slider3-text-wrapper").style.display = "block";
            }

            if (activeSlider == "slider4") {
                document.getElementById("slider4-text-wrapper").style.display = "block";
            }

            if (activeSlider == "slider5") {
                document.getElementById("slider5-text-wrapper").style.display = "block";
            }  

        }

//runs the following  functions each time a slider button is clicked//
    function sliderClick(){
        getPos();
        setTimeout(changeSliderPos, 400);//give a delay to the slider image//
        removeClass();
        activeSliderButton();
        setTimeout(activeSliderText, 650);//give a delay to the slider text//
        goToNextItem(activeSlider)
    }

function goToNextItem(activeSlider){
    if (activeSlider == 5){
        activeSlider = 0;
    }else{
    activeSlider = activeSlider +1
    };
    
    setTimeout(sliderClick, 2000);
}



