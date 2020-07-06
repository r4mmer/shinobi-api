const Section = require('./section.js')

class Videos extends Section {
  // Docs: https://shinobi.video/docs/api#content-getting-videos
  getAll() {
    return this.axios.get(`/${this.s.$user.auth_token}/videos/${this.s.$user.ke}`).then(r => r.data);
  }

  getForMonitor(monitorID, params) {
    // params example: { start: "YYYY-MM-DDTHH:mm:ss", end: "YYYY-MM-DDTHH:mm:ss" }
    // see params on https://shinobi.video/docs/api#content-get-video-files-after-start-time
    params = params || {};
    return this.axios.get(`/${this.s.$user.auth_token}/videos/${this.s.$user.ke}/${monitorID}`, { params }).then(r => r.data);
  }

  fileURL(monitorID, filename) {
    // Should this be a promise? to keep the same usage as other functions? or is it unnecessary?
    return `/${this.s.$user.auth_token}/videos/${this.s.$user.ke}/${monitorID}/${filename}`;
  }

  getFile(monitorID, filename) {
    // The user should have authority on how to use the file
    // So this should be the whole response or a ReadStream?
    return this.axios.get(this.fileURL(monitorID, filename));
  }

  getZipped(videoArr) {
    // videoArr example: [{"filename":"[FILENAME]","mid":"[MONITOR ID]"},{"filename":"[FILENAME]","mid":"[MONITOR ID]"}]
    return this.axios.get(`/${this.s.$user.auth_token}/zipVideos/${this.s.$user.ke}`, { params: { videos: videoArr } });
  }

  // Docs: https://shinobi.video/docs/api#content-modifying-a-video-or-deleting-it
  del(monitorID, filename) {
    return this.axios.get(`/${this.s.$user.auth_token}/videos/${this.s.$user.ke}/${monitorID}/${filename}/delete`).then(r => r.data);
  }
  markUnread(monitorID, filename) {
    return this.axios.get(`/${this.s.$user.auth_token}/videos/${this.s.$user.ke}/${monitorID}/${filename}/status/1`).then(r => r.data);
  }
  markRead(monitorID, filename) {
    return this.axios.get(`/${this.s.$user.auth_token}/videos/${this.s.$user.ke}/${monitorID}/${filename}/status/2`).then(r => r.data);
  }
}

module.exports = Videos
