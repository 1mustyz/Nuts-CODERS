console.log('it works');
const body = document.querySelector('body');
const subHead = document.querySelector('.sub-head');
const header = document.querySelector('.header');
const mainHead = document.querySelector('.main-head');
const keepInTouch = document.querySelector('.keep-in-touch');

body.onscroll = ()=>{
   
    if( document.documentElement.scrollTop > 30 ){
        subHead.classList.add('scroll');
        mainHead.classList.add('transparent');        
        //mainHead.classList.add('scroll');
    }else if(document.documentElement.scrollTop < 30){
        subHead.classList.remove('scroll');
        mainHead.classList.remove('transparent');        
       // mainHead.classList.remove('fixed');
        
    }     
    
    
    console.log(document.documentElement.scrollTop);
}