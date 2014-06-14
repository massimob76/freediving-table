function HoldAction(partialTickEl, totalTickEl, totalTimeOffset) {
  this.partialTickEl = partialTickEl;
  this.totalTickEl = totalTickEl;
  this.totalTimeOffset = totalTimeOffset;
  this.timeoutSound = new Audio("TempleBell.mp3");
}

HoldAction.prototype.tick = function(value) {
  this.partialTickEl.text(value);
  this.totalTickEl.text(value + this.totalTimeOffset);
}

HoldAction.prototype.timeout = function() {
  this.timeoutSound.play();
}
