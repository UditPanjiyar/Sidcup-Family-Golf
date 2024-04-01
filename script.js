let crsr = document.getElementById('cursor');
let crsr_blur = document.getElementById("cursor-blur");

document.addEventListener("mousemove",function(e){
   crsr.style.left = e.x + "px" 
   crsr.style.top  = e.y + "px" 
   crsr_blur.style.left = e.x-150 + "px" 
   crsr_blur.style.top = e.y-150 + "px" 
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    // delay:1,
    height:95,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }

})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -90%",
        scrub:2

    }
})


let h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(e) {
     e.addEventListener("mouseenter",function(){
        crsr.style.scale = 4;
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
     })
})

h4all.forEach(function(e) {
     e.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e";
     })
})

gsap.from("#about-us img, #about-us-in",{
    y:60,
    // x:30,
    opacity:0,
    duration:0.8,
    // delay:0.5,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers: true,
        start:"top 60%",
        end:"top 40%",
        scrub:2,

    },
});

// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         markers: true,
//         start:"top 60%",
//         end:"top 40%",
//         scrub:1,

//     },
// });

gsap.from("#colon1",{
    y:-70,
    x:-70,
    durarion:2,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 38%",
        end:"top 28%",
        scrub:2
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    durarion:2,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 94%",
        end:"top 84%",
        scrub:2
    }
})

gsap.from("#page4 h1",{
    y:60,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 85%",
        end:"bottom 80%",
        scrub:2
    },
})

// let all_elements = document.querySelectorAll("#page4 .element")

// all_elements.forEach(function(e){
//     e.addEventListener("mouseenter",function(){
//         crsr.style.scale=4;
//         crsr.style.border="1px solid #fff";
//         crsr.style.backgroundColor = "transparent";
//     })
// })

// all_elements.forEach(function(e){
//     e.addEventListener("mouseleave",function(){
//         crsr.style.scale=1;
//         crsr.style.border="0px solid #95c11e";
//         crsr.style.backgroundColor = "#95c11e";
//     })
// })

