const navbar = () => {
    const nav_mob = document.querySelector('.nav-mob');
    const nav_container_mob = document.querySelector('.nav-container-mob');
    const body = document.querySelector("body");
    const navLi = document.querySelectorAll('.nav-container-mob li');
    console.log(navLi);

    nav_mob.addEventListener('click', () => {
        nav_container_mob.classList.toggle('nav-container-mob-active');
        body.classList.toggle('fix-body');

        navLi.forEach((link, index) => {
            link.style.animation = `nav-animation 1s ease forwards ${index/6}s`;
            console.log(link.style.animation);
        });

    });


}


navbar();