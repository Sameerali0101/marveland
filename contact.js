
function locoScrollSmooth1() {
    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true
    // });
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"


    });




    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();


}
locoScrollSmooth1();  

let tl1 = gsap.timeline({
    scrollTrigger:{
        scroller:"#main",
        trigger:"#main",
        // markers:true,
        start:"top -80%",
        end:"top -90%",
        scrub:3 ,
    }
})
tl1.from("#right-content>h3 span",{
    y: "100%",
    duration: 2.5,
    delay: 0.5
},"same")
tl1.from("#right-content>h1 span",{
    y: "100%",
    duration: 2.5,
    delay: 0.5
},"same")

tl1.from("#right-content>h4 span",{
    y: "100%",
    duration: 2.5,
    delay: 0.5
},"same")
let tl2 = gsap.timeline({
    scrollTrigger:{
        scroller:"#main",
        trigger:"#main",
        // markers:true,
        start:"top -80%",
        end:"top -90%",
        scrub:2,
    }
})
tl2.from("#another-flex i",{
    opacity:0,
    duration: 5,
    delay: 1
})
let tl3 = gsap.timeline({
    scrollTrigger:{
        scroller:"#main",
        trigger:"#main",
        // markers:true,
        start:"top -190%",
        end:"top -200%",
        scrub:3 ,
    }
})
tl3.to("#main",{
    backgroundColor:"#241E26" 
},"same")

// let tl2 = gsap.timeline({
//     scrollTrigger:{
//         scroller:"#main",
//         trigger:"#main",
//         markers:true,
//         start:"top -250%",
//         end:"top -260%",
//         scrub:2,
//     }
// })

// tl2.to("#main",{
//     backgroundColor: "#241E26"
// })


// let cursor = document.querySelector("#cursor")
document.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
        x: dets.x,
        y: dets.y   
    })
})

