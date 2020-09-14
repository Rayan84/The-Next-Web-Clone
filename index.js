
function startTime() {
  var timerDisplay = document.getElementById('timerDisplay');
  var date = new Date();
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (date.getSeconds() < 10) {
    var seconds = '0' + date.getSeconds();
  }else {
    var seconds = date.getSeconds();
  }

  var time = day + ':' + hours + ':' + minutes + ':' + seconds;
  timerDisplay.innerHTML = time;
}

setInterval(startTime, 1000);

const stickyNav = document.getElementById('sticky-nav');
const topOfStickyNav = stickyNav.offsetTop;
function fixStickyNav() {
  if (window.scrollY >= topOfStickyNav) {
    stickyNav.style.position = 'fixed';
  }else {
    stickyNav.style.position = 'static';
  }
}

window.addEventListener('scroll', fixStickyNav);
