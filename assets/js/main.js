// immagini dello slideshow
const slides = document.querySelectorAll('.hero__slide');

// inndice inniziale
let currentSlideIndex = 0;

// intervallo di tempo tra una slide e l'altra (in millisecondi)
const slideInterval = 5500;

function nextSlide() {
    // 1. Rimuoviamo la classe 'active' dall'immagine corrente
    slides[currentSlideIndex].classList.remove('active');

    // 2. Incrementiamo l'indice, e usiamo l'operatore modulo (%) per far ricominciare il ciclo
    // Se l'indice arriva a 3 (fuori dall'array di 3 immagini), tornerà a 0.
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;

    // 3. Aggiungiamo la classe 'active' all'immagine successiva
    slides[currentSlideIndex].classList.add('active');
}

// setInterval chiamerà la funzione nextSlide ogni 5 secondi e mezzo.
setInterval(nextSlide, slideInterval);