// JAvascript for HEro Section
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".sidebar ul li").forEach(item => {
        item.addEventListener("click", function () {
            document.querySelectorAll(".sidebar ul li").forEach(li => li.classList.remove("active"));
            this.classList.add("active");
        });
    });
});


// # js for below- hero section
function startCountdown() {
    const endTime = new Date().getTime() + (4 * 24 * 60 * 60 * 1000);
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;
        if (timeLeft > 0) {
            document.getElementById("days").innerText = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            document.getElementById("hours").innerText = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.getElementById("minutes").innerText = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById("seconds").innerText = Math.floor((timeLeft % (1000 * 60)) / 1000);
        }
    }
    setInterval(updateCountdown, 1000);
}
startCountdown();


// section for extra services of js
document.addEventListener("DOMContentLoaded", function () {
    const serviceBoxes = document.querySelectorAll(".service-box");

    serviceBoxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
        });

        box.addEventListener("mouseleave", () => {
            box.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });
});



