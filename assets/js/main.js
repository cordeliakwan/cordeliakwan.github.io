  let mobileSize = 768;
  
  gsap.from(".fade-up-1", {
    opacity: 0, 
    y: 80, 
    duration: 1
  });
  gsap.from(".fade-up-2", {
    opacity: 0, 
    y: 80, 
    duration: 1,
    delay: 0.3
  });
  gsap.from(".fade-up-3", {
    opacity: 0, 
    y: 80, 
    duration: 1,
    delay: 0.6
  });
  gsap.from(".fade-up-4", {
    opacity: 0, 
    y: 80, 
    duration: 1,
    delay: 0.9
  });
  gsap.from(".fade-up-5", {
    opacity: 0, 
    y: 80, 
    duration: 1,
    delay: 1.2
  });

  var showcaseStart = 0;

  if (window.innerWidth > mobileSize) {
    for(var i = 1; i < 9; i++) {
      gsap.from(".fade-side-"+i, {
        opacity: 0, 
        x: 80, 
        duration: 1,
        delay: showcaseStart + i * 0.3
      });
    }
  }
  
