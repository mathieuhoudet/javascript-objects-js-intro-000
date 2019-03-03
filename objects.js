var playlist = new Object({Heho: "Song1"});

function updatePlaylist(obj,key,value){
  return Object.assign({}, obj, {[key]: value});
}
