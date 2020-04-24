const playButton = document.querySelector('.player__button--play');
const pauseButton = document.querySelector('.player__button--pause');
const soundItems = document.querySelectorAll('.sounds__item');

// Function that enables/disables a specific sound when it has been clicked
function handleSoundItemsClick(event) {
  const soundItem = event.currentTarget;
  const slider = soundItem.querySelector('.slide-container');

  soundItem.classList.toggle('sounds__item--active');
  slider.classList.toggle('slide-container--enabled');
}

soundItems.forEach(item => item.addEventListener('click', handleSoundItemsClick));

function handlePlayButtonClick(event) {
  const clickedButton = event.currentTarget;

  clickedButton.classList.toggle('player__button--disabled');
  pauseButton.classList.toggle('player__button--disabled');

  // Play Audio when button is clicked
}

function handlePauseButtonClick(event) {
  const clickedButton = event.currentTarget;

  clickedButton.classList.toggle('player__button--disabled');
  playButton.classList.toggle('player__button--disabled');

  // Pause Audio when button is clicked
}

playButton.addEventListener('click', handlePlayButtonClick);
pauseButton.addEventListener('click', handlePauseButtonClick);
