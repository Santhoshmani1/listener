const canvas = document.getElementById("visualiser-canvas");
const container = document.body;
const audio = document.querySelector("audio");

// setting the audio context and canvas context to 2D for drawing the visualiser
const audioCtx = new AudioContext();
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const songName = document.getElementById("song-name"); // Display the name of the song from the audio source
songName.textContent = audio.src
  .split("/")
  .pop()
  .split(".")[0]
  .replace(/%20/g, " "); // since the audio source is a URL, the spaces are encoded as %20, so we need to replace them with spaces

let audioSource, analyser;
let bufferLength, dataArray;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;



// Function to generate random color for the bars with preference for blue > red > green
function generateRandomColor() {
  return `rgb(${Math.random() * 200}, ${Math.random() * 150}, ${Math.random() * 255})`;
}

// Function to draw the visualiser as a bar graph. 
function drawRectangle() {
  requestAnimationFrame(drawRectangle);

  analyser.getByteFrequencyData(dataArray);

  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  const barWidth = (WIDTH / bufferLength) * 2;
  let barHeight;
  let x = 0; // starting point of the bar

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 5;
    ctx.fillStyle = generateRandomColor(); // generate random color for the bars
    ctx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2); // fill the bars 
    x += barWidth + 1;
  }
}


function visualiseSong() {
  audio.play();

  // Check if audioSource already exists
  if (!audioSource) {
    audioSource = audioCtx.createMediaElementSource(audio);
  }

  // create AnalyserNode and connect it to audioSource, then to destination
  // https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
  analyser = audioCtx.createAnalyser();
  audioSource.connect(analyser);
  audioSource.connect(audioCtx.destination);
  analyser.fftSize = 2048; // Fast Fourier Transform window size for getting frequency domain data 
  bufferLength = analyser.frequencyBinCount; // Number of data values you will have to play with for the visualiser defaults to fftSize/2
  dataArray = new Uint8Array(bufferLength); // Unsigned integer array to store the frequency data 

  drawRectangle();
}


container.addEventListener("click", visualiseSong);
audio.addEventListener("play", visualiseSong);

