  let mobileSize = 768;
  var showcaseStart = 0;
  
 // wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
  
  // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
  // you could also use addEventListener() instead
  window.onload = function() {
    document.getElementById("loading").style.display = "none";
    
     // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
     window.requestAnimationFrame(function() {
    
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
      gsap.from(".fade-up-6", {
        opacity: 0, 
        y: 80, 
        duration: 1,
        delay: 1.5
      });
    
    
    
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
      
      
       
     });
    
  };

});

  