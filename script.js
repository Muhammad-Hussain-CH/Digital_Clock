

setInterval(clock, 1000);


function clock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
    var meridian;
    var time = Meradian(hours);
    hours = time.hours;
    meridian = time.meridian;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("am/pm").innerHTML = meridian;



// for the logic of 0 before minutes and seconds
    document.getElementById("hours").textContent = String(hours);
    document.getElementById("min").textContent = String(minutes).padStart(2, '0');
    document.getElementById("sec").textContent = String(seconds).padStart(2, '0');
    document.getElementById("am/pm").textContent = meridian;
}
clock();
Day();


function Meradian(hours) {
    if (hours > 12) {
    meridian = 'PM';
    hours -= 12;
  } else if (hours < 12) {
    meridian = 'AM';
    if (hours == 0) {
      hours = 12;
    }
  } else {
    meridian = 'PM';
  }
  return { hours, meridian };
}

function Day() {
    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var day = days[now.getDay()];
    var month = months[now.getMonth()];
    var date = now.getDate();
    var year = now.getFullYear();
    document.getElementById('Date').innerHTML = `${month} / ${date} / ${year}`;
    
}


