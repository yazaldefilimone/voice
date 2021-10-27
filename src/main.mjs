import { View } from "./Views/view.mjs";
import { Controlers } from "./Controlers/controlers.mjs";
import { Media } from "./Util/Media.mjs"
import { Recorder } from "./Util/Recorder.mjs"

try {
  const view = new View()
  const media = new Media();
  const recorder = new Recorder();
  Controlers.initialize({ view, media, recorder });
}catch(err) {
  alert(err)
}
