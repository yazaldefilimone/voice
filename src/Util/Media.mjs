class Media {
  async getAudio(){
    const media = navigator.mediaDevices.getUserMedia ({
      audio:true
    });
    return media;
  }

}

export { Media }
