var table = {

  holdTime: null,
  restTime: [150, 135, 120, 105, 90, 75, 60, 60],
  hold: false,
  countdownTarget: null,
  statusTarget: null,

  _toggle: function() {
    table.hold = !table.hold;
    table.statusTarget.text(table.hold ? "hold" : "rest");
  },

  _setUp: function(personalBest, countdownTarget, statusTarget) {
    table.holdTime = personalBest / 2;
    table.countdownTarget = countdownTarget;
    table.statusTarget = statusTarget;
  },

  _progress: function(d) {
    var d = d || $.Deferred();
    var timeout = table.hold ? table.holdTime : table.restTime.shift();
    if (!timeout) return d.resolve();
    new Audio("TempleBell.mp3").play();

    table.countdown(timeout, table.countdownTarget).then(function() {
      table._toggle();
      table._progress(d)
    });
    return d.promise();
  },

  _tearDown: function() {
    new Audio("RoosterCrow.mp3").play();
  },

  start: function(personalBest, countdownTarget, statusTarget) {
    table._setUp(personalBest, countdownTarget, statusTarget);
    table._progress().then(function() { table._tearDown() });
  },

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
