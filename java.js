function AllSpanInside() {
    let forAllAni = document.querySelectorAll('.reveal');
    forAllAni.forEach((elem) => {
        let parent = document.createElement("span");
        let child = document.createElement("span");

        parent.classList.add("parent");
        child.classList.add("child");

        child.innerHTML = elem.innerHTML
        parent.appendChild(child);

        elem.innerHTML = ""
        elem.appendChild(parent);
    })

}
AllSpanInside();

function locoScrollSmooth() {
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
locoScrollSmooth();

let tl = gsap.timeline();

tl.from('.child span', {
    x: 100,
    duration: 0.7,
    delay: 0.7,
    stagger: {
        amount: 0.6
    },
    opacity: 0,
    ease: Power4.easeInOut

})
tl.to('.parent .child', {
    y: "-100%",
    duration: 0.7,
    delay: 0.1,
    ease: Power4.easeInOut
})

tl.to("#loader", {
    height: 0,
    duration: 1.4,
    ease: "Power2.easeInOut"
})
tl.to("#green", {
    height: "100%",
    top: 0,
    delay: -1.75,
    duration: 1,
    ease: "Power2.easeInOut"
})
tl.to("#green", {
    height: "0%",
    delay: -1.2,
    duration: 1,
    ease: "Power2.easeInOut"
})
gsap.to("#parent  span", {
    y: "0%",
    duration: 0.4,
    // opacity:0,
    stagger: {
        amount: 0.4
    }
})
gsap.from("img", {
    opacity: 0,
    duration: 1,
    delay: 0.4
})



let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        scroller: "#main",
        // markers: true,
        start: "top -70%",
        end: "top  -80%",
        scrub: 3,
    }
})
tl1.from("#page3 #center h4", {
    y: "100%",
    duration: 0.7,
    delay: 0.5
}, "same")
tl1.from("#page3 #center span", {
    y: "100%",
    duration: 0.7,
    delay: 0.5
}, "same")

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        scroller: "#main",
        // markers: true,
        start: "top -320%",   // for aptech -340% and -350%
        end: "top  -330%",
        scrub: 3,
    }
})
tl3.to("#main", {
    backgroundColor: " #F6EAFA "
}, "same")
tl3.from("#page5-left h1 span", {
    y: "100%",
    duration: 0.3,
    delay: 0.3,
}, "same")
tl3.from("#page5-left h3 span", {
    y: "100%",
    duration: 0.3,
    delay: 0.3,
    // opacity:0
}, "same")
tl3.from("#page5-left h4 span", {
    y: "100%",
    duration: 0.3,
    delay: 0.3,
    // opacity:0
}, "same")
tl3.from("#h2-image h2 span", {
    x: "-100%",
    duration: 0.3,
    delay: 0.3,
}, "same")
tl3.from(".bumper-car-content h2 span", {
    x: "100%",
    duration: 0.3,
    delay: 0.3,
}, "same")

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        scroller: "#main",
        // markers: true,
        start: "top -370%",   // for aptech -380% and -390%
        end: "top  -380%",
        scrub: 3,
    }
})
tl4.from(".tea-cup-content h2 span", {
    x: "-100%",
    duration: 1.5,
    // delay: 0.6,
}, "same")
tl4.from(".balloon-adven-content h2 span", {
    x: "100%",
    duration: 0.8,
    delay: 1.4,
}, "same")
tl4.from(".ferris-wheel-content h2 span", {
    x: "-100%",
    duration: 0.8,
    delay: 1.4,
}, "same")
let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        scroller: "#main",
        // markers: true,
        start: "top -620%",   // for my pc -740% and -750%
        end: "top  -630%",
        scrub: 3,
    }
})
tl5.to("#main", {
    backgroundColor: "rgb(255, 255, 255) "
}, "same")

let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        scroller: "#main",
        // markers: true,
        start: "top -620%",   // for my pc -740% and -750%
        end: "top  -630%",
        scrub: 3,
    }
})
tl6.to("#page6-content1 img", {
    x: -95,
    y: -60,
    rotate: 50,
    duration: 250,
    ease: "power1.inOut"
}, "same")
tl6.to("#page6-content1 :nth-child(2)", {
    x: -85,
    y: -35,
    rotate: -10,
    duration: 250,
    ease: "power1.inOut"
}, "same")
tl6.to("#page6-content1 :nth-child(3)", {
    x: -75,
    y: 30,
    rotate: 5,
    duration: 250,
    ease: "power1.inOut"
}, "same")
tl6.to("#page6-content2 :nth-child(1)", {
    x: 95,
    y: -60,
    rotate: 20,
    duration: 250,
    ease: "power1.inOut"
}, "same")
tl6.to("#page6-content2 img", {
    x: 102,
    y: 35,
    rotate: 16,
    duration: 250,
    ease: "power1.inOut"
}, "same")
tl6.to("#page6-content2 :nth-child(3)", {
    x: 110,
    y: 30,
    rotate: -25,
    duration: 250,
    ease: "power1.inOut"
}, "same")
let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        scroller: "#main",
        // markers: true,
        start: "top -680%",   // for my pc -740% and -750%
        end: "top  -690%",
        scrub: 2,
    }
})
tl7.from("#page7-content h1 span", {
    y: "100%",
    duration: 0.3,
    delay: 0.3,
}, "same")
tl7.from("#page7-content h4 span", {
    y: "100%",
    duration: 0.3,
    delay: 0.3,
}, "same")
tl7.from("#page7-content #second h3 span", {
    y: "100%",
    duration: 0.3,
    delay: 0.3,
}, "same")
tl7.from("#page7-content #second #i-div i", {
    y: "100%",
    duration: 0.3,
    delay: 0.3,
}, "same")


gsap.to("#main", {
    backgroundColor: "#241E26 ",
    scrollTrigger: {
        trigger: "#main",
        scroller: "#main",
        // markers: true,
        start: "top -750%",   // for my pc -740% and -750%
        end: "top  -760%",
        scrub: 2,
    }
})


let initialValue = `M 70 100 Q 600 100 1190 100`;
let finalValue = `M 70 100 Q 600 100 1190 100`;

let move = document.querySelector("#for-movement");

move.addEventListener("mousemove", (dets) => {
    initialValue = `M 70 100 Q ${dets.x} ${dets.y} 1190 100`;
    gsap.to("svg path", {
        attr: { d: initialValue },
        duration: 0.3,
        ease: "power2.out"
    })
})
move.addEventListener("mouseleave", () => {

    gsap.to("svg path", {
        attr: { d: finalValue },
        duration: 0.8,
        ease: "elastic.out(1,0,2)"
    })
})




var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

});


let cursor = document.querySelector('#cursor')

document.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
        x: dets.x,
        y: dets.y
    })
})