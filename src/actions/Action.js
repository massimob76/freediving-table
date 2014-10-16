function Action(partialTickEl, totalTickEl, totalTimeOffset, callback) {
  this.partialTickEl   = partialTickEl;
  this.totalTickEl     = totalTickEl;
  this.totalTimeOffset = totalTimeOffset;
  this.callback        = callback;
}

Action.prototype.tick = function(value) {
  this.partialTickEl.text(TimeHelper.convertSecondsToText(value));
  this.totalTickEl.text(TimeHelper.convertSecondsToText(value + this.totalTimeOffset));
}

Action.prototype.timeout = function() {
  this.timeoutSound.play();
  this.callback.start();
}

