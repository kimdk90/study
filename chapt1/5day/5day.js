const mousemove = document.querySelector("#mouseMove");
const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");

window.addEventListener("mousemove", (e) => {
    const clientX = e.clientX;
    const clientY = e.clientY;
    
    mousemove.innerHTML = `X : ${clientX}px Y : ${clientY}px`;

    mousemove.style.left = clientX + 70 + "px";
    mousemove.style.top = clientY + 50 + "px";

    line1.style.top = clientY + 38 + "px";

    line2.style.left = clientX +57+ "px";
})