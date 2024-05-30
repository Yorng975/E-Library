
function animateCounter(targetElement, end, duration) {
    let current = 0;
    const increment = Math.ceil(end / (duration * 60));
    const timer = setInterval(function () {
        current += increment;
        if (current >= end) {
            clearInterval(timer);
            current = end;
        }
        targetElement.textContent = current;
    }, 1000 / 60);
}
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter-number");
    const targets = [550, 90, 50, 100];
    const durations = [5, 5, 5, 5];

    counters.forEach((counter, index) => {
        animateCounter(counter, targets[index], durations[index]);
    });
});

window.addEventListener("scroll", function () {
    const counters = document.querySelectorAll(".counter-number");
    const targets = [550, 90, 50, 100];
    const durations = [5, 5, 5, 5]; //

    counters.forEach((counter, index) => {
        if (isInViewport(counter)) {
            animateCounter(counter, targets[index], durations[index]);
        }
    });
});
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
}
