// gsap.to(".box", {x: 100, duration: 1});

window.addEventListener("DOMContentLoaded", (e)=>{
    animate2()
    animate()
})

animate = ()=>{
    var tl = gsap.timeline({
        scrollTrigger:{
            duration:2,
            trigger:".box",
            markers:true,
            start:"top 50%",
            end:"top 30%",
            scrub:1,
        },
    })
    tl.to(".box",{
        x:50,
        rotation:360,
        duration:3,
        ease:"power4"
    })
    tl.to(".box",{
        duration:5,
        y:100,
        ease:"power4"
    })
}

animate2 = ()=>{
    var tl = gsap.timeline({
        scrollTrigger:{
            duration:2,
            trigger:".page1",
            markers:true,
            start:"top 0%",
            end:"top 30%",
            scrub:1,
        },
    })
    tl.to(".page1",{
        rotation:30,
        duration:3,
        // ease:"power4"
    })
    // tl.to(".page1",{
    //     background:"black",
    //     duration:1,
    //     ease:"elastic"
    // })
    tl.to(".page1",{
        duration:5,
        y:100,
        ease:"power4"
    })
}