# Speech-Synthesis

## Background & Objectives
In this project we build a speech-synthesis app by using the Web Speech API, which will convert text, that the user can write in the text area, into voice. The user will be able to select the different voices available and play with its speed and pitch.

### **SOUND ON**
https://user-images.githubusercontent.com/67716187/145733808-21f9acef-e683-408a-bf64-d3130e727f96.mov

## Features
* SpeechSynthesisUtterance - interface of the Web Speech API that represents a speech request. It contains the content the speech service should read and info about how to read it (language, picht and speed).
* SpeechSynthesis: voiceschanged event - it is fired when the list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed
* Array.find() - it returns the value of the first element in the provided array that satisfies the provided testing function
* Array.filter() - it creates a new array with all elements that pass the test implemented by the provided function.

## Technologies
Project created with:
* HTML5
* CSS3
* JavaScript ES6

## Specs

### Cloning
Go to the Terminal, choose a directory where you wish to clone the repository and run:
```bash
git clone git@github.com:Francisco-Webdeveloper/Speech-Synthesis.git
```

### Local Server
Launch local webserver with the Terminal:
```bash
npm install -g parcel-bundler
parcel index.html
open http://localhost:1234 in the browser
