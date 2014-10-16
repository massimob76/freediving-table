function Countdown(timeout, action, noticePeriod) {
  this.timeout = timeout;
  this.action = action;
  this.noticePeriod = noticePeriod;
}

Countdown.prototype.start = function() {

  var timeLeft = this.timeout;
  var interval;
  var action = this.action;

  if (typeof(action.timeout)==="function") setTimeout(function() {
    action.timeout();
  }, this.timeout * 1000);

  if (typeof(action.tick)==="function") {
    action.tick(timeLeft--);
    interval = setInterval(function() {
      if (timeLeft==0) {
        clearInterval(interval);
      } else {
        action.tick(timeLeft--);
      }
    }, 1000);

  };

  if (typeof(action.notice)==="function" && typeof(this.noticePeriod)!="undefined") setTimeout(function() {
    action.notice();
  }, (this.timeout - this.noticePeriod) * 1000);

}
