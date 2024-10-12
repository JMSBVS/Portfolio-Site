import React, { useEffect } from 'react';

const CanvasDotsBg = () => {
    useEffect(() => {
        const canvasDotsBg = () => {
            const canvas = document.querySelector('.canvas-2');
            const ctx = canvas.getContext('2d');
            const colorDot = ['rgb(81, 162, 233)', 'rgb(81, 162, 233)', 'rgb(81, 162, 233)', 'rgb(255, 77, 90)'];
            const color = 'rgb(81, 162, 233)';
            canvas.width = document.body.scrollWidth;
            canvas.height = window.innerHeight;
            canvas.style.display = 'block';
            ctx.lineWidth = 0.3;
            ctx.strokeStyle = color;

            let mousePosition = {
                x: (30 * canvas.width) / 100,
                y: (30 * canvas.height) / 100,
            };

            const windowSize = window.innerWidth;
            let dots;

            if (windowSize > 1600) {
                dots = { nb: 100, distance: 0, d_radius: 0, array: [] };
            } else if (windowSize > 1300) {
                dots = { nb: 75, distance: 0, d_radius: 0, array: [] };
            } else if (windowSize > 1100) {
                dots = { nb: 50, distance: 0, d_radius: 0, array: [] };
            } else {
                dots = { nb: 1, distance: 0, d_radius: 0, array: [] };
                ctx.globalAlpha = 0;
            }

            function Dot() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = -0.5 + Math.random();
                this.vy = -0.5 + Math.random();
                this.radius = Math.random() * 1.5;
                this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
            }

            Dot.prototype = {
                create: function () {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                    const top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
                    const dotDistance = Math.sqrt((this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y + top) ** 2);
                    const distanceRatio = dotDistance / (windowSize / 2);
                    ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;
                    ctx.fill();
                },
                animate: function () {
                    for (let i = 1; i < dots.nb; i++) {
                        const dot = dots.array[i];
                        if (dot.y < 0 || dot.y > canvas.height) {
                            dot.vx = dot.vx;
                            dot.vy = -dot.vy;
                        } else if (dot.x < 0 || dot.x > canvas.width) {
                            dot.vx = -dot.vx;
                            dot.vy = dot.vy;
                        }
                        dot.x += dot.vx;
                        dot.y += dot.vy;
                    }
                },
            };

            function createDots() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (let i = 0; i < dots.nb; i++) {
                    dots.array.push(new Dot());
                    const dot = dots.array[i];
                    dot.create();
                }
                dots.array[0].radius = 1.5;
                dots.array[0].colour = '#51a2e9';
            }

            const draw = setInterval(createDots, 1000 / 30);

            window.onscroll = () => {
                mousePosition.x = window.innerWidth / 2;
                mousePosition.y = window.innerHeight / 2;
                const top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
                mousePosition.y += top;
            };

            window.onresize = () => {
                clearInterval(draw);
                canvasDotsBg();
            };
        };

        canvasDotsBg();
    }, []);

    return <canvas className="canvas-2" />;
};

export default CanvasDotsBg;
