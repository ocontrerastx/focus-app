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

const forEach = function(array, callback, scope) {
  for (let i = 0; i < array.length; i += 1) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

function handleVolumeOnClick(event) {
  const clickedButton = event.currentTarget;
  const allAudio = document.querySelectorAll('audio');

  forEach(allAudio, function(index, value) {
    if (!value.paused) {
      value.pause();
      value.classList.add('paused');
    }
  });

  clickedButton.classList.toggle('volume__status--hidden');
  volumeMutedIconElement.classList.toggle('volume__status--hidden');
}

function handleVolumeMuteClick(event) {
  const clickedButton = event.currentTarget;
  const allAudio = document.querySelectorAll('.paused');

  forEach(allAudio, function(index, value) {
    value.play();
    value.classList.remove('paused');
  });

  clickedButton.classList.toggle('volume__status--hidden');
  volumeOnIconElement.classList.toggle('volume__status--hidden');
}

volumeOnIconElement.addEventListener('click', handleVolumeOnClick);
volumeMutedIconElement.addEventListener('click', handleVolumeMuteClick);
