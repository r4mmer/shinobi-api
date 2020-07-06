module.exports = function(Shinobi) {
  Shinobi.prototype.login = function(mail, pass, f) {
    f = f || 'dash';
    return this.axios.post('/?json=true', {
      mail,
      pass,
      'function': f,
      'machineID': 'lol,api go byebye',
    }).then(res => {
      this.$user = res.data.$user;
      return res.data.$user
    });
  }

  Shinobi.prototype.isAuth = function() {
    return this.$user != null;
  }
}
