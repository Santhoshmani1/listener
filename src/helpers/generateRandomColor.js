const RED_PERCENTAGE = 0.5;
const GREEN_PERCENTAGE = 0.2;
const BLUE_PERCENTAGE = 1;

export default function generateRandomColor() {
  const red = Math.floor(Math.random() * 256 * RED_PERCENTAGE);
  const green = Math.floor(Math.random() * 256 * GREEN_PERCENTAGE);
  const blue = Math.floor(Math.random() * 256 * BLUE_PERCENTAGE);

  return `rgb(${red}, ${green}, ${blue})`;
}
