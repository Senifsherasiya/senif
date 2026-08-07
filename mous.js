// // **************new best*************
// const d = document.querySelector('.dot'), r = document.querySelector('.ring');
//         let mx = innerWidth / 2, my = innerHeight / 2, x = mx, y = my;
//         addEventListener('mousemove', e => {
//             mx = e.clientX; my = e.clientY;
//             d.style.left = mx + 'px'; d.style.top = my + 'px';
//             let t = document.createElement('div'); t.className = 'trail';
//             t.style.left = mx + 'px'; t.style.top = my + 'px'; document.body.appendChild(t);
//             setTimeout(() => t.remove(), 300);
//             t.animate([{ opacity: .8, transform: 'translate(-50%,-50%) scale(1)' }, { opacity: 0, transform: 'translate(-50%,-50%) scale(.2)' }], { duration: 300 });
//         });
//         function loop() { x += (mx - x) * .15; y += (my - y) * .15; r.style.left = x + 'px'; r.style.top = y + 'px'; requestAnimationFrame(loop) } loop();
//         document.querySelectorAll('a,.btn').forEach(el => {
//             el.onmouseenter = () => { r.style.width = '70px'; r.style.height = '70px'; };
//             el.onmouseleave = () => { r.style.width = '44px'; r.style.height = '44px'; };
//         });
//         addEventListener('click', e => {
//             let c = document.createElement('div'); c.className = 'ripple';
//             c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px'; document.body.appendChild(c);
//             setTimeout(() => c.remove(), 700);
//         });


 const d = document.querySelector('.dot'), r = document.querySelector('.ring');
        let mx = innerWidth / 2, my = innerHeight / 2, x = mx, y = my;
        addEventListener('mousemove', e => {
            mx = e.clientX; my = e.clientY;
            d.style.left = mx + 'px'; d.style.top = my + 'px';
            let t = document.createElement('div'); t.className = 'trail';
            t.style.left = mx + 'px'; t.style.top = my + 'px'; document.body.appendChild(t);
            setTimeout(() => t.remove(), 300);
            t.animate([{ opacity: .8, transform: 'translate(-50%,-50%) scale(1)' }, { opacity: 0, transform: 'translate(-50%,-50%) scale(.2)' }], { duration: 300 });
        });
        function loop() { x += (mx - x) * .15; y += (my - y) * .15; r.style.left = x + 'px'; r.style.top = y + 'px'; requestAnimationFrame(loop) } loop();
        document.querySelectorAll('a,.btn').forEach(el => {
            el.onmouseenter = () => { r.style.width = '70px'; r.style.height = '70px'; };
            el.onmouseleave = () => { r.style.width = '44px'; r.style.height = '44px'; };
        });
        addEventListener('click', e => {
            let c = document.createElement('div'); c.className = 'ripple';
            c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px'; document.body.appendChild(c);
            setTimeout(() => c.remove(), 700);
        });