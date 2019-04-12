function setTime() {
  const wrap = document.querySelector('.content__wrap');
  const timeArr = [getLocal('New_York'), getLocal('London'), getLocal('Bangko'), getLocal('Taiwan'), getLocal('Sydney')];
  let str = '';
  timeArr.forEach(item => {
    str += `
    <div class="content__NY" data-key="${item.country}">
      <div class="content__body-left">
        <div>
            <div class="content__title">${item.country}</div>
            <em>${item.date}</em>
        </div>
      </div>
      <h1>${item.time}</h1>
    </div>`;
  });
  wrap.innerHTML = str;

  const Taiwan = document.querySelectorAll('.content__NY');
  Taiwan.forEach(item => {
    if (item.dataset.key === 'Taiwan') {
      item.classList.add('active');
    }
  });
}

function getLocal(country) {
  const n = new Date();
  let targetCountry;
  switch (country) {
    case 'New_York':
      targetCountry = 'America/New_York';
      break;
    case 'London':
      targetCountry = 'Europe/London';
      break;
    case 'Bangko':
      targetCountry = 'Asia/Bangkok';
      break;
    case 'Sydney':
      targetCountry = 'Australia/Sydney';
      break;
    case 'Taiwan':
      targetCountry = 'Asia/Taipei';
      break;
  }
  localTime = n.toLocaleString('zh-TW', {timeZone: targetCountry, hour12: false,});
  return timeTransform(country, localTime);
}

function timeTransform(country, d) {
  const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const date = d.split(' ')[0];
  const time = d.split(' ')[1];
  const data = {
    country: country,
    time: time.split(':')[0] + ':' + time.split(':')[1],
    date: date.split('/')[2] + ' ' + month[date.split('/')[1] - 1] + '. ' + date.split('/')[0],
  }
  return data;
}

setTime();
setInterval(() => {
  setTime();
}, 1000);
