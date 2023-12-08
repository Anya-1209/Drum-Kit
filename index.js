// Audio files mapping
const audioFiles = {
    w: 'tom-1',
    a: 'tom-2',
    s: 'tom-3',
    d: 'tom-4',
    j: 'snare',
    k: 'crash',
    l: 'kick-bass',
  };
  
  // Function to play audio
  function playAudio(soundKey) {
    const audio = new Audio(`sounds/${soundKey}.mp3`);
    audio.play();
  }
  // Function to play sound
function makeSound(key) {
  if (audioFiles.hasOwnProperty(key)) {
    const soundKey = audioFiles[key];
    playAudio(soundKey);
  }
}
  // Function to handle button click
  function handleButtonClick() {
    const buttonKey = this.getAttribute('data-key');
    makeSound(buttonKey);
    buttonAnimation(buttonKey);
  }
  
  // Function to handle key press
  function handleKeyPress(event) {
    const key = event.key.toLowerCase();
    if (audioFiles.hasOwnProperty(key)) {
      makeSound(key);
      buttonAnimation(key);
    }
  }
  
  // Add event listeners
  const drumButtons = document.querySelectorAll('.drum-button');
  drumButtons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
  });
  
  document.addEventListener('keypress', handleKeyPress);
  
  // Button animation function
  function buttonAnimation(key) {
    const activeButton = document.querySelector(`[data-key="${key}"]`);
    if (activeButton) {
      activeButton.classList.add('pressed');
      setTimeout(() => {
        activeButton.classList.remove('pressed');
      }, 100);
    }
  }
  