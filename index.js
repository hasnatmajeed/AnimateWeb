const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from('#nav', {
        y: '-10',
        opacity:0,
        duration: 1.5,
        ease: Expo.easeInOut
    }) 
    .to('.bondingelem', {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay:-1,
        stagger : .2
    })
    .from('#herofooter', {
        y: -10,
        opacity:0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1
    })

    
}

 var timeOut;
function circleChaptaKaro(){
    //define the default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 1;
    window.addEventListener("mousemove", function(details){
        clearInterval(timeOut);

        xscale =  gsap.utils.clamp(.8,1.2,xprev)
        yscale =  gsap.utils.clamp(.8,1.2,yprev  )

        xprev = details.clientX;
        yprev = details.clientY;

        circleMouseFollower(xscale, yscale)
      
        timeOut = setTimeout(function()  {
             document.querySelector('#minicircle').style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1,1)`;
            
        }, 100);
        

    })
}

function circleMouseFollower(xscale, yscale){
    window.addEventListener('mousemove',function(details){
        document.querySelector('#minicircle').style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})`;
    }

    )
}

circleMouseFollower();
firstPageAnim();
circleChaptaKaro();


document.querySelectorAll("#second  .elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;
      elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            duration:0.5,
            

        });
    })
    elem.addEventListener("mousemove",function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX-rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            duration:0.3,
            top:diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot *0.5),
            

        });
    })
})