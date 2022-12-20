var root = document.documentElement;
root.addEventListener("mousemove", function (e) {
    root.style.setProperty('--mouse-x', e.clientX + "deg");
    root.style.setProperty('--mouse-y', e.clientY + "px");
});
