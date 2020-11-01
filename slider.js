const slider = () => {
    const slides = document.querySelectorAll('.slide');
    console.log(slides);

    slides[1].addEventListener('click', () => {
        slides[0].classList.toggle('move-slide-1');
        slides[1].classList.toggle('move-slide-1');
        slides[2].classList.toggle('move-slide-1');
        slides[3].classList.toggle('move-slide-1');
    });

    slides[2].addEventListener('click', () => {
        slides[0].classList.toggle('move-slide-2');
        slides[1].classList.toggle('move-slide-2');
        slides[2].classList.toggle('move-slide-2');
        slides[3].classList.toggle('move-slide-2');
    });

    slides[3].addEventListener('click', () => {
        slides[0].classList.toggle('move-slide-3');
        slides[1].classList.toggle('move-slide-3');
        slides[2].classList.toggle('move-slide-3');
        slides[3].classList.toggle('move-slide-3');
    });
}

slider();