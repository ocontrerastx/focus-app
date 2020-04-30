const volumeOn = document.querySelector('.fa-volume-up');
const volumeMuted = document.querySelector('.fa-volume-mute');
const soundItems = document.querySelectorAll('.sounds__item');
const volumeSliders = document.querySelectorAll('.slider');

// Function that enables/disables a specific sound when it has been clicked
function handleSoundItemsClick(event) {
  const soundItem = event.currentTarget;
  const clickedItem = event.target;
  const slider = soundItem.querySelector('.slide-container');
  const audioSelected = soundItem.dataset.description;

  if (clickedItem.className === 'slider') {
    return;
  }

  soundItem.classList.toggle('sounds__item--active');
  slider.classList.toggle('slide-container--enabled');
  const audio = document.querySelector(`.audio__${audioSelected}`);

  function togglePlay() {
    return audio.paused ? audio.play() : audio.pause();
  }

  togglePlay();
}

soundItems.forEach(item => item.addEventListener('click', handleSoundItemsClick));

function handleVolumeUpdate(event) {
  const slider = event.currentTarget;
  const volume = slider.value * 0.01;
  const audioElement = slider.closest('.sounds__item');
  const audioItem = audioElement.dataset.description;

  const audio = document.querySelector(`.audio__${audioItem}`);

  audio.volume = volume;
}

volumeSliders.forEach(item => item.addEventListener('input', handleVolumeUpdate));

function handleVolumeOnClick(event) {
  const clickedButton = event.currentTarget;

  clickedButton.classList.toggle('volume__status--hidden');
  volumeMuted.classList.toggle('volume__status--hidden');

  // Play Audio when button is clicked
}

function handleVolumeMuteClick(event) {
  const clickedButton = event.currentTarget;

  clickedButton.classList.toggle('volume__status--hidden');
  volumeOn.classList.toggle('volume__status--hidden');

  // Pause Audio when button is clicked
}

volumeOn.addEventListener('click', handleVolumeOnClick);
volumeMuted.addEventListener('click', handleVolumeMuteClick);
