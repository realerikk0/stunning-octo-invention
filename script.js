// 主题切换功能
document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;

    // 从本地存储加载主题
    const savedTheme = localStorage.getItem('theme') || 'glass';
    setTheme(savedTheme);

    // 为每个主题按钮添加点击事件
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            setTheme(theme);
            localStorage.setItem('theme', theme);
        });
    });

    // 设置主题
    function setTheme(theme) {
        // 移除所有主题类
        body.classList.remove('theme-glass', 'theme-geek');

        // 添加选中的主题类
        body.classList.add(`theme-${theme}`);

        // 更新按钮状态
        themeButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-theme') === theme) {
                btn.classList.add('active');
            }
        });

        // 添加切换动画
        body.style.transition = 'all 0.5s ease';
    }

    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有卡片元素
    const cards = document.querySelectorAll('.feature-card, .model-card, .stat-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Geek主题的额外效果 - 扫描线效果
    function addScanlineEffect() {
        if (body.classList.contains('theme-geek')) {
            const scanline = document.createElement('div');
            scanline.className = 'scanline';
            scanline.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: linear-gradient(transparent, rgba(0, 255, 136, 0.8), transparent);
                pointer-events: none;
                z-index: 9999;
                animation: scan 3s linear infinite;
            `;

            // 添加扫描动画
            if (!document.querySelector('style[data-scanline]')) {
                const style = document.createElement('style');
                style.setAttribute('data-scanline', 'true');
                style.textContent = `
                    @keyframes scan {
                        0% { transform: translateY(0); opacity: 0; }
                        10% { opacity: 1; }
                        90% { opacity: 1; }
                        100% { transform: translateY(100vh); opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }

            // 检查是否已存在扫描线
            const existingScanline = document.querySelector('.scanline');
            if (!existingScanline) {
                document.body.appendChild(scanline);
            }
        } else {
            // 移除扫描线
            const scanline = document.querySelector('.scanline');
            if (scanline) {
                scanline.remove();
            }
        }
    }

    // 初始检查
    addScanlineEffect();

    // 监听主题变化
    const originalSetTheme = setTheme;
    setTheme = function(theme) {
        originalSetTheme(theme);
        setTimeout(addScanlineEffect, 100);
    };

    // 数字动画效果
    function animateValue(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }

            const text = element.textContent;
            if (text.includes('+')) {
                element.textContent = Math.floor(current) + '+';
            } else if (text.includes('%')) {
                element.textContent = current.toFixed(1) + '%';
            } else if (text.includes('s')) {
                element.textContent = current.toFixed(1) + 's';
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // 当统计数据进入视图时触发动画
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const value = entry.target.textContent;
                let numValue = parseFloat(value.replace(/[^0-9.]/g, ''));

                if (value.includes('M+')) {
                    animateValue(entry.target, 0, 1, 1000);
                } else if (value.includes('+')) {
                    animateValue(entry.target, 0, numValue, 1000);
                } else if (value.includes('%')) {
                    animateValue(entry.target, 90, numValue, 1000);
                } else if (value.includes('s')) {
                    animateValue(entry.target, 0, numValue, 1000);
                }

                entry.target.dataset.animated = 'true';
            }
        });
    }, { threshold: 0.5 });

    // 观察所有统计值
    document.querySelectorAll('.stat-value').forEach(stat => {
        statObserver.observe(stat);
    });

    // 鼠标跟随效果（仅Glassmorphism主题）
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        if (body.classList.contains('theme-glass')) {
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;

            const bgGradient = document.querySelector('.bg-gradient');
            if (bgGradient) {
                const xPercent = (currentX / window.innerWidth) * 100;
                const yPercent = (currentY / window.innerHeight) * 100;

                bgGradient.style.background = `
                    radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(120, 119, 198, 0.4), transparent 40%),
                    radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(253, 121, 168, 0.3), transparent 50%),
                    radial-gradient(circle at 40% 20%, rgba(99, 179, 237, 0.3), transparent 50%)
                `;
            }
        }
        requestAnimationFrame(animateGlow);
    }

    animateGlow();

    // 打字机效果（可选）
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // 添加控制台欢迎信息（Geek风格）
    if (body.classList.contains('theme-geek')) {
        console.log('%c⚡ LLM Arena', 'color: #00ff88; font-size: 24px; font-weight: bold; font-family: monospace;');
        console.log('%c> System initialized', 'color: #00ff88; font-family: monospace;');
        console.log('%c> Welcome to the arena...', 'color: #00ffff; font-family: monospace;');
    }
});
