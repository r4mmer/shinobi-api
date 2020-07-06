const Section = require('./section.js')

class Monitor extends Section {
  getAll() {
    return this.axios.get(`/${this.s.$user.auth_token}/monitor/${this.s.$user.ke}`)
      .then(r => {
        if (Array.isArray(r.data)) {
          return r.data;
        } else {
          // When there is only 1 monitor the api returns the monitor, not an array with the monitor.
          // this should fix the behaviour
          return [r.data];
        }
      });
  }

  getStarted() {
    return this.axios.get(`/${this.s.$user.auth_token}/smonitor/${this.s.$user.ke}`).then(r => r.data);
  }

  getMonitor(monitorID) {
    return this.axios.get(`/${this.s.$user.auth_token}/monitor/${this.s.$user.ke}/${monitorID}`).then(r => r.data);
  }

  getAllTvChan() {
    return this.axios.get(`/${this.s.$user.auth_token}/tvChannels/${this.s.$user.ke}`).then(r => r.data);
  }


  // Docs: https://shinobi.video/docs/api#content-monitor-triggers
  control(monitorID, action) {
    return this.axios.get(`/${this.s.$user.auth_token}/control/${this.s.$user.ke}/${monitorID}/${action}`).then(r => r.data);
  }

  motionEvent(monitorID, params) {
    // params example: {plug: "camera1", "name": "stairs", "reason": "motion", "confidence": 197.5}
    return this.axios.get(`/${this.s.$user.auth_token}/motion/${this.s.$user.ke}/${monitorID}`, { params }).then(r => r.data);
  }
  // whats the purpose of the hook tester?

  setMode(monitorID, mode) {
    // mode: stop, start or record
    return this.axios.get(`/${this.s.$user.auth_token}/monitor/${this.s.$user.ke}/${monitorID}/${mode}`).then(r => r.data);
  }

  setModeTime(monitorID, mode, time, timeUnit) {
    // timeUnit: min, minute, minutes, hr, hour, hours, day or days (defaults to min)
    timeUnit = timeUnit || 'min';
    return this.axios.get(`/${this.s.$user.auth_token}/monitor/${this.s.$user.ke}/${monitorID}/${mode}/${time}/${timeUnit}`).then(r => r.data);
  }

  // TODO: monitor presets
  // TODO: monitor schedules


  // add edit or delete a monitor

  addOrEdit(monitorID, params) {
    // more on https://shinobi.video/docs/api#content-add-edit-or-delete-a-monitor
    return this.axios.get(`/${this.s.$user.auth_token}/configureMonitor/${this.s.$user.ke}/${monitorID}`, { params }).then(r => r.data);
  }

  del(monitorID, deleteFiles) {
    deleteFiles = deleteFiles || false;
    return this.axios.get(`/${this.s.$user.auth_token}/configureMonitor/${this.s.$user.ke}/${monitorID}/delete`, { params: { deleteFiles } }).then(r => r.data);
  }
}

module.exports = Monitor
