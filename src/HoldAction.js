function HoldAction(tickEl, lastOne) {
  this.tickEl = tickEl;
  this.timeoutSound = (lastOne) ? new Audio("RoosterCrow.mp3") : new Audio("TempleBell.mp3");
}

HoldAction.prototype.tick = function(value) {
  this.tickEl.text(value);
}

HoldAction.prototype.timeout = function() {
  this.timeoutSound.play();
}
