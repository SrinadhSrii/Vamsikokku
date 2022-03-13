function init() {
    gsap.registerPlugin(ScrollTrigger);

    var select = (e) => document.querySelector(e);
    var selectAll = (e) => document.querySelectorAll(e);
    var text = selectAll('.w1 .text')
    var text2 = selectAll('.w2 .text')
    var bv = select('.loaderbgtext .V')
    var bk = select('.loaderbgtext .K')
    var logo = select('.logo')
    var slogo = select('.loadertext')


    logoSize = getComputedStyle(logo).fontSize
    sigVSize = getComputedStyle(slogo).fontSize
    logoWidth = getComputedStyle(logo).width
    logoLeft = logo.getBoundingClientRect().left;
    logoTop = logo.getBoundingClientRect().top;

    var preloadTl1 = gsap.timeline({ duration: 1, paused: true })
    preloadTl1.fromTo(bv, {
        y: '-120%',
        ease: 'ease.in',
    }, {
        y: '-10%'
    }, 'label')
    preloadTl1.to(bv, {
        y: '0%',
        duration: 1.2
    }, 'label2')
    preloadTl1.fromTo(bk, {
        y: '100%',
        ease: 'ease.in',
    }, {
        y: '10%'
    }, 'label')
    preloadTl1.to(bk, {
        y: '0%',
        duration: 1.2
    }, 'label2')
    preloadTl1.from('.w1 span,.w2 span', {
        y: '100px',
        opacity: 0,
        ease: 'back.out(0.8)',
        stagger: {
            amount: 0.5,
            from: 'start'
        }
    }, 'label-=0.1')
    preloadTl1.to(bv, {
        y: '10%',
        duration: 1.2
    }, 'label2-=0.01')
    preloadTl1.to(bv, {
        y: '120%',
        ease: 'ease.out'
    }, 'label4')
    preloadTl1.to(bk, {
        y: '-10%',
        duration: 1.2
    }, 'label2-=0.03')
    preloadTl1.to(bk, {
        y: '-120%',
        ease: 'ease.out'
    }, 'label4')
    preloadTl1.to([text, text2], {
        letterSpacing: '-130px',
        x: '-100%',
        opacity: 0,
        stagger: {
            amount: 0.05,
            from: "start"
        },
        ease: "ease.in",
    }, '<')
    preloadTl1.to([text, text2], {
        height: '0px',
        width: '0px'
    }, '-=0.5')



    
    var home = gsap.timeline({ duration: 1.5, paused: true })
    home.to(slogo,  {
        fontSize: logoSize
    })
    home.to(slogo, {
        left: logoLeft,
        top: logoTop,
        ease: 'back.out(1)'
    }, '<')
    home.to('.w2 ', {
        paddingLeft: 0
    }, '<')
    home.from(logo,{
        duration:0.3,
        opacity:0
    },'<0.5')
    home.to('.preloader',{
        display:'none'
    },'<')
    home.from('.navlink',{
        y:'-40%',
        opacity:0,
        stagger:0.1,
        duration:0.5,
        ease:'ease.in'
    },'<')
    home.from('.top h1 , .heroicons',{
        x:-30,
        opacity:0,
        stagger:0.3
    },'<0.5')
    home.from('.top .bodytext , .aemcertified',{
        x:30,
        opacity:0,
        stagger:0.3
    },'<')
    home.from('.vamsiimage',{
        y:'100%',
        opacity:0
    },'<0.3')




    var aboutLeft = gsap.timeline({scrollTrigger:{
        trigger:'.about .right',
            start:'top 65%',
            end:'top 10%',
            toggleActions:'play none none reverse',
            // markers:true,
    }})
    aboutLeft.from('.about h2 , .about .bodytext , .about .links',{
        x:-50,
        opacity:0,
        stagger:0.2,
        ease:'back.out(2.5)'
    })

    var aboutImage = gsap.timeline({scrollTrigger:{
        trigger:'.aboutimg',
            start:'top 65%',
            end:'top 10%',
            toggleActions:'play none none reverse',
            // markers:true,
    }})
    aboutImage.from('.aboutimg',{
        x:50,
        opacity:0,
        ease:'back.out(2.5)'
    })
    var skills = gsap.timeline({scrollTrigger:{
        trigger:'.skills',
            start:'top 65%',
            end:'top 50%',
            toggleActions:'play none none reverse',
            // markers:true,
    }})
    skills.from('.skills .skill',{
        y:'100%',
        opacity:0,
        stagger:0.05,
        ease:'back.out(2.5)'
    })




    var experiencecards = gsap.timeline({scrollTrigger:{
        trigger:'.right.work',
            start:'top 50%',
            // markers:true,
            toggleActions:'play none none reverse',
    }})
    experiencecards.from('.expeiencecard',{
        x:'50%',
        y:'150%',
        opacity:0,
        stagger:0.1,
        ease:'back.out(0.5)',
    })
    var experience = gsap.timeline({scrollTrigger:{
        trigger:'.experience',
            start:'20% 65%',
            // markers:true,
            toggleActions:'play none none reverse',
    }})
    experience.from('.experience h2 , .experience .subheading',{
        x:'-50%',
        opacity:0,
        stagger:0.1,
        ease:'back.out(0.5)',
    })
    



    var eud = selectAll('.educationright .educationcard')
    var educate = gsap.timeline({scrollTrigger:{
        trigger:'.education h2',
            start:'top 30%',
            // markers:true,
            toggleActions:'play none none reverse',
    }})
    educate.from('.educationcard',{
        y:'50%',
        opacity:0,
        stagger:{
            amount:0.5,
            from:'end'
        },
        ease:'back.out(1.5)',
    })
    educate.from('.educationcard .timeline , .edimage',{
        y:'10%',
        opacity:0,
        stagger:{
            amount:0.35
        },
        ease:'back.out(0.5)',
    },'<50%')



    var testimonial = gsap.timeline({scrollTrigger:{
        trigger:'.testimonial',
            start:'20% 65%',
            // markers:true,
            toggleActions:'play none none reverse',
    }})
    testimonial.from('.testimonial h2 , .testimonial .subheading',{
        x:'-50%',
        opacity:0,
        stagger:0.1,
        ease:'back.out(0.5)',
    })
    var testimonialcard = gsap.timeline({scrollTrigger:{
        trigger:'.testcard',
            start:'20% 65%',
            // markers:true,
            toggleActions:'play none none reverse',
    },ease:'back.out(0.5)'})
    testimonialcard.from('.testcard',{
        x:'50%',
        opacity:0,
    })
        .from('.avatar,.testleft div',{
        y:'50%',
        opacity:0,
        stagger:0.2
    },'<10%')
        .from('.avatardetails',{
        y:'50%',
        opacity:0,
    },'<50%')
 



    var footertop = gsap.timeline({scrollTrigger:{
        trigger:'.footertop',
            start:'20% 65%',
            // markers:true,
            toggleActions:'play none none reverse',
    },ease:'back.out(2.5)'})

    footertop.from('.footerleft h3',{
        x:'-50%',
        opacity:0,
        stagger:0.1
    })
    footertop.from('.footerright h4, .contactlist ',{
        x:'50%',
        opacity:0,
        stagger:0.1
    },'<25%')

    var footerbottom = gsap.timeline({scrollTrigger:{
        trigger:'.footerbottom',
            start:'top bottom',
            // markers:true,
            toggleActions:'play none none reverse',
    },ease:'back.out(2.5)'})

    footerbottom.from('.footerbottom',{
        width:0,
        delay:0.5
    })
    footerbottom.from('.footerbottom .logo, .copy, .credit',{
        y:16,
        opacity:0
    })

    
    var maintl = gsap.timeline()
    maintl.add(preloadTl1.play())
          .add(home.play(), '2.1')
}


window.addEventListener("load", init());

   // var education = gsap.timeline({ease:'back.out(1)',scrollTrigger:{
    //     trigger: ".education",
    //      start: "top top",
    //      scrub:true,
    //      endTrigger:'.education',
    //      end: "bottom top",
    //      pin:'.education',
    //      markers:true
    // }})
    //     education.from('.educationcard.lastdiv',{
    //         y:100,
    //         opacity:0
    //     })
    //     education.from('.educationcard.middlediv',{
    //         y:100,
    //         opacity:0
    //     },'<25%')
    //     education.from('.educationcard.firstdiv',{
    //         y:100,
    //         opacity:0
    //     },'<25%')
    
    // ScrollTrigger.create({
    //     animation:education,
    //      trigger: ".education h2",
    //      start: "top top",
    //      scrub:true,
    //      endTrigger:'.education',
    //      end: "bottom top",
    //      pin:'.education',
    //      markers:true
    //    });