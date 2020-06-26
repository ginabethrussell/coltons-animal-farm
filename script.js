function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function stopSound(){
    animalSounds.forEach(sound => {
        sound.pause();
    }); 
}

function playSound(e){
    stopSound();
    let element = e.srcElement;
    let attribute = element.getAttribute("data-name");
    const audio = document.querySelector(`audio[data-name="${attribute}"]`);
    const animal = document.querySelector(`img[data-name="${attribute}"]`);
    if (!audio) return;
    animal.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

}

const animals = Array.from(document.querySelectorAll('.animal'));
const animalSounds = Array.from(document.querySelectorAll('audio'));

animals.forEach(animal => animal.addEventListener('transitionend', removeTransition));
window.addEventListener('click', playSound);

