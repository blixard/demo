// gsap.to(".box", {x: 100, duration: 1});

window.addEventListener("DOMContentLoaded", (e)=>{
    // animatePage1()
    animatePage2()
    // animateT();
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
            start:"center",
            end:"+=500",
            scrub:1,
        },
    })
    tl.to(".page1",{
        rotation:30,
        duration:3,
        // ease:"power4"
    })
    tl.to(".page1",{
        duration:5,
        y:100,
        ease:"power4"
    })
}

animatePage2 = ()=>{
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
}

// animateT = ()=>{
//     var tl = gsap.timeline()
//     tl.from(".img1",{
//         xPercent:-100
//     })
//     tl.from(".img2",{
//         xPercent:-200
//     })
//     tl.from(".img3",{
//         xPercent:-300
//     })
//     tl.from(".img4",{
//         xPercent:-400
//     })

// }

// function fun(){
//         var tl = gsap.timeline()
//         tl.from(".img1",{
//             xPercent:-100
//         })
//         tl.from(".img2",{
//             xPercent:-200
//         })
//         tl.from(".img3",{
//             xPercent:-300
//         })
//         tl.from(".img4",{
//             xPercent:-400
//         })

//         tl.reverse();
// }
