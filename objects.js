var playlist = new Object({Heho: "Song1"});

function updatePlaylist(obj,key,value){
  Object.assign({}, obj, {[key]: value});
  return playlist;
}
