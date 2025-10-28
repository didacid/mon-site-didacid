import React, { useEffect, useRef } from 'react';

const AnimatedBanner: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 150,
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (canvas) {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        }
    };
    
    const handleMouseOut = () => {
        mouse.x = undefined;
        mouse.y = undefined;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    let particles: Particle[] = [];
    const particleCount = Math.floor((width * height) / 5000);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      density: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.5 + 1.5;
        // Increased speed
        this.speedX = (Math.random() * 1.5 - 0.75);
        this.speedY = (Math.random() * 1.5 - 0.75);
        this.density = (Math.random() * 20) + 10;
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = '#6A3DE8';
          ctx.shadowBlur = 25;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      update() {
        if (mouse.x !== undefined && mouse.y !== undefined) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (mouse.radius - distance) / mouse.radius;
                const directionX = forceDirectionX * force * this.density;
                const directionY = forceDirectionY * force * this.density;
                
                this.x -= directionX * 0.1;
                this.y -= directionY * 0.1;
            }
        }
        
        if (this.x > width + this.size || this.x < -this.size) {
          this.speedX = -this.speedX;
        }
        if (this.y > height + this.size || this.y < -this.size) {
          this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
      }
    }

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            opacityValue = 1 - (distance / 140);
            if (ctx) {
                // Changed line color to white for better visibility
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue * 0.7})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    const init = () => {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        animate();
    }

    const handleResize = () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        const newParticleCount = Math.floor((width * height) / 5000);
        particles = [];
         for (let i = 0; i < newParticleCount; i++) {
            particles.push(new Particle());
        }
    };
    
    window.addEventListener('resize', handleResize);
    
    init();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      if(animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };

  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />;
};

export default AnimatedBanner;