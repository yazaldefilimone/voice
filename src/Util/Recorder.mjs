class Recorder {
  constructor (){
    this.audioType = "audio/webm;codecs:opus";
    this.mediaRecorder = {};
    this.recordedAudio = [];
  }

  _setup(){
    const options = { mimType: this.audioType }
    const isSuported = MediaRecorder.isTypeSupported(options.mimType);
    if (!isSuported){
      const responseError = `is code audio type ${options.mimType} isn't supported`;
      alert(responseError)
      throw new Error(responseError);
    }
    return options;
  }

  startRecorder(audioStreem) {
    const options = this._setup();
    this.mediaRecorder = new MediaRecorder(audioStreem, options);
    
    this.mediaRecorder.onstop =  event => {
    };

    this.mediaRecorder.ondataavailable = event => {
      if(!event.data || !event.data.size){
        return
      }
    
      this.recordedAudio.push(event.data);
    };
    this.mediaRecorder.start()
  }

  stopRecorder (){
    if(this.mediaRecorder.state === "inactive") {
      return;
    }

    this.mediaRecorder.stop();
  }

  getRecorderUrl(){
    const url = new Blob(this.recordedAudio, { type: this.audioType })
    return window.URL.createObjectURL(url);
  }

}

export { Recorder }
