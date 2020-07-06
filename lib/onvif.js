const Section = require('./section.js')

class Onvif extends Section {
  basicCmd(monitorID, action) {
    return this.axios.get(`/${this.s.$user.auth_token}/monitor/${this.s.$user.ke}/${monitorID}/${action}`).then(r => r.data);
  }
  // TODO: service based commands
}

module.exports = Onvif
