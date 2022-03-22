function init(){

    gsap.registerPlugin(ScrollTrigger);

    aboutSection=document.querySelectorAll('section')[2]
    skillsSection=document.querySelectorAll('section')[4]
    testimonialSection=document.querySelectorAll('section')[6]
    console.log(skillsSection);
    var select = (e) => document.querySelector(e);
    var selectAll = (e) => document.querySelectorAll(e);
    function moveXY(tarz,xvalue,yvalue,staz,durz=0.5){
        var tl = gsap.timeline();
        tl.from(tarz,{x:xvalue,y:yvalue, ease:'back.out(1.7)', stagger:staz,opacity:0,duration:durz})
        return tl
    }
    function scaleup(tarz,durz=0.5){
        var scaleu = gsap.timeline();
        scaleu.from(tarz,{scale:0,opacity:0,duration:durz})
        return scaleu
    }
    function scaledown(tarz){
        var scaled = gsap.timeline();
        scaled.to(tarz,{scale:0.8,opacity:0})
        return scaled
    }

    var intro = gsap.timeline()
    intro.add(moveXY(".navlink",null,'-50%',0.05))
         .add(moveXY(".name,.hey,h1,.bodypara,.button,.heroimage",null,'100%',0.1),'<50%')
         .add(moveXY(".icon",'0',null,0.05),'<75%')
         .add(moveXY(".hero-email"),'<')


    function titlesscaledown(start,effect,end){
    var h2scaledown = gsap.timeline({scrollTrigger:{
        trigger: start,
            start:'top top',
            endTrigger:effect,
            end:'=100% top',
            // markers:true,
            scrub:true,
    }})
    h2scaledown.add(scaledown(effect))
    }
    titlesscaledown(aboutSection,'.about h2','.about-card')    
    titlesscaledown(skillsSection,'.skills h2','.skills-card')  
    titlesscaledown(testimonialSection,'.testmonials h2','.testimonail-cards')  
    
    var skillscards = gsap.utils.toArray('.service-content')
    skillscards.forEach((skil, i) => {

        var test =gsap.timeline({
          scrollTrigger: {
            trigger: skil,
            start: "top center+=10%",
            end:"top top",
            // markers: true,
            toggleActions:'play none none reverse',
          },
          defaults:{ease:'back.out(0.8)',duration:0.5}
        })
          test.from(skil.querySelector('.skilllines'), {width:'0',opacity:0});
          test.from(skil.querySelector('.service-type,.service-item'), {y:'50%',scale:0.3,opacity:0},'<');
          test.from(skil.querySelectorAll('.service-type'), { },'<25%');
          test.from(skil.querySelectorAll('.service-item'), {y:'100%',x:10,opacity:0,stagger:0.03},'<50%');
      
      });
    var experienz = gsap.utils.toArray('.experience-single-card')
    experienz.forEach((exp, i) => {

        var experiencecards =gsap.timeline({
          scrollTrigger: {
            trigger: exp,
            start: "top center",
            end:"top top",
            // markers: true,
            toggleActions:'play none none reverse',
          },
          defaults:{ease:'back.in(0.8)',duration:0.5}
        })
        experiencecards.add(scaleup(exp.querySelector('.circle')))
                       .add(moveXY(exp.querySelector('.describe'),'10%'),'<')
                       .add(moveXY(exp.querySelector('.company'),'-10%'),'<')
      
      });

      var experienceline = gsap.timeline({
        scrollTrigger:{
          trigger:'.line',
          start:"top center",
          endTrigger:'.experience-single-card.last',
          end:'top center',
          scrub:true,
          // markers:true
        }
      })

      experienceline.from('.line',{height:'0%',ease:'none'})

      var cards = document.querySelector('.testimonail-cards').offsetWidth
      console.log(cards);
      var testimonialcards = gsap.timeline({
        scrollTrigger:{
          trigger:'.testimonail-cards',
          start:"center center",
          pin:'section.custom-testimonial',
          // endTrigger:'.experience-single-card.last',
          // end:'top center',
          scrub:true,
          // markers:true
        }
      })

      testimonialcards.to('.testimonail-cards',{x:'-150vw',ease:'none'})

    // var skillscards = gsap.utils.toArray('.service-content')
    //   var tests = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: '.service-content',
    //       start: "top center",
    //       end:"bottom 10%",
    //       markers: true,
    //     },
    //     defaults:{duration: 0.5, ease:'back.out(1.7)'}
    //   })
    //     tests.from('.service-content', {scale: 0.9, opacity:0 });







    }
    


window.addEventListener('load', init())