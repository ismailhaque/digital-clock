const h = document.querySelector(`.h-m`);
const s = document.querySelector(`.s`);
const ap = document.querySelector(`.ap`);
const d = document.querySelector(`.d`);
const dt = document.querySelector(`.dt`);



setInterval(function() {
   let date = new Date;
   let hour = date.getHours() > 12 ? date.getHours() - 12: date.getHours();
   let minute = date.getMinutes();
   let seconds = date.getSeconds();
   let day = date.getDay();
   let da = date.getDate();
   let m = date.getMonth()+1;
   let y = date.getFullYear();

   h.innerHTML = `${ zerotime(hour)}:${zerotime(minute)}`
   s.innerHTML = `${zerotime(seconds)}`
   ap.innerHTML = `${ hour > 12 ?`AM`:`PM`}`
   d.innerHTML = `${fday(day)}`
   dt.innerHTML = `${da}-${zerotime(m)}-${y}`
}, 1000)