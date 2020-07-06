# Shinobi Api

### Example Usage

``` javascript
var ShinobiApi = require('shinobi-api');
var s = new ShinobiApi('[Shinobi URL]')
s.login('[EMAIL]', '[PASSWD]'); // or s.setApikey("[APIKEY]", "[GROUP ID]");

// Example: set All monitors to record for 10 minutes
s.monitor.getAll().then(mons => {
  mons.forEach(mon => {
    s.monitor.setModeTime(mon.mid, 'record', 10);
  })
})
```
