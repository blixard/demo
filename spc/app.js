// gsap.to(".box", {x: 100, duration: 1});

window.addEventListener("DOMContentLoaded", (e)=>{
    animatePage1()
    animatePage2()
    animatePage3()
})

animatePage1 = ()=>{
    var tl = gsap.timeline()
    tl.from(".img1",{
        xPercent:-10,
        rotate:10
    })
    tl.from(".img2",{
        yPercent:20,
    })
    tl.from(".img3",{
        xPercent:-30
    })
    tl.from(".img4",{
        yPercent:-25
    })
    tl.from(".img5",{
        xPercent:30
    })
    tl.from(".img6",{
        yPercent:-35
    })
    tl.from(".img7",{
        xPercent:-30,
        rotate:60
    })
    tl.from(".img8",{
        yPercent:-10,
        xPercent:-40
    })
    tl.from(".mid",{
        xPercent:-10
    })
    tl.from(".img9",{
        xPercent:-10
    })
    tl.from(".img10",{
        yPercent:-10,
        xPercent:-20
    })
    tl.from(".img11",{
        xPercent:-30
    })
    tl.from(".img12",{
        yPercent:-40
    })
}

animatePage2 = ()=>{
    var tl = gsap.timeline({
        scrollTrigger:{
            duration:2,
            trigger:".page2",
            markers:false,
            start:"top",
            end:"+=1000",
        },
    })
    tl.from("#p2head",{
        opacity:0
    },"-=1")
    tl.from("#p2main",{
        opacity:0
    },"-=1")
}

animatePage3 = ()=>{
    var tl = gsap.timeline({
        scrollTrigger:{
            duration:2,
            trigger:"#bottom2",
            markers:false,
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
}

var flag = false;
function fun(){
    if(flag == false){
        document.querySelector(".menu").style.left=0;
        flag = true;
    }
    else if(flag == true){
        document.querySelector(".menu").style.left="-100%";
        flag = false;
    }
}
