/**
 * Executive Testimonial Slider / Auto-Progression Timeline
 * For Áquila Barbosa - Assessoria Imobiliária
 * Smooth Story-style progress bars, touch swipe, pause-on-hover & clean transitions
 */

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('testimonialWrap');
  const slides = document.querySelectorAll('.testimonial-slide');
  const segments = document.querySelectorAll('.timeline-segment');
  const prevBtn = document.querySelector('.subtle-nav-arrow.prev');
  const nextBtn = document.querySelector('.subtle-nav-arrow.next');

  if (!slides.length || !segments.length) return;

  const DURATION = 5500; // ms per slide
  let currentIndex = 0;
  let startTime = null;
  let animFrameId = null;
  let isPaused = false;
  let elapsedBeforePause = 0;

  function updateSlideUI() {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentIndex);
    });

    segments.forEach((segment, idx) => {
      const fillBar = segment.querySelector('.segment-bar-fill');
      segment.classList.toggle('active', idx === currentIndex);
      segment.setAttribute('aria-selected', idx === currentIndex ? 'true' : 'false');

      if (idx < currentIndex) {
        segment.classList.add('completed');
        if (fillBar) fillBar.style.width = '100%';
      } else if (idx === currentIndex) {
        segment.classList.remove('completed');
        if (fillBar) fillBar.style.width = '0%';
      } else {
        segment.classList.remove('completed');
        if (fillBar) fillBar.style.width = '0%';
      }
    });
  }

  function tick(timestamp) {
    if (!startTime) startTime = timestamp - elapsedBeforePause;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / DURATION, 1);

    const currentFill = segments[currentIndex]?.querySelector('.segment-bar-fill');
    if (currentFill) {
      currentFill.style.width = `${(progress * 100).toFixed(2)}%`;
    }

    if (progress >= 1) {
      nextSlide();
    } else if (!isPaused) {
      animFrameId = requestAnimationFrame(tick);
    }
  }

  function startProgress() {
    stopProgress();
    startTime = null;
    elapsedBeforePause = 0;
    animFrameId = requestAnimationFrame(tick);
  }

  function stopProgress() {
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }
  }

  function pauseProgress() {
    if (isPaused) return;
    isPaused = true;
    if (startTime) {
      elapsedBeforePause = performance.now() - startTime;
    }
    stopProgress();
  }

  function resumeProgress() {
    if (!isPaused) return;
    isPaused = false;
    startTime = null;
    animFrameId = requestAnimationFrame(tick);
  }

  function goToSlide(index) {
    stopProgress();
    currentIndex = (index + slides.length) % slides.length;
    updateSlideUI();
    startProgress();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Segment Clicks
  segments.forEach((segment, idx) => {
    segment.addEventListener('click', () => {
      goToSlide(idx);
    });
  });

  // Arrows
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  // Pause on hover
  if (wrapper) {
    wrapper.addEventListener('mouseenter', pauseProgress);
    wrapper.addEventListener('mouseleave', resumeProgress);

    // Mobile touch swipe
    let touchStartX = 0;
    let touchEndX = 0;

    wrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      pauseProgress();
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      resumeProgress();
    }, { passive: true });

    function handleSwipe() {
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
  }

  // Initialize
  updateSlideUI();
  startProgress();
});
