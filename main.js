const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

// on page load, whathever is in the textarea, I want to set it to default
msg.text = document.querySelector('[name="text"]').value;

// populate voices in english and display its voice name and language in the voices dropdown
function populateVoices() {
    voices = this.getVoices().filter((voice) => voice.lang.includes('en'));
    voicesDropdown.innerHTML = voices
      .map((voice) => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
}

// Each time the language is changed, it stops from speaking and starts it again
function toggle(startOver = true) {
  speechSynthesis.cancel(); // stops from speaking
  if (startOver) {
    speechSynthesis.speak(msg); // restart speaking
  }
}

// loop over every single voice in the array and find the one where its name attribute
// is the same as the option that was selected
function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}

// bind the rate, pitch and text values to the msg keys
function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach((option) => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));