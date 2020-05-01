const volumeOnIconElement = document.querySelector('.fa-volume-up');
const volumeMutedIconElement = document.querySelector('.fa-volume-mute');
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

// Listen to see which sound items get clicked
soundItems.forEach(item => item.addEventListener('click', handleSoundItemsClick));

// Function that raises/lowers the volume when the slider is used
function handleVolumeUpdate(event) {
  const slider = event.currentTarget;
  const volume = slider.value * 0.01;
  const audioElement = slider.closest('.sounds__item');
  const audioItem = audioElement.dataset.description;

  const audio = document.querySelector(`.audio__${audioItem}`);

  audio.volume = volume;
}

// Listen to see which slider is used to raise/lower volume
volumeSliders.forEach(item => item.addEventListener('input', handleVolumeUpdate));

const forEach = function(array, callback, scope) {
  for (let i = 0; i < array.length; i += 1) {
    callback.call(scope, i, array[i]);
  }
};

// Function that pauses any of the audio that were playing
function handleVolumeOnClick(event) {
  const clickedButton = event.currentTarget;
  const playingAudio = document.querySelectorAll('audio');

  forEach(playingAudio, function(idex, value) {
    if (!value.paused) {
      value.pause();
      value.classList.add('paused');
    }
  });

  clickedButton.classList.toggle('volume__status--hidden');
  volumeMutedIconElement.classList.toggle('volume__status--hidden');
}

// Function that resumes playing audio that was playing when audio was paused
function handleVolumeMuteClick(event) {
  const clickedButton = event.currentTarget;
  const pausedAudio = document.querySelectorAll('.paused');

  forEach(pausedAudio, function(index, value) {
    value.play();
    value.classList.remove('paused');
  });

  clickedButton.classList.toggle('volume__status--hidden');
  volumeOnIconElement.classList.toggle('volume__status--hidden');
}

// Listen for the volume on and muted icons to be clicked
volumeOnIconElement.addEventListener('click', handleVolumeOnClick);
volumeMutedIconElement.addEventListener('click', handleVolumeMuteClick);
