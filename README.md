# Последовательность действий

- выбираем бесплатную базу [GeoLite2](https://dev.maxmind.com/geoip/geoip2/geolite2/) от maxmind

- создаем аккаунт на [maxmind](https://www.maxmind.com/en/geolite2/signup)

тестовый license key для скачивания базы - vABc2mUaXI1wxwD4

Для использования базы, помимо создания аккаунта [просят ставить ссылку](https://support.maxmind.com/geolite-faq/general/what-do-i-need-to-do-to-meet-the-geolite2-attribution-requirement/) на maxmind,
плюс ограничивают скачивание базы - 2000 скачиваний в 24 часа на один аккаунт.

- устанавливаем npm пакеты `geolite2` и `maxmind` (устанавливаем переменную MAXMIND_LICENSE_KEY перед командой установки)

geolite2 скачивает базы данных в postinstall фазе

- запускаем скрипт с проверкой ip

```
const geolite2 = require('geolite2');
const maxmind = require('maxmind');

maxmind.open(geolite2.paths.city).then((lookup) => {
  const response = lookup.get('188.123.230.60'); // тестовый IP
  console.log(response && response.city.names.ru); // "Москва"
});
```

maxmind.open(geolite2.paths.city) на моем устройстве, с хорошим wifi отрабатывает примерно за 100ms
База данных geolite2.paths.city весит 68mb

lookup.get(ip) примерно 1ms, можно пренебречь