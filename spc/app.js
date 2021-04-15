// gsap.to(".box", {x: 100, duration: 1});

window.addEventListener("DOMContentLoaded", (e)=>{
    animatePage1()
    animatePage2()
    animatePage3()
    var x = document.querySelectorAll(".list a")
    x[0].onClick = function(){
        console.log("hello")
    }
    console.log(x[0]);
})

animatePage1 = ()=>{
    var tl = gsap.timeline({
        scrollTrigger:{
            duration:2,
            trigger:".page1",
            markers:true,
            start:"top",
            end:"+=2000",
            scrub:1,
            pin: true,
        },
    })
    tl.from(".img1",{
        xPercent:-100
    })
    tl.from(".img2",{
        opacity:0,
        yPercent:-100,
        xPercent:-200
    })
    tl.from(".img3",{
        opacity:0,
        xPercent:-300
    })
    tl.from(".img4",{
        yPercent:-250
    })
    tl.from(".img5",{
        opacity:0
    })
    tl.from(".img6",{
        yPercent:-350
    })
    tl.from(".img7",{
        xPercent:-300
    })
    tl.from(".img8",{
        yPercent:-100,
        xPercent:-400
    })
    tl.from(".mid",{
        xPercent:-100
    })
    tl.from(".img9",{
        xPercent:-100
    })
    tl.from(".img10",{
        yPercent:-100,
        xPercent:-200
    })
    tl.from(".img11",{
        xPercent:-300
    })
    tl.from(".img12",{
        yPercent:-100,
        xPercent:-400
    })
    tl.from("#bottom1",{
        opacity:0
    },"-=1")

    var tl2 = gsap.timeline({
        scrollTrigger:{
            duration:2,
            trigger:"#bottom1",
            markers:true,
            start:"top",
            end:"+=3000",
            scrub:1
        },
    })
    tl2.to("#astro",{
        yPercent:100,
        rotate:360,
        xPercent:-10
    })
}

animatePage2 = ()=>{
    var tl = gsap.timeline({
        scrollTrigger:{
            duration:2,
            trigger:".page2",
            markers:true,
            start:"top",
            end:"+=3000",
            scrub:1,
            pin: true,
        },
    })
    tl.from("#p2content",{
        xPercent:-2100
    })
    tl.from(".p2img1",{
        xPercent:-100
    })
    tl.from(".camfocus1",{
        opacity:0
    })
    tl.from(".p2img2",{
        yPercent:-100,
        xPercent:-200
    },"-=2")
    tl.from(".p2img3",{
        xPercent:-300
    })
    tl.from(".p2img4",{
        yPercent:-100,
        xPercent:-400
    })
    tl.from("#bottom2",{
        opacity:0
    }) 
}

animatePage3 = ()=>{
    var tl = gsap.timeline({
        scrollTrigger:{
            duration:2,
            trigger:"#bottom2",
            markers:true,
            start:"top",
            end:"+=3000",
            scrub:1,
        },
    })
    tl.from("#fish",{
        opacity:0
    })
    tl.to("#fish",{
        xPercent:-500,
        yPercent:300
    })

    var tl2 = gsap.timeline({
        scrollTrigger:{
            duration:2,
            trigger:".page3",
            markers:true,
            start:"top",
            end:"+=3000",
            scrub:1,
            pin: true,
        },
    })
}

var flag = false;
function fun(){
    console.log("working button")
    if(flag == false){
        document.querySelector(".menu").style.left=0;
        flag = true;
    }
    else if(flag == true){
        document.querySelector(".menu").style.left="-100%";
        flag = false;
    }
}