document.addEventListener('DOMContentLoaded', () => {
    const favourites = document.querySelectorAll('.favourite');
    favourites.forEach(favourite => {
        favourite.addEventListener('click', () => {
            const heart = favourite.querySelector('.heart');
            heart.classList.toggle('active');
            favourite.classList.toggle('liked');
        });
    });
});