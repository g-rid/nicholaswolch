// https://codepen.io/jasesmith/pen/pbXKPg
function bgAnimation() {
    'use strict';
    // utilitiy
    var randum = function (max) {
        return Math.round(Math.random() * max);
    };
    var randex = function () {
        var value = Math.random() * 0xFF | 0;
        var grayscale = (value << 16) | (value << 8) | value;
        return '#' + grayscale.toString(16);
    };
    var blender = function (c1, c2) {
        var p1 = randum(100), p2 = randum(100), deg = randum(1080), mode = Math.round(Math.random());
        c1 = c1 || randex();
        c2 = c2 || randex();
        return {
            blend: (mode > 0 ? 'radial-gradient(circle at ' + p1 + '% ' + p2 + '%, ' + c1 + ', ' + c2 + ')' : 'linear-gradient(' + deg + 'deg, ' + c1 + ', ' + c2 + ')'),
            c1: c1,
            c2: c2
        };
    };
    // needed for transitioning the blends
    var a = blender();
    var b = blender(a.c1);
    var style = document.createElement('style');
    var body = document.querySelector('body');
    var createStyles = function (style, a, b) {
        style.innerHTML = '';
        style.innerHTML += '.background-animation {background: ' + a.blend + '}';
        style.innerHTML += '.background-animation::after {background: ' + b.blend + '}';
    };
    body.appendChild(style);
    createStyles(style, a, b);
    var bgTime = setInterval(function () {
        a = blender();
        b = blender();
        createStyles(style, a, b);
    }, 10000);
}
bgAnimation();
