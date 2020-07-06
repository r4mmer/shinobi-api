var loadLib = function(lib){
  return require(__dirname+'/lib/'+lib+'.js')
}

Shinobi = loadLib('shinobi')
loadLib('login')(Shinobi)
// maybe apikeys here?

Shinobi.subsections = {
  monitor: loadLib('monitor'),
  videos: loadLib('videos'),
  cloudVideos: loadLib('cloudVideos'),
  // triggers
  // apikeys
  // admin
  // superuser
  onvif: loadLib('onvif'),
  // embed?
};

module.exports = Shinobi
