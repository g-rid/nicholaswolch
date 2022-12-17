// https://codepen.io/jasesmith/pen/pbXKPg

(function() {
    'use strict';
  
    // utilitiy
    let randum = function(max) {
      return Math.round(Math.random() * max);
    }
    let hexify = function(x) {
      return ('0' + parseInt(x).toString(16)).slice(-2);
    }
    let randex = function() {
      const value = Math.random() * 0xFF | 0;
      const grayscale = (value << 16) | (value << 8) | value;
      return '#' + grayscale.toString(16);
    };
  
    let blender = function(c1, c2) {
      let p1 = randum(100),
        p2 = randum(100),
        deg = randum(1080),
        mode = Math.round(Math.random());
      c1 = c1 || randex();
      c2 = c2 || randex();
      return {
        blend: (mode > 0 ? 'radial-gradient(circle at ' + p1 + '% ' + p2 + '%, ' + c1 + ', ' + c2 + ')' : 'linear-gradient(' + deg + 'deg, ' + c1 + ', ' + c2 + ')'),
        c1: c1,
        c2: c2
      };
    };
  
    // needed for transitioning the blends
    let a = blender();
    let b = blender(a.c1);
    let style = document.createElement('style');
    let body = document.querySelector('body');
    let createStyles = function(style, a, b){
      style.innerHTML = ''
      style.innerHTML += '.background-animation {background: '+a.blend+'}';
      style.innerHTML += '.background-animation::after {background: '+b.blend+'}';
    };
    
    body.appendChild(style);
  
    createStyles(style, a, b);
  
    let bgTime = setInterval(function() {
      a = blender();
      b = blender();
      createStyles(style, a, b);
    }, 10000);
  })();
