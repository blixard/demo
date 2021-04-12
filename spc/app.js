// gsap.to(".box", {x: 100, duration: 1});

window.addEventListener("DOMContentLoaded", (e)=>{
    animatePage1()
    animatePage2()
    console.log("hi")
    // animate()
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
        yPercent:-200,
        xPercent:-200
    })
    tl.from(".img7",{
        xPercent:-300
    })
    tl.from(".img8",{
        yPercent:-200,
        xPercent:-400
    })
    tl.from(".img9",{
        xPercent:-100
    })
    tl.from(".img10",{
        yPercent:-300,
        xPercent:-200
    })
    tl.from(".img11",{
        xPercent:-300
    })
    tl.from(".img12",{
        yPercent:-300,
        xPercent:-400
    })

}

animatePage2 = ()=>{
    var tl = gsap.timeline({
        scrollTrigger:{
            duration:2,
            trigger:".page2",
            markers:true,
            start:"top",
            end:"+=2000",
            scrub:1,
            pin: true,
        },
    })
    tl.from(".p2img1",{
        xPercent:-100
    })
    tl.from(".p2img2",{
        yPercent:-100,
        xPercent:-200
    })
    tl.from(".p2img3",{
        xPercent:-300
    })
    tl.from(".p2img4",{
        yPercent:-100,
        xPercent:-400
    })
    tl.from(".p2img5",{
        xPercent:-100
    })
    tl.from(".p2img6",{
        yPercent:-200,
        xPercent:-200
    })
    tl.from(".p2img7",{
        xPercent:-300
    })
    tl.from(".p2img8",{
        yPercent:-200,
        xPercent:-400
    })
    tl.from(".p2img9",{
        xPercent:-100
    })
    tl.from(".p2img10",{
        yPercent:-300,
        xPercent:-200
    })
    tl.from(".p2img11",{
        xPercent:-300
    })
    tl.from(".p2img12",{
        yPercent:-300,
        xPercent:-400
    })
    

}