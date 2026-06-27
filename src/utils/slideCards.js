export function slideCards(track, direction, positionRef) {
  if (!track) return;

  const firstCard = track.querySelector(".card");
  const secondCard = firstCard.nextElementSibling;


  const step = secondCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left;

  positionRef.current += direction * step;

  const resetPosition = track.scrollWidth / 2;

  if(direction === 1 && positionRef.current >= resetPosition) {
    positionRef.current -= resetPosition;
  }

  if(direction === -1 && positionRef.current <= 0) {
    positionRef.current += resetPosition;
  }

  track.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
}
