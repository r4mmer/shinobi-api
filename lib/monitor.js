const Section = require('./section.js')

class Monitor extends Section {
  getAll() {
    return this.axios.get(`/${this.s.$user.token}/monitor/${this.s.$user.ke}`).then(r => r.data);
  }

  getStarted() {
    return this.axios.get(`/${this.s.$user.token}/smonitor/${this.s.$user.ke}`).then(r => r.data);
  }

  getMonitor(monitorID) {
    return this.axios.get(`/${this.s.$user.token}/monitor/${this.s.$user.ke}/${monitorID}`).then(r => r.data);
  }

  getAllTvChan() {
    return this.axios.get(`/${this.s.$user.token}/tvChannels/${this.s.$user.ke}`).then(r => r.data);
  }


  // Docs: https://shinobi.video/docs/api#content-monitor-triggers
  control(monitorID, action) {
    return this.axios.get(`/${this.s.$user.token}/control/${this.s.$user.ke}/${monitorID}/${action}`).then(r => r.data);
  }

  motionEvent(params) {
    // params example: {plug: "camera1", "name": "stairs", "reason": "motion", "confidence": 197.5}
    return this.axios.get(`/${this.s.$user.token}/motion/${this.s.$user.ke}/${monitorID}` { params }).then(r => r.data);
  }
  // whats the purpose of the hook tester?

  setMode(monitorID, mode) {
    // mode: stop, start or record
    return this.axios.get(`/${this.s.$user.token}/monitor/${this.s.$user.ke}/${monitorID}/${mode}`).then(r => r.data);
  }

  setModeTime(monitorID, mode, time, timeUnit) {
    // timeUnit: min, minute, minutes, hr, hour, hours, day or days (defaults to min)
    timeUnit = timeUnit || 'min';
    return this.axios.get(`/${this.s.$user.token}/monitor/${this.s.$user.ke}/${monitorID}/${time}/${timeUnit}`).then(r => r.data);
  }

  // TODO: monitor presets
  // TODO: monitor schedules


  // add edit or delete a monitor

  addOrEdit(monitorID, params) {
    // more on https://shinobi.video/docs/api#content-add-edit-or-delete-a-monitor
    return this.axios.get(`/${this.s.$user.token}/monitor/${this.s.$user.ke}/${monitorID}`, { params }).then(r => r.data);
  }

  del(monitorID) {
    return this.axios.get(`/${this.s.$user.token}/monitor/${this.s.$user.ke}/${monitorID}/delete`).then(r => r.data);
  }
}

module.exports = Monitor