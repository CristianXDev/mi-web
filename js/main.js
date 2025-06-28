 document.addEventListener('DOMContentLoaded', function() {

    // Crear figuras dinámicas
    const colors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA'];
    const landingSection = document.querySelector('.landing-section');
    
    // Crear múltiples figuras
    for (let i = 0; i < 15; i++) {
        const shape = document.createElement('div');
                const shapeType = Math.floor(Math.random() * 3); // 0: círculo, 1: triángulo, 2: cuadrado
                const size = Math.random() * 100 + 50;
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                // Posición inicial aleatoria
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                
                if (shapeType === 0) {
                    // Círculo
                    shape.className = 'shape circle';
                    shape.style.width = `${size}px`;
                    shape.style.height = `${size}px`;
                    shape.style.backgroundColor = color;
                } else if (shapeType === 1) {
                    // Triángulo
                    shape.className = 'shape triangle';
                    const sizePx = `${size}px`;
                    const transparent = 'transparent';
                    const directions = [
                        `0 0 0 ${sizePx} ${sizePx} ${sizePx}`,
                        `0 0 ${sizePx} 0 ${sizePx} ${sizePx}`,
                        `0 ${sizePx} ${sizePx} 0 ${sizePx} ${sizePx}`,
                        `${sizePx} 0 0 0 0 ${sizePx}`
                    ];
                    const randomDir = directions[Math.floor(Math.random() * directions.length)];
                    shape.style.borderWidth = randomDir;
                    shape.style.borderColor = `transparent transparent ${color} transparent`;
                } else {
                    // Cuadrado
                    shape.className = 'shape square';
                    shape.style.width = `${size}px`;
                    shape.style.height = `${size}px`;
                    shape.style.backgroundColor = color;
                }
                
                shape.style.left = `${posX}%`;
                shape.style.top = `${posY}%`;
                shape.style.opacity = Math.random() * 0.5 + 0.3;
                
                landingSection.appendChild(shape);
                
                // Animación con anime.js
                anime({
                    targets: shape,
                    translateX: {
                        value: () => anime.random(-200, 200),
                        duration: () => anime.random(8000, 15000),
                        easing: 'easeInOutQuad'
                    },
                    translateY: {
                        value: () => anime.random(-200, 200),
                        duration: () => anime.random(8000, 15000),
                        easing: 'easeInOutQuad'
                    },
                    rotate: {
                        value: () => anime.random(-360, 360),
                        duration: () => anime.random(8000, 15000),
                        easing: 'easeInOutQuad'
                    },
                    scale: {
                        value: () => anime.random(0.5, 1.5),
                        duration: () => anime.random(8000, 15000),
                        easing: 'easeInOutQuad'
                    },
                    duration: () => anime.random(10000, 20000),
                    loop: true,
                    direction: 'alternate'
                });
            }
            
            // Animación para el contenido principal
            anime({
                targets: '.landing-content h1',
                opacity: [0, 1],
                translateY: [-50, 0],
                duration: 1500,
                easing: 'easeOutExpo'
            });
            
            anime({
                targets: '.landing-content p',
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 1500,
                delay: 500,
                easing: 'easeOutExpo'
            });

            anime({
                targets: '.landing-content .header-social',
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 1000,
                delay: 1000,
                easing: 'easeOutElastic'
            });

            
            anime({
                targets: '.landing-content .btn-lg',
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 1000,
                delay: 1500,
                easing: 'easeOutElastic'
            });

            anime({
                targets: '.landing-content .developer-photo',
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 1000,
                delay: 2000,
                easing: 'easeOutElastic'
            });

            anime({
                targets: '.bx-animate-lrb',
                translateX: {
                    value: ['50px', 'calc(100% + 10px)'],
                    duration: 3000,
                    easing: 'easeInOutSine'
                },
                // Rotación continua
                rotate:{
                    value: [0, 180],
                    duration: 3000,
                    easing: 'easeInOutQuad'
                },
                // Configuración de la animación
                loop: true,
                direction: 'alternate'
            });

            anime({
                targets: '.bx-animate-block',
                translateY: [0, -40, 0],
                rotate: [0, 15, -10, 0],
                duration: 1000,
                easing: 'easeOutBounce',
                loop: true
            });


            anime({
              targets: '.bx-animate-folder',
              scale: [1, 0, 0.5, 1],
              rotate: [0, 360],
              opacity: [1, 0,0.5,1],
              duration: 2000,
              easing: 'easeInExpo',
              loop: true
          });

        });


        //Navbar
         const navbar = document.querySelector('.navbar');

         window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });