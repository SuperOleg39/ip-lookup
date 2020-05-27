const geolite2 = require('geolite2');
const maxmind = require('maxmind');

console.time('open');
 // or geolite2.paths.country or geolite2.paths.asn
maxmind.open(geolite2.paths.city).then((lookup) => {
  console.timeEnd('open');
  console.time('lookup');
  const response = lookup.get('188.123.230.60');
  console.timeEnd('lookup');
  console.log(response && response.city.names.ru);
});