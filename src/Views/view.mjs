class View {
  constructor(){
    this.btnStart = document.querySelector("#button__start");
    this.btnStop = document.querySelector("#button__stop");
    this.audioElement = document.querySelector("#audio");
  }

  stopRecordingClick(commad){
    return () =>  {
      commad()
    }
  }

  onRecordingClick(commad){
    return () =>  {
      commad()
      this.toggleAudio({ visible: false });
    }
  }

  configureStartRecordingButton (commad){
    this.btnStart.addEventListener("click", this.onRecordingClick(commad));
  }

  configureStopRecordingButton (commad){
    this.btnStop.addEventListener("click", this.stopRecordingClick(commad));
  }

  toggleAudio({ visible }) {
    const classList = this.audioElement.classList;
    visible ? classList.remove("hidden") : classList.add("hidden");
  }

  playAudio(url){
    const audio = this.audioElement;
    audio.src = url;
    audio.muted = false // event
    this.toggleAudio({ visible: true });
    audio.addEventListener("loadedmetadata", _ => audio.play());
  }

}


export { View }
