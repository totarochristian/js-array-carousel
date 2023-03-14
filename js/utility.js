function UpdateSlideShowed(){
    document.getElementById("sliderImg").setAttribute("src","./assets/img/"+sliderImages[sliderCurrentIndex]);
}

function PrevSlide(){
    if(sliderCurrentIndex>0)
        sliderCurrentIndex--;
    else
        sliderCurrentIndex = sliderImages.length-1;
    UpdateSlideShowed();
}

function NextSlide(){
    if(sliderCurrentIndex<(sliderImages.length-1))
        sliderCurrentIndex++;
    else
        sliderCurrentIndex = 0;
    UpdateSlideShowed();
}