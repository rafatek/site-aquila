/**
 * Animated Counter for Trust Badges
 */

document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.getElementById('familias-counter');
  if (!counterElement) return;

  let hasAnimated = false;

  const animateCounter = () => {
    const target = 1000;
    const duration = 1800; // ms
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOut * target);

      counterElement.textContent = `+${currentVal.toLocaleString('pt-BR')}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counterElement.textContent = `+${target.toLocaleString('pt-BR')}`;
      }
    };

    requestAnimationFrame(update);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(counterElement);
  } else {
    animateCounter();
  }
});
