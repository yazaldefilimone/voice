class Controlers {
  constructor({ view, media, recorder }){
    this.view = view;
    this.media = media;
    this.recorder = recorder;
  }

  static initialize(dependeces){
    const instace = new Controlers(dependeces);
    return instace._init()
  }

  _init(){
    this.view.configureStartRecordingButton(this.onStartRecording.bind(this));
    this.view.configureStopRecordingButton(this.onStopRecording.bind(this));
  }
  
  async onStopRecording(){
    this.recorder.stopRecorder();

    /* O setTimeout vai fucionar como uma promise que vai esperar 
     o startRecorder pra iniciar.*/
    setTimeout(() => {
      const audioUrl = this.recorder.getRecorderUrl()
      this.view.playAudio(audioUrl);
    });

  }

  async onStartRecording(){
    const responseMedia = await this.media.getAudio();
    this.recorder.startRecorder(responseMedia);
  }

}


export { Controlers }
