function loco(){
    // import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()
var crsr = document.querySelector(".cursur")
var main = document.querySelector(".main")
main.addEventListener("mousemove",function(dets){
 crsr.style.left= dets.x+20+"px"
crsr.style.top =dets.y+20+"px"
})
var crsr =document.querySelector(".cursur")
var vid = document.querySelector(".page1 video")
vid.addEventListener("mouseenter",function(){
  crsr.style.width="70px "
  crsr.style.height="20px"
  crsr.innerHTML="soundOn"
  crsr.style.color="black"
  crsr.style.borderRadius="15%"
})
vid.addEventListener("mouseleave",function(){
  crsr.style.width="20px "
  crsr.style.height="20px"
  crsr.innerHTML=" "
  crsr.style.color="EDBFFF"
  crsr.style.borderRadius="50%"
})

var vid = document.querySelector(".page3 video")
vid.addEventListener("mouseenter",function(){
  crsr.style.width="71px "
  crsr.style.height="20px"
  crsr.innerHTML="soundOn"
  crsr.style.color="black"
  crsr.style.borderRadius="15%"
})
vid.addEventListener("mouseleave",function(){
  crsr.style.width="20px "
  crsr.style.height="20px"
  crsr.innerHTML=" "
  crsr.style.color="EDBFFF"
  crsr.style.borderRadius="50%"
})

var crsr =document.querySelector(".cursur")
var vid = document.querySelector(".page2 h2")
vid.addEventListener("mouseenter",function(){
  crsr.style.width="75px "
  crsr.style.height="75px"
})
var vid = document.querySelector(".page2 h2")
vid.addEventListener("mouseleave",function(){
  crsr.style.width="30px "
  crsr.style.height="30px"
})



var tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 video",
      scroller: ".main",
      // markers:true,
      start: "top 27%",
      end: "top 0",
      scrub: 3
  }
})
gsap.to(".page1 h1",{
    x:-70,
    duration:1,
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 20%",
        end:"top 0",
        scrub: 3
    }
})
gsap.to(".page1 h2",{
    x:80,
    duration:1,
    scrollTrigger:{
        trigger:".page1 h2",
        scroller:".main",
        // markers:true,
        start:"top 20%",
        end:"top 0",
        scrub: 3
    }
})
gsap.to(".page1 video",{
  // height:"90%",
  width:"80%",
  // duration:1,
  scrollTrigger: {
    trigger: " .page1 video",
    scroller: ".main",
    //  markers:true,
    start: "top 57%",
    end: "top 30%",
    scrub: 3
}
})
var tl2 = gsap.timeline({
 
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -116%",
        end: "top -120%",
        scrub: 3
    }
  
})
tl2.to(".main",{
 backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
 
  scrollTrigger: {
      trigger: ".page3 h1",
      scroller: ".main",
       markers:true,
      start: "top -200%",
      end: "top -220%",
      scrub: 2
  }

})

tl3.to(main,{
  backgroundColor:"#0f0d0d"
})

var boxes = document.querySelectorAll(".box-cont")
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
  var att = elem.getAttribute("data-image")
    crsr.style.height="300px"
    crsr.style.width="240px"
    crsr.style.borderRadius="0"
     crsr.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.height="20px"
    crsr.style.width="20px"
    crsr.style.borderRadius="50%"
    crsr.style.backgroundImage = 'none'
  })

})
