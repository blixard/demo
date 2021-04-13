// gsap.to(".box", {x: 100, duration: 1});

window.addEventListener("DOMContentLoaded", (e)=>{
    animatePage1()
    animatePage2()
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
        yPercent:-100,
        xPercent:-200
    })
    tl.from(".img3",{
        xPercent:-300
    })
    tl.from(".img4",{
        yPercent:-100,
        xPercent:-400
    })
    tl.from(".img5",{
        xPercent:-100
    })
    tl.from(".img6",{
        yPercent:-100,
        xPercent:-200
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
    tl.from(".bottom",{
        xPercent:-100
    },"-=1")
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
    tl.from(".p2img2",{
        yPercent:-100,
        xPercent:-200
    },"-=1")
    tl.from(".p2img3",{
        xPercent:-300
    })
    tl.from(".p2img4",{
        yPercent:-100,
        xPercent:-400
    })
    tl.to(".content",{
        xPercent:-2200
    })
    tl.from(".content2",{
        xPercent:-2500
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