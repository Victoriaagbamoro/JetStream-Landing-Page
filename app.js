const navSlide =() =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

// toggle nav
burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

         // Animate links
    navLinks.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = ''
        }else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
        }
        
    });

    // Burger animation
    burger.classList.toggle('toggle')
});

}

navSlide();

gsap.to('.layer-1', {y: '-100vh', delay: .5});
    gsap.to('.layer-2', {y: '-100vh', delay: .7});
    gsap.to('.layer-3', {y: '-100vh', delay: .9});
    gsap.to('.overlay', {y: '-100vh', delay: 1.5});

    gsap.fromTo('.text-area',
        {x: '30rem', opacity: 0},
        {x: 0, opacity: 1, ease: 'back.out(1.7)', delay:1.4});

    gsap.fromTo('.manage-icon',
        {x: '30rem', opacity: 0},
        {x: 0, opacity: 1, ease: 'back.out(1.7)', delay:2.0});

    // gsap.fromTo('.circle-small',
    //     {x: '-30rem', opacity: 0},
    //     {x: 0, opacity: 1, ease: 'back.out(1.7)', delay:1});

    // gsap.fromTo('.circle-large',
    //     {x: '30rem', opacity: 0},
    //     {x: 0, opacity: 1, ease: 'back.out(1.7)', delay:1.5});