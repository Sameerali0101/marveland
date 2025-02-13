// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });
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


document.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
        x: dets.x,
        y: dets.y
    })
})


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        scroller: "#main",
        // markers: true,
        start: "top -2%",
        end: "top -5%",
        scrub: 3,
    }
})
tl.from("#page1-content #left-one>h2 span",{
    y: "100%",
    duration: 0.7,
    delay: 1
},'same')
tl.from("#page1-content #left-one>h4 span",{
    y: "100%",
    duration: 0.7,
    delay: 1
},'same')
tl.from("#page1-content #left-one>h3 span",{
    y: "100%",
    duration: 0.7,
    delay: 1
},'same')
tl.from("#page1-content #right-one>h4 span",{
    y: "100%",
    duration: 0.7,
    delay: 1
},'same')
tl.from("#page1-content #right-one>h1 span",{
    y: "100%",
    duration: 0.7,
    delay: 1
},'same')

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        scroller: "#main",
        // markers: true,
        start: "top -80%", 
        end: "top  -70%",
        scrub: 3,
    }
})
tl2.to("#for-absolute>h1 span", {
    y: "0%",
    duration: 0.7,
    delay: 1
}, "same")
tl2.to("#for-absolute>h3 span", {
    y: "0%",
    duration: 0.7,
    delay: 1
}, "same")


let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        scroller: "#main",
        // markers: true,
        start: "top -200%", 
        end: "top  -210%",
        scrub: 3,
    }
})
tl3.from("#page3 #page3-content #right-content3 h1 span",{
    y: "100%",
    duration: 0.7,
    // delay: 1
},"same")
tl3.from("#page3 #page3-content #right-content3 h2 span",{
    y: "100%",
    duration: 0.7,
    // delay: 1
},"same")
tl.from("#page3 #page3-content #right-content3 h3 span",{
    y: "100%",
    duration: 0.7,
    // delay: 1
},"same")
gsap.from("#left-content3 img",{
    x:-400,
    duration:4,
    opacity:0,
    scrollTrigger: {
        trigger: "#main",
        scroller: "#main",
        // markers: true,
        start: "top -200%", 
        end: "top  -210%",
        scrub: 3,
    }
})


let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        scroller: "#main",
        // markers: true,
        start: "top -530%", 
        end: "top  -540%",
        scrub: 3,
    }
})
tl5.to("#main", {
    backgroundColor: "#241E26"
}, "same")



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    autoplay:{
        delay:2200,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });