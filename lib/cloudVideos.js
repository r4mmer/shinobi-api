const Section = require('./section.js')

class CloudVideos extends Section {
  getAll() {
    return this.axios.get(`/${this.s.$user.token}/cloudVideos/${this.s.$user.ke}`).then(r => r.data);
  }

  getForMonitor(monitorID, params) {
    // params:
    // {
    //    start: "YYYY-MM-DDTHH:mm:ss",
    //    end: "YYYY-MM-DDTHH:mm:ss",
    // }
    // All the above are optional, see more on https://shinobi.video/docs/api#content-get-video-files-after-start-time
    params = params || {};
    return this.axios.get(`/${this.s.$user.token}/cloudVideos/${this.s.$user.ke}/${monitorID}`, { params }).then(r => r.data);
  }

  fileURL(monitorID, filename) {
    // Should this be a promise? to keep the same usage as other functions? or is it unnecessary?
    return `/${this.s.$user.token}/cloudVideos/${this.s.$user.ke}/${monitorID}/${filename}`;
  }

  getFile(monitorID, filename) {
    // This will return the whole response so the user can have authority on how to use it
    return this.axios.get(this.fileURL(monitorID, filename));
  }
}

module.exports = CloudVideos
