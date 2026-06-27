export function playCarousel(isPaused, track, direction) {
  if (!track) return;

  let position = direction === 1 ? 0 : track.scrollWidth / 2;
  const speed = 0.5;
  let animationFrame;

  const animate = () => {
    if (!isPaused.current) {
      const resetPosition = track.scrollWidth / 2;

      position += direction * speed;

      if (direction === 1 && position >= resetPosition) {
        position -= resetPosition;
      }

      if (direction === -1 && position <= 0) {
        position += resetPosition;
      }

      track.style.transform = `translate3d(${-position}px, 0, 0)`;
    }

    animationFrame = requestAnimationFrame(animate);
  };

  animationFrame = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(animationFrame);
}
