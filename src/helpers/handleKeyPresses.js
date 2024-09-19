/**
 * @description Handles the key presses for the audio element to play, pause, increase volume, decrease volume, increase current time, decrease current time based on Keyboard events
 * @param {HTMLAudioElement} audio - The audio element to control
 * @param {KeyboardEvent} event - The keyboard event to handle
 */
export default function handleKeyPresses(audio, event) {
  event.preventDefault();
  const keyPressed = event.key;

  // For Spacebar click, toggle the Play / pause functionality of audio
  if (keyPressed == " ") {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  // For ArrowUp click, increase the volume of audio
  if (keyPressed == "ArrowUp") {
    audio.volume += 0.05;
  }
  // For ArrowDown click, decrease the volume of audio
  if (keyPressed == "ArrowDown") {
    audio.volume -= 0.05;
  }
  // For ArrowRight click, increase the current audio playing time by 5 seconds
  if (keyPressed == "ArrowLeft") {
    audio.currentTime -= 5;
  }
  // For ArrowLeft click, decrease the current audio playing time by 5 seconds
  if (keyPressed == "ArrowRight") {
    audio.currentTime += 5;
  }
}
