document.querySelectorAll(".box").forEach((box) => {
    const percentage = parseInt(box.querySelector("span").textContent, 10);
    const circle = box.querySelector("svg circle:nth-child(2)");
    const circumference = 2 * Math.PI * 50; // 2 * π * rayon
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - (circumference * percentage) / 100;
});