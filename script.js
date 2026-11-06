
function updateClock() {

    // Local time
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

    document.getElementById("ampm").textContent = ampm;

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    // World clocks
    const cities = [
        { id: "newyork", zone: "America/New_York" },
        { id: "london", zone: "Europe/London" },
        { id: "tokyo", zone: "Asia/Tokyo" },
        { id: "dubai", zone: "Asia/Dubai" }
    ];

    cities.forEach(city => {
        const cityTime = new Intl.DateTimeFormat("en-US", {
            timeZone: city.zone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        }).format(now);

        document.getElementById(city.id).textContent = cityTime;
    });
}

// Update immediately and every second
updateClock();
setInterval(updateClock, 1000);


// Light and dark theme
const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "🌙 Dark Mode";
    } else {
        themeButton.textContent = "☀️ Light Mode";
    }

});
