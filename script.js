const layers = document.querySelectorAll('.cake');
const candle = document.querySelector('.candle');
const balloonText = document.getElementById('balloonText');

let delay = 0;

// Drop cake layers one by one
layers.forEach((layer, index) => {
  setTimeout(() => {
    layer.style.opacity = "1";
    layer.style.animation = "drop 0.8s ease";
  }, delay);
  delay += 900;
});

// Show candle
setTimeout(() => {
  candle.style.opacity = "1";
  candle.style.animation = "drop 0.8s ease";
}, delay);

// Balloon text animation
setTimeout(() => {
  balloonText.style.top = "30px";
  balloonText.style.opacity = "1";
}, delay + 1000);

// Drop animation keyframes
const style = document.createElement('style');
style.innerHTML = `
@keyframes drop {
  0% { transform: translate(-50%, -200px); }
  100% { transform: translate(-50%, 0); }
}`;
document.head.appendChild(style)