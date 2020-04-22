const playerButton = document.querySelector('.player__button');
const soundItems = document.querySelectorAll('.sounds__item');

// Function that enables/disables a specific sound when it has been clicked
function handleSoundItemsClick(event) {
  const soundItem = event.currentTarget;
  const slider = soundItem.querySelector('.slidecontainer');

  soundItem.classList.toggle('sounds__item-active');
  slider.classList.toggle('slidecontainer-enabled');
}

soundItems.forEach(item => item.addEventListener('click', handleSoundItemsClick));
