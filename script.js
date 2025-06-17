var cursor = document.querySelector(`#cursor`);
var blur = document.querySelector(`#cursor-blur`);
var allHeading = document.querySelectorAll("#nav h4");
var foooter = document.querySelectorAll ("#footer h1");

document.addEventListener(`mousemove`, function(move){
    cursor.style.left = move.x - 11 + `px`;
    cursor.style.top = move.y - 11 + `px`;
    blur.style.left = move.x - 150 + `px`;
    blur.style.top = move.y - 150 + `px`;
})


allHeading.forEach(function(Element){
   Element.addEventListener("mouseenter" ,function(){
    cursor.style.scale = 3.5 ,
    cursor.style.border = `1px solid #fff` ,
    cursor.style.backgroundColor = `transparent` 
   })

   Element.addEventListener("mouseleave" ,function(){
    cursor.style.scale = 1 ,
    cursor.style.border = `0px solid #95c11e` ,
    cursor.style.backgroundColor = `#95c11e` 
   })
})


gsap.to(`#nav`, {
    backgroundColor : `black`,
    height : `100px`,
    duration : 0.5,
    scrollTrigger : {
        trigger : `#nav`,
        scroller : `body`,
        // markers : true,
        start : `top -10%`,
        end : `top -11%`,
        scrub : 2
    } 
})


gsap.to(`#main`, {
    backgroundColor : `#000`,
    scrollTrigger : {
        trigger : `#main`,
        scroller : `body`,
        // markers : true
        start : `top -25%`,
        end : `top -70%`,
        scrub : 2
    }        
})

gsap.from(`#about-us img ,#about-cont`,{
    y: 90 ,
    opacity : 0 ,
    duration : 0.8 ,
    stagger : 0.5,
    scrollTrigger :{
        trigger : `#about-us`,
        scroller : `body` ,
        // markers : true ,
        start : `top 60%` ,
        end : `top 56%`,
        scrub : 1
    }    
})

gsap.from(`.cards`,{
    scale : 1,
    opacity : 0 ,
    duration : 0.8 ,
    stagger : 0.5,
    scrollTrigger :{
        trigger : `.cards`,
        scroller : `body` ,
        // markers : true ,
        start : `top 70%` ,
        end : `top 65%`,
        scrub : 1
    }    
})


gsap.from(`#colon-1`,{
    y : 100 , 
    x : 100 ,
    scrollTrigger :{
        trigger : `#colon-1` ,
        scroller : `body` ,
        scrub : 1 , 
        // markers : true
    }
})


gsap.from(`#colon-2`,{
    y : -100 , 
    x : -100 ,
    scrollTrigger :{
        trigger : `#colon-2` ,
        scroller : `body` ,
        scrub : 1 , 
        // markers : true
    }
})


gsap.from(`#page-4 h1`,{
    y : 50 ,
    scrollTrigger :{
        trigger : `#page-4`,
        scroller : `body` ,
        // markers : true ,
        start : `top 75%` ,
        end : `top 70%`,
        scrub : 1
    }
})


foooter.forEach(function(Element){
    Element.addEventListener("mouseenter" ,function(){
     cursor.style.scale = 3.5 ,
     cursor.style.border = `1px solid #fff` ,
     cursor.style.backgroundColor = `transparent` 
    })
 
    Element.addEventListener("mouseleave" ,function(){
     cursor.style.scale = 1 ,
     cursor.style.border = `0px solid #95c11e` ,
     cursor.style.backgroundColor = `#95c11e` 
    })
 })
 