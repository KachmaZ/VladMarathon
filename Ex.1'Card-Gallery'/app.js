const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        clearActiveClasses();
        card.classList.add('active');
    });
});

function clearActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active');
    })
}