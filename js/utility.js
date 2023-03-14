/**
 * Function used to update the image showed (as active) in the slider.
 */
function UpdateSlideShowed(){
    document.getElementById("sliderImg").setAttribute("src","./assets/img/"+sliderImages[sliderCurrentIndex]);
}

/**
 * Function used to decrease the index of the active image in the slider, and when arrive to 0 go to the last image of the array.
 */
function PrevSlide(){
    if(sliderCurrentIndex>0)
        sliderCurrentIndex--;
    else
        sliderCurrentIndex = sliderImages.length-1;
    UpdateSlideShowed();
}

/**
 * Function used to increase the index of the active image in the slider, and when arrive to the last element go to the first image of the array.
 */
function NextSlide(){
    if(sliderCurrentIndex<(sliderImages.length-1))
        sliderCurrentIndex++;
    else
        sliderCurrentIndex = 0;
    UpdateSlideShowed();
}

function AddPreviewImages(){
    const preview = document.getElementsByClassName("preview")[0];
    for(let i=0; i<sliderImages.length; i++){
        preview.innerHTML += '<div class="imgCont"><img id="previewImg_'+i+'" src="./assets/img/'+sliderImages[i]+'" alt="Immagine '+i+' della preview"></div>';
    }
}