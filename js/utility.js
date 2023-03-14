function UpdateSlide(){
    document.getElementById("sliderImg").setAttribute("src","./assets/img/"+sliderImages[sliderCurrentIndex]);
}
function PrevSlide(){
    if(sliderCurrentIndex>0)
        sliderCurrentIndex--;

    UpdateSlide();
}
function NextSlide(){
    if(sliderCurrentIndex<(sliderImages.length-1))
        sliderCurrentIndex++;

    UpdateSlide();
}