import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        let width = window.innerWidth;
        let height = window.innerHeight;

        // Constants
        const GRAVITY = 0.05; // Gentle gravity
        const FRICTION = 0.99;
        const MOUSE_REPULSION = 1.5;
        const PARTICLE_COUNT = 150;

        const mouse = { x: -1000, y: -1000 };

        class Particle {
            constructor() {
                this.init(true);
            }

            init(randomY = false) {
                this.x = Math.random() * width;
                this.y = randomY ? Math.random() * height : -20;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = Math.random() * 2 + 1;
                this.radius = Math.random() * 3 + 1; // Varying sizes
                this.color = theme === 'dark'
                    ? `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`
                    : `rgba(0, 0, 0, ${Math.random() * 0.2 + 0.05})`;
                this.bounceFactor = 0.7;
            }

            update() {
                // Apply physics
                this.vy += GRAVITY;
                this.vx *= FRICTION;
                this.vy *= FRICTION;

                // Mouse Repulsion (Antigravity zone)
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const minDist = 150;

                if (dist < minDist) {
                    const force = (minDist - dist) / minDist;
                    const angle = Math.atan2(dy, dx);

                    this.vx += Math.cos(angle) * force * MOUSE_REPULSION;
                    this.vy += Math.sin(angle) * force * MOUSE_REPULSION;
                }

                // Move
                this.x += this.vx;
                this.y += this.vy;

                // Floor collision (Bounce)
                if (this.y + this.radius > height) {
                    this.y = height - this.radius;
                    this.vy *= -this.bounceFactor;

                    // Friction on floor
                    this.vx *= 0.95;
                }

                // Wall collision
                if (this.x + this.radius > width) {
                    this.x = width - this.radius;
                    this.vx *= -this.bounceFactor;
                } else if (this.x - this.radius < 0) {
                    this.x = this.radius;
                    this.vx *= -this.bounceFactor;
                }

                // Reset if stuck or still at bottom for too long
                if (Math.abs(this.vy) < 0.1 && Math.abs(this.vx) < 0.1 && this.y > height - 100) {
                    // Slowly respawn from top to keep flow
                    if (Math.random() < 0.01) this.init();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const init = () => {
            canvas.width = width;
            canvas.height = height;
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            init();
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleTouchMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX - rect.left;
                mouse.y = e.touches[0].clientY - rect.top;
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full -z-10 bg-transparent"
        />
    );
};

export default ParticleBackground;
