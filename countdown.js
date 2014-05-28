var table = {

  countdown: function(timeout, target) {

    var d = $.Deferred(),
        remaining = timeout,
        interval;

    var updateText = function() {
      if (remaining==0) {
        clearInterval(interval);
        d.resolve();
      }
      target.text(remaining--);
    }

    interval = setInterval(updateText, 1000);

    updateText();

    return d.promise();
  }

}
