const axios = require('axios');

class Shinobi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.$user = null;
    this.axios = axios.create({
      baseURL: baseUrl,
      // timeout: 1000,
      // headers: {'X-Custom-Header': 'foobar'},
    });
    Object.entries(Shinobi.subsections).forEach(([name, section]) => {
      this[name] = new section(this);
    })
  }
}

module.exports = Shinobi
