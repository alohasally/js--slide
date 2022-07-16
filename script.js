//varials

const sliderWrapper = document.getElementsByClassName('container'),
        sliderContainer = document.getElementsByClassName('slider-container'),
        slides = document.getElementsByClassName('slide'),
        slidesCount = slides.length,
        currentIndex = 0,
        topHeight = 0,
        navPrev = document.getElementById('prev'),
        navNext = document.getElementById('next');


//slides height
// topHeight = slides[0].offsetHeight;?
function caculateTallestSlide(){
 for(let i = 0; i < slidesCount; i++){
    if(slides[i].offsetHeight > topHeight){
        topHeight = slides[i].offsetHeight;
    }
    
 }
   sliderWrapper.style.height = topHeight + 'px';
   sliderContainer.style.height = topHeight + 'px';
}
 caculateTallestSlide();

 //slides arrange
 for(let i=0; i<slidesCount; i++){
    slides[i].style.left = i*100 + '%';
 }

 //slides move forward 
 function goToSlide(idx){
        sliderContainer[i].style.left = x*-100 + '%';
        sliderContainer[i].classLi
        
        // updateNav();
 }

 //button update function 
function updateNav(){
    if(currentIndex == 0){
        navPrev.classList.add('disabled')
    }else{
        navPrev.classList.remove('disabled')
    }
    //last slide
    if(currentIndex == slidesCount - 1){
        navNext.classList.add('disabled')
    }else{
        navNext.classList.remove('disabled')
    }
}

//button slide moving 
navPrev.addEventListener('click',function(ev){
    ev.defaultPrevented();
    //goToSlide(currentIndex - 1);
    //if it is not first slide
    if(currentIndex > 0){
        goToSlide(currentIndex - 1);
    }else{ //if it is first slide go to last slid
        goToSlide(slidesCount -1)
    } 
});
navPrev.addEventListener('click',function(){
    ev.defaultPrevented();
    //goToSlide(currentIndex + 1);
    //if it is not last slide
    if(currentIndex > slidesCount - 1){
        goToSlide(currentIndex + 1);
    }else{ //if it is last slide go to first slid
        goToSlide(0)
    } 
});

//first slide
goToSlide(0);