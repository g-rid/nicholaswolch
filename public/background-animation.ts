// https://codepen.io/jasesmith/pen/pbXKPg

function bgAnimation() {
    'use strict';
  
    // utilitiy
    const randum = function(max: number) {
      return Math.round(Math.random() * max);
    }
    const randex = function() {
      const value = Math.random() * 0xFF | 0;
      const grayscale = (value << 16) | (value << 8) | value;
      return '#' + grayscale.toString(16);
    };
  
    const blender = function(c1?: string | undefined, c2?: string | undefined) {
      const p1 = randum(100),
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
    const style = document.createElement('style');
    const body = document.querySelector('body') as HTMLBodyElement;
    const createStyles = function(style: HTMLStyleElement, a: { blend: unknown; c1?: string; c2?: string; }, b: { blend: unknown; c1?: string; c2?: string; }){
      style.innerHTML = ''
      style.innerHTML += '.background-animation {background: '+a.blend+'}';
      style.innerHTML += '.background-animation::after {background: '+b.blend+'}';
    };
    
    body.appendChild(style);
  
    createStyles(style, a, b);
  
    const bgTime = setInterval(function() {
      a = blender();
      b = blender();
      createStyles(style, a, b);
    }, 10000);
  }

  bgAnimation();

