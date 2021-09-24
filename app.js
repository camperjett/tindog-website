gsap.from('.navbar-brand', { duration: 1, y: -100, ease: "power3.out" });

let tween = gsap.from(".title-img", { duration: 3, rotation: 60, ease: "elastic.out(1, 0.3)" });

//  Stagger Example
gsap.from(".feature-box", {
    duration: 2,
    scale: 0.5,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
    ease: "elastic",
    force3D: true
});

document.querySelectorAll(".feature-box").forEach(function (box) {
    box.addEventListener("click", function () {
        gsap.to(".feature-box", {
            duration: 1,
            opacity: 0,
            y: -100,
            stagger: 0.1,
            ease: "back.in"
        });
    });
});

//  ENDOF Stagger Example 