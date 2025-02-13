
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

let cursor = document.querySelector("#cursor")
main.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
        x: dets.x,
        y: dets.y
    })
})

let tl1 = gsap.timeline({
    scrollTrigger:{
        scroller:"#main",
        trigger:"#main",
        markers:true,
        start:"top -50%",
        end:"top -20%",
        scrub:5
    }
})
tl1.from("#all-boxes .box-1",{
    x: 400,
    duration: 1,
    opacity:0
},"same")
tl1.from("#all-boxes .box-2",{
    x: -400,
    duration: 1,
    opacity:0
},"same")
tl1.from("#all-boxes .box-3",{
    x: -400,
    duration: 1,
    opacity:0
},"same")

let tl2 = gsap.timeline({
    scrollTrigger:{
        scroller:"#main",
        trigger:"#main",
        // markers:true,
        start:"top -420%",
        end:"top -430%",
        scrub:2,
    }
})

tl2.to("#main",{
    backgroundColor: "#241E26"
})


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



function bookingCalcu (){
    document.getElementById("bookingForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent actual form submission
    
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let date = document.getElementById("date").value;
        let guests = document.getElementById("guests").value;
    
        if (name && email && phone && date && guests) {
            alert("🎉 Booking Confirmed! See you at Evergreen Wonders Park!");
        } else {
            alert("⚠️ Please fill in all the fields!");
        }
    });
    
}
bookingCalcu();





// document.querySelectorAll(".faq-question").forEach(item => {
//     item.addEventListener("click", () => {
//         let currentlyActive = document.querySelector(".faq-question.active");
        
//         if (currentlyActive && currentlyActive !== item) {
//             currentlyActive.classList.remove("active");
//             currentlyActive.nextElementSibling.style.display = "none";
//             currentlyActive.querySelector("span").textContent = "+";
//         }
        
//         let answer = item.nextElementSibling;
//         let icon = item.querySelector("span");
        
//         if (answer.style.display === "block") {
//             answer.style.display = "none";
//             item.classList.remove("active");
//             icon.textContent = "+";
//         } else {
//             answer.style.display = "block";
//             item.classList.add("active");
//             icon.textContent = "−";
//         }
//     });
// });
