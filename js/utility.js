function UpdateSlide(){
    document.getElementById("sliderImg").setAttribute("src","./assets/img/"+sliderImages[sliderCurrentIndex]);
}
function PrevSlide(){
    if(sliderCurrentIndex>0)
        sliderCurrentIndex--;
        
    UpdateSlide();
}