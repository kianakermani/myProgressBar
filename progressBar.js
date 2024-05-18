(function ($) {
    $.fn.progressBar = function (options) {
      // Default settings
      var settings = $.extend({ //extend merges the default settings with user-provided options
        startText: 'Start',
        stopText: 'Stop',
        intervalTime: 1000,
        totalSteps: 10
      }, options);
  
      return this.each(function () { //This ensures the plugin can be used on multiple elements independently
        var $this = $(this);
        var progress = 0;
        var interval;
        var isRunning = false; //Initialize variables for each element.
  
        var $progressBar = $this.find('.progress-bar');
        var $progressText = $this.find('.progress-text');
        var $startStopButton = $this.find('#startStopButton'); //Cache jQuery selectors for efficiency.
  
        $startStopButton.text(settings.startText); //Set Initial Button Text
  
        $startStopButton.click(function () {
          if (!isRunning) {
            startProgressBar();
            isRunning = true;
            $startStopButton.text(settings.stopText);
          } else {
            clearInterval(interval);
            isRunning = false;
            $startStopButton.text(settings.startText);
            resetComplete();
          }
        });
  
        function startProgressBar() {
          interval = setInterval(function () {
            $progressBar.css('width', (progress + 1) * (100 / settings.totalSteps) + '%');
            $progressText.text(progress + 1);
            progress++;
            if (progress >= settings.totalSteps) {
              clearInterval(interval);
              setTimeout(function () {
                resetProgressBar();
              }, settings.intervalTime);
            }
          }, settings.intervalTime);
        }
  
        function resetProgressBar() {
          $progressBar.css('width', '0%');
          $progressText.text('0');
          progress = 0;
          startProgressBar(); //restart
        }
  
        function resetComplete() {
          $progressBar.css('width', '0%');
          $progressText.text('0');
          progress = 0;
        }
      });
    };
  }(jQuery));