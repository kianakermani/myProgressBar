$(document).ready(function () {
  var progress = 0;
  var interval;
  var isRunning = false;

  $("#startStopButton").click(function () {
    if (!isRunning) {
      startProgressBar();
      isRunning = true;
      $("#startStopButton").text("Stop");
    } else {
      clearInterval(interval);
      isRunning = false;
      $("#startStopButton").text("Start");
      resetComplete();
    }
  });

  function startProgressBar() {
    interval = setInterval(function () {
      $(".progress-bar").css("width", (progress + 1) * 10 + "%");
      $(".progress-text").text(progress + 1);
      progress++;
      if (progress >= 10) {
        clearInterval(interval);
        setTimeout(function () {
          resetProgressBar();
        }, 1000);
      }
    }, 1000);
  }

  function resetProgressBar() {
    $(".progress-bar").css("width", "0%");
    $(".progress-text").text("1");
    progress = 0;
    startProgressBar(); //restart
  }

  function resetComplete() {
    $(".progress-bar").css("width", "0%");
    $(".progress-text").text("1");
    progress = 0;
  }
});
