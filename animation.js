// document.addEventListener("DOMContentLoaded", function () {
//   gsap.registerPlugin(ScrollTrigger);

//   const animations = [
//      {
//         elements: ".animate-hero",
//         duration: 1,
//         opacity: 0,
//         y: -150,
//         stagger: 0.3,
//         scrollTrigger: {
//            trigger: ".heroSection",
//            start: "-10 top",
//            end: "+=400",
//            toggleActions: "restart none restart none",
//            markers: false,
//         },
//      },
//      {
//         elements: ".hero-img",
//         duration: 1,
//         opacity: 0,
//         x: 150,
//         stagger: 0.3,
//         scrollTrigger: {
//            trigger: ".heroSection",
//            start: "-1 top",
//            end: "+=700",
//            toggleActions: "play none restart none",
//            markers: false,
//         },
//      },
//      {
//         elements: ".animate-first",
//         duration: 1,
//         opacity: 0,
//         y: -150,
//         stagger: 0.3,
//         scrollTrigger: {
//            trigger: ".first_section_boxes",
//            start: "30% bottom",
//            end: "bottom 30%",
//            toggleActions: "restart none restart none",
//            markers: false,
//         },
//      },
//      {
//         elements: ".animate-first-right",
//         duration: 1.5,
//         opacity: 0,
//         x: 150,
//         stagger: 0.3,
//         scrollTrigger: {
//            trigger: ".first_section_boxes",
//            start: "30% bottom",
//            end: "bottom 30%",
//            toggleActions: "restart none restart none",
//            markers: false,
//         },
//      },
//      {
//         elements: ".animate-second-right",
//         duration: 0.8,
//         opacity: 0,
//         y: -150,
//         stagger: 0.3,
//         scrollTrigger: {
//            trigger: ".second_section",
//            start: "30% bottom",
//            end: "bottom 10%",
//            toggleActions: "restart none restart none",
//            markers: false,
//         },
//      },
//      {
//         elements: ".animate-third-left",
//         duration: 0.8,
//         opacity: 0,
//         y: -150,
//         stagger: 0.3,
//         scrollTrigger: {
//            trigger: ".third_section",
//            start: "30% bottom",
//            end: "bottom 10%",
//            toggleActions: "restart none restart none",
//            markers: false,
//         },
//      },
//      {
//         elements: ".animate-second-left",
//         duration: 1.5,
//         x: -150,
//         stagger: 0.3,
//         // rotation: -10,
//         scrollTrigger: {
//            trigger: ".second_section",
//            start: "30% bottom",
//            end: "bottom 30%",
//            toggleActions: "restart none restart none",
//            markers: false,
//         },
//      },
//      {
//         elements: ".animate-third-right",
//         duration: 1.5,
//         x: 150,
//         stagger: 0.3,
//         // rotation: 5,
//         scrollTrigger: {
//            trigger: ".third_section",
//            start: "20% bottom",
//            end: "bottom 30%",
//            toggleActions: "restart none restart none",
//            markers: false,
//         },
//      },
//   ];

//   animations.forEach(({ elements, ...config }) => {
//      gsap.from(elements, config);
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
   gsap.registerPlugin(ScrollTrigger);

   gsap.from(".animate-hero", {
      duration: 1,
      opacity: 0,
      y: -150,
      stagger: 0.3,
      scrollTrigger: {
         //  trigger: ".heroSection",
         //  start: "top 80%",
         //  end: "top 20%",
         //  toggleActions: "play none none none",
         //  markers: true,
         start: "-10 top",
         end: "+=400",
         toggleActions: "restart none restart none",
         markers: false,
      },
   });
   gsap.from(".animate-hero-box", {
      duration: 1,
      opacity: 0,
      y: -150,
      stagger: 0.3,
      rotation: 50,
      scrollTrigger: {
         trigger: ".blue-center",
         markers: false,
         start: "0% 20%",
         end: "23% 30%",
         toggleActions: "restart none restart none",
      },
   });
   gsap.from(".animate-home-ablot", {
      duration: 0.5,
      opacity: 0,
      y: -150,
      stagger: 0.3,
      scrollTrigger: {
         trigger: ".home_about",
         markers: false,
         start: "10% bottom",
         end: "bottom 50%",
         toggleActions: "restart none restart none",
      },
   });
   gsap.from(".animate-four-img", {
      duration: 1,
      opacity: 1,
      y: -150,
      stagger: 0.3,
      scrollTrigger: {
         trigger: ".home_about",
         markers: false,
         start: "10% bottom",
         end: "bottom 50%",
         toggleActions: "restart none restart none",
      },
   });
   gsap.from(".animate-four-im", {
      duration: 1,
      opacity: 1,
      y: 150,
      stagger: 0.3,
      scrollTrigger: {
         trigger: ".home_about",
         markers: false,
         start: "10% bottom",
         end: "bottom -20%",
         toggleActions: "restart none restart none",
      },
   });
   gsap.from(".animate-left-about", {
      duration: 0.9,
      opacity: 0,
      x: -150,
      stagger: 0.3,
      rotation: 50,
      scrollTrigger: {
         trigger: ".home_about_leftSplit",
         markers: false,
         start: "10% bottom",
         end: "bottom 10%",
         toggleActions: "restart none restart none",
      },
   });
   gsap.from(".animate-li", {
      duration: 0.5,
      opacity: 0,
      y: 150,
      stagger: 0.3,
      scrollTrigger: {
         trigger: ".home_about_leftSplit",
         markers: false,
         start: "10% bottom",
         end: "bottom 10%",
         toggleActions: "restart none restart none",
      },
   });
});
