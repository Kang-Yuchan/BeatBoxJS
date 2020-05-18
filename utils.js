/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called
 */
class Beat {
  constructor(fileSrc) {
    this.audio = new Audio(fileSrc);
  }

  play = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  };
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
  constructor(color, keyCode) {
    this.color = color;
    this.keyCode = keyCode;
    this.element = document.getElementById(keyCode);
    this.elemStyle = this.element.style;
    this.setButtonColorInHTML();
    this.setATransitionEndListener();
  }

  setATransitionEndListener = () => {
    this.element.addEventListener("transitionend", this.deselect);
  };

  /**
   * Set the button color based on color specified
   */
  setButtonColorInHTML = () => {
    this.elemStyle.borderColor = this.color;
  };

  /**
   * Select function to set the background color and boxShadow
   */
  select = () => {
    this.elemStyle.backgroundColor = this.color;
    this.elemStyle.style.boxShadow = "0px 0px 17px 0px";
  };

  /**
   * Deselect function to reset background color and boxShadow
   */
  deselect = () => {
    this.elemStyle.backgroundColor = "transparent";
    this.elemStyle.boxShadow = "none";
  };
}
